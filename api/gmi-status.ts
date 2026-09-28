import type { VercelRequest, VercelResponse } from '@vercel/node';

const BASE = 'https://console.gmicloud.ai';
const QUEUE = BASE + '/api/v1/ie/requestqueue/apikey/requests';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'GET only' });

  const key = process.env.GMI_API_KEY;
  if (!key) return res.status(503).json({ error: 'GMI_API_KEY is missing from this Vercel deployment.', code: 'GMI_KEY_MISSING' });

  if (req.query.recent === '1') {
    try {
      const upstream = await fetch(`${QUEUE}?page_size=20`, { headers: { Authorization: `Bearer ${key}` }, cache: 'no-store' });
      const raw = await upstream.text();
      let data: any;
      try { data = JSON.parse(raw); } catch { data = { error: raw.slice(0, 500) }; }
      const list: any[] = Array.isArray(data) ? data : (data?.requests || data?.items || data?.data || []);
      const slim = list.slice(0, 20).map((r: any) => ({
        request_id: r?.request_id, model: r?.model, status: r?.status,
        created_at: r?.created_at, updated_at: r?.updated_at,
        size: r?.payload?.size, references: Array.isArray(r?.payload?.image) ? r.payload.image : (r?.payload?.image ? [r.payload.image] : []),
        image: r?.outcome?.media_urls?.[0]?.url, error: r?.outcome?.error,
      }));
      return res.status(upstream.status).json(list.length ? { requests: slim } : { raw_keys: Object.keys(data || {}), sample: JSON.stringify(data).slice(0, 800) });
    } catch (e: any) {
      return res.status(502).json({ error: e?.message || 'Unable to reach GMI Cloud.' });
    }
  }

  const requestId = typeof req.query.request_id === 'string' ? req.query.request_id.trim() : '';
  if (!requestId) return res.status(400).json({ error: 'request_id is required.' });

  try {
    const upstream = await fetch(`${QUEUE}/${encodeURIComponent(requestId)}`, {
      headers: { Authorization: `Bearer ${key}` },
      cache: 'no-store',
    });
    const raw = await upstream.text();
    let data: any;
    try {
      data = JSON.parse(raw);
    } catch {
      data = { error: raw.slice(0, 500) || 'Invalid GMI response' };
    }

    if (!upstream.ok) {
      return res.status(upstream.status).json({
        error: data?.message || data?.error || 'Unable to read GMI request status',
        details: data,
        request_id: requestId,
        stage: 'poll',
      });
    }

    return res.status(200).json({ ...data, request_id: data?.request_id || requestId });
  } catch (e: any) {
    return res.status(502).json({
      error: e?.message || 'Unable to reach GMI Cloud.',
      code: 'GMI_NETWORK_ERROR',
      request_id: requestId,
    });
  }
}
