import type { VercelRequest,VercelResponse } from '@vercel/node';
import { put } from '@vercel/blob';
export const config={maxDuration:60};
export default async function handler(req:VercelRequest,res:VercelResponse){
 if(req.method!=='POST')return res.status(405).json({error:'POST only'});
 if(!process.env.BLOB_READ_WRITE_TOKEN)return res.status(503).json({error:'Blob storage is not connected yet'});
 try{
  const name=String(req.query.name||'reference.jpg').replace(/[^a-zA-Z0-9._-]/g,'-');
  const kind=String(req.query.kind||'reference').replace(/[^a-zA-Z0-9_-]/g,'');
  const contentType=String(req.headers['content-type']||'application/octet-stream');
  if(!contentType.startsWith('image/'))return res.status(400).json({error:'Image files only'});
  const chunks:Buffer[]=[];for await(const chunk of req)chunks.push(Buffer.from(chunk));const body=Buffer.concat(chunks);
  if(!body.length)return res.status(400).json({error:'Empty upload'});if(body.length>20*1024*1024)return res.status(413).json({error:'20 MB maximum'});
  const blob=await put(`competition-hub/${kind}/${Date.now()}-${name}`,body,{access:'public',contentType,addRandomSuffix:true});
  return res.status(200).json({url:blob.url,pathname:blob.pathname,size:body.length});
 }catch(e:any){return res.status(500).json({error:e?.message||'Upload failed'});}
}
