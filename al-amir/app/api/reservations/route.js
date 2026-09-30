import { NextResponse } from 'next/server';
import { readAll, append, isAdmin } from '@/lib/store';

export async function POST(req) {
  const body = await req.json().catch(() => null);
  if (!body || !body.name || !body.phone || !body.date || !body.time) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }
  const entry = await append('reservations', {
    id: Date.now().toString(36),
    createdAt: new Date().toISOString(),
    status: 'pending',
    name: String(body.name).slice(0, 120),
    phone: String(body.phone).slice(0, 40),
    email: String(body.email || '').slice(0, 120),
    date: body.date, time: body.time,
    guests: Number(body.guests) || 2,
    notes: String(body.notes || '').slice(0, 1000),
    locale: body.locale === 'ar' ? 'ar' : 'en',
  });
  return NextResponse.json({ ok: true, id: entry.id });
}

// GET — admin only
export async function GET(req) {
  if (!isAdmin(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const rows = await readAll('reservations');
  rows.sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time));
  return NextResponse.json(rows);
}
