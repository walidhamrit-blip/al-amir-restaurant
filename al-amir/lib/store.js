// Minimal JSON-file storage (demo). Replace with a database in production.
import { promises as fs } from 'fs';
import path from 'path';

const DIR = path.join(process.cwd(), 'data');
const file = (name) => path.join(DIR, `${name}.json`);

export async function readAll(name) {
  try { return JSON.parse(await fs.readFile(file(name), 'utf8')); } catch { return []; }
}
export async function writeAll(name, rows) {
  await fs.mkdir(DIR, { recursive: true });
  await fs.writeFile(file(name), JSON.stringify(rows, null, 2));
}
export async function append(name, row) {
  const rows = await readAll(name);
  rows.push(row);
  await writeAll(name, rows);
  return row;
}

// Admin key: set ADMIN_KEY in .env.local for production
export const ADMIN_KEY = process.env.ADMIN_KEY || 'amir2026';
export function isAdmin(req) {
  return req.headers.get('x-admin-key') === ADMIN_KEY;
}
