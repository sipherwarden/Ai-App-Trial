import { cookies } from 'next/headers'; import { redirect } from 'next/navigation';
const COOKIE='tgc_admin';
export async function setAdminSession(id:string){(await cookies()).set(COOKIE,id,{httpOnly:true,secure:process.env.NODE_ENV==='production',sameSite:'lax',path:'/'});} 
export async function clearAdminSession(){(await cookies()).delete(COOKIE)}
export async function requireAdmin(){const c=(await cookies()).get(COOKIE); if(!c?.value) redirect('/admin/login'); return c.value;}
