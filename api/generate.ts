import type { VercelRequest, VercelResponse } from '@vercel/node';

export const config = { maxDuration: 120 };

const BASE = 'https://console.gmicloud.ai';
const QUEUE = BASE + '/api/v1/ie/requestqueue/apikey/requests';
const MODEL = 'hy-image-v3.5-preview';
const ALLOWED_SIZES = new Set(['1024x1024','1536x1536','2048x2048','1920x1080','1080x1920','1536x1152','1152x1536','2560x1440','1440x2560','3840x2160','2160x3840','4096x4096']);
const json = async (r: Response) => {
  const raw = await r.text();
  try {
    return JSON.parse(raw);
  } catch {
    return { error: raw.slice(0, 500) || 'Invalid GMI response' };
  }
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });

  const key = process.env.GMI_API_KEY;
  if (!key) return res.status(503).json({ error: 'GMI_API_KEY is missing from this Vercel deployment.', code: 'GMI_KEY_MISSING' });

  const { prompt, size = '2048x2048', seed = 0, images = [] } = req.body || {};
  if (typeof prompt !== 'string' || !prompt.trim()) return res.status(400).json({ error: 'Prompt is required.' });
  if (!ALLOWED_SIZES.has(size)) return res.status(400).json({ error: 'Unsupported image size.' });
  if (!Array.isArray(images) || images.length > 5 || images.some((x: any) => typeof x !== 'string' || !/^https:\/\//i.test(x))) {
    return res.status(400).json({ error: 'References must be 0-5 public HTTPS image URLs.' });
  }

  const headers = { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' };
  try {
    const payload: any = { prompt: prompt.trim(), size, seed: Number.isInteger(Number(seed)) ? Number(seed) : 0 };
    if (images.length) payload.image = images;

    const submitted = await fetch(QUEUE, {
      method: 'POST',
      headers,
      body: JSON.stringify({ model: MODEL, payload }),
    });
    const data: any = await json(submitted);
    if (!submitted.ok) {
      return res.status(submitted.status).json({
        error: data?.message || data?.error || 'GMI request failed',
        details: data,
        stage: 'submit',
      });
    }

    const requestId = data?.request_id || data?.outcome?.request_id || data?.id;
    if (data?.status === 'success' || data?.outcome?.media_urls?.length) {
      return res.status(200).json({ ...data, request_id: data?.request_id || requestId });
    }
    if (!requestId) {
      return res.status(502).json({ error: 'GMI accepted the request but returned no request ID.', details: data });
    }

    // Return immediately. The browser polls /api/gmi-status so no function stays open
    // while HY IMAGE processes a queued generation.
    return res.status(202).json({ status: data?.status || 'queued', request_id: requestId });
  } catch (e: any) {
    return res.status(502).json({ error: e?.message || 'Unable to reach GMI Cloud.', code: 'GMI_NETWORK_ERROR' });
  }
}
