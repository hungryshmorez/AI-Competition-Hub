import type { VercelRequest,VercelResponse } from '@vercel/node';
const BASE='https://console.gmicloud.ai';
export default async function handler(req:VercelRequest,res:VercelResponse){
 if(req.method!=='GET')return res.status(405).json({connected:false,error:'GET only'});
 const key=process.env.GMI_API_KEY;
 if(!key)return res.status(503).json({connected:false,keyConfigured:false,error:'GMI_API_KEY missing on Vercel'});
 try{
  const r=await fetch(BASE+'/api/v1/apikey/models',{headers:{Authorization:`Bearer ${key}`}});
  const t=await r.text();let data:any;try{data=JSON.parse(t)}catch{data={raw:t.slice(0,300)}}
  if(!r.ok)return res.status(r.status).json({connected:false,keyConfigured:true,error:data?.message||data?.error||'GMI rejected the key'});
  const serialized=JSON.stringify(data).toLowerCase();
  return res.status(200).json({connected:true,keyConfigured:true,modelAvailable:serialized.includes('hy-image-v3.5-preview'),model:'hy-image-v3.5-preview'});
 }catch(e:any){return res.status(502).json({connected:false,keyConfigured:true,error:e?.message||'Unable to reach GMI Cloud'})}
}