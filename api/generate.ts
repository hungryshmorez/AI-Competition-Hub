import type { VercelRequest, VercelResponse } from '@vercel/node';

export const config = { maxDuration: 120 };

const GMI_URL = 'https://console.gmicloud.ai/api/v1/ie/requestqueue/apikey/requests';
const ALLOWED_SIZES = new Set(['1024x1024','1536x1536','2048x2048','1920x1080','1080x1920','1536x1152','1152x1536','2560x1440','1440x2560','3840x2160','2160x3840','4096x4096']);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });
  const key = process.env.GMI_API_KEY;
  if (!key) return res.status(500).json({ error: 'GMI_API_KEY is not configured on this deployment.' });

  const { prompt, size = '2048x2048', seed = 0, images = [] } = req.body || {};
  if (typeof prompt !== 'string' || !prompt.trim()) return res.status(400).json({ error: 'Prompt is required.' });
  if (!ALLOWED_SIZES.has(size)) return res.status(400).json({ error: 'Unsupported image size.' });
  if (!Array.isArray(images) || images.length > 5 || images.some((x:any)=>typeof x !== 'string' || !/^https:\/\//i.test(x))) {
    return res.status(400).json({ error: 'References must be 0-5 public HTTPS image URLs.' });
  }

  try {
    const payload:any = { prompt: prompt.trim(), size, seed: Number.isInteger(Number(seed)) ? Number(seed) : 0 };
    if (images.length) payload.image = images;
    const upstream = await fetch(GMI_URL, {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: 'hy-image-v3.5-preview', payload })
    });
    const text = await upstream.text();
    let data:any; try { data = JSON.parse(text); } catch { data = { error: text || 'Invalid GMI response' }; }
    if (!upstream.ok) return res.status(upstream.status).json({ error: data?.message || data?.error || 'GMI request failed', details: data });
    return res.status(200).json(data);
  } catch (e:any) {
    return res.status(502).json({ error: e?.message || 'Unable to reach GMI Cloud.' });
  }
}
