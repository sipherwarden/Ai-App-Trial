import { requireAdmin } from '@/lib/auth'; import { prisma } from '@/lib/prisma'; import { Parser } from 'json2csv';
export async function GET(){await requireAdmin(); const rows=await prisma.guest.findMany({orderBy:{createdAt:'desc'}}); const csv=new Parser().parse(rows); return new Response(csv,{headers:{'content-type':'text/csv','content-disposition':'attachment; filename=guests.csv'}})}
