import { NextResponse } from 'next/server';
import { readAll, writeAll, isAdmin } from '@/lib/store';

// PATCH /api/reservations/:id  { status: 'confirmed' | 'cancelled' | 'pending' }
export async function PATCH(req, { params }) {
  if (!isAdmin(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { status } = await req.json().catch(() => ({}));
  if (!['pending', 'confirmed', 'cancelled'].includes(status)) {
    return NextResponse.json({ error: 'Bad status' }, { status: 400 });
  }
  const rows = await readAll('reservations');
  const row = rows.find((r) => r.id === params.id);
  if (!row) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  row.status = status;
  row.updatedAt = new Date().toISOString();
  await writeAll('reservations', rows);
  return NextResponse.json(row);
}
