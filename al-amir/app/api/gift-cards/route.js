import { NextResponse } from 'next/server';
import { readAll, append, isAdmin } from '@/lib/store';

export async function POST(req) {
  const body = await req.json().catch(() => null);
  const amount = Number(body?.amount);
  if (!body || !body.from || !body.to || !body.toEmail || !amount || amount < 50) {
    return NextResponse.json({ error: 'Missing or invalid fields' }, { status: 400 });
  }
  const entry = await append('gift-cards', {
    id: 'GC-' + Date.now().toString(36).toUpperCase(),
    createdAt: new Date().toISOString(),
    status: 'pending_payment',
    from: String(body.from).slice(0, 120),
    to: String(body.to).slice(0, 120),
    toEmail: String(body.toEmail).slice(0, 120),
    amount,
    message: String(body.message || '').slice(0, 500),
    locale: body.locale === 'ar' ? 'ar' : 'en',
  });
  return NextResponse.json({ ok: true, id: entry.id });
}

export async function GET(req) {
  if (!isAdmin(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const rows = await readAll('gift-cards');
  rows.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  return NextResponse.json(rows);
}
