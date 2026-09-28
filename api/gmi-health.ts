import type { VercelRequest,VercelResponse } from '@vercel/node';
const BASE='https://console.gmicloud.ai';
export default async function handler(req:VercelRequest,res:VercelResponse){
 if(req.method!=='GET')return res.status(405).json({connected:false,error:'GET only'});
 const key=process.env.GMI_API_KEY;
 if(!key)return res.status(503).json({connected:false,keyConfigured:false,error:'GMI_API_KEY missing on Vercel'});
 try{
  // GMI has no public model-list endpoint for API keys. Probe the request-queue status route with a
  // sentinel ID: 404 "Request not found" means the key authenticated; 401/403 means it was rejected.
  const r=await fetch(BASE+'/api/v1/ie/requestqueue/apikey/requests/health-check-probe',{headers:{Authorization:`Bearer ${key}`}});
  const t=await r.text();let data:any;try{data=JSON.parse(t)}catch{data={raw:t.slice(0,300)}}
  if(r.status===401||r.status===403)return res.status(r.status).json({connected:false,keyConfigured:true,error:data?.message||data?.error||'GMI rejected the key'});
  if(r.ok||r.status===404)return res.status(200).json({connected:true,keyConfigured:true,model:'hy-image-v3.5-preview'});
  return res.status(502).json({connected:false,keyConfigured:true,error:data?.message||data?.error||`GMI returned HTTP ${r.status}`});
 }catch(e:any){return res.status(502).json({connected:false,keyConfigured:true,error:e?.message||'Unable to reach GMI Cloud'})}
}
