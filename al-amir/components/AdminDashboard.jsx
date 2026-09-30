'use client';
import { useEffect, useState, useCallback } from 'react';

export default function AdminDashboard({ locale, t, lyd }) {
  const [key, setKey] = useState('');
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const [tab, setTab] = useState('reservations');
  const [filter, setFilter] = useState('all');
  const [rows, setRows] = useState([]);
  const [gifts, setGifts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => { const k = sessionStorage.getItem('admin-key'); if (k) setKey(k); }, []);

  const load = useCallback(async (k = key) => {
    if (!k) return;
    setLoading(true);
    const h = { 'x-admin-key': k };
    const [r1, r2] = await Promise.all([fetch('/api/reservations', { headers: h }), fetch('/api/gift-cards', { headers: h })]);
    if (r1.status === 401) { setError(t.wrong); setKey(''); sessionStorage.removeItem('admin-key'); setLoading(false); return; }
    setRows(await r1.json()); setGifts(await r2.json()); setError(''); setLoading(false);
  }, [key, t.wrong]);

  useEffect(() => { if (key) load(key); }, [key, load]);

  function login(e) {
    e.preventDefault();
    sessionStorage.setItem('admin-key', input);
    setKey(input);
  }
  function logout() { sessionStorage.removeItem('admin-key'); setKey(''); setRows([]); setGifts([]); }

  async function setStatus(id, status) {
    await fetch(`/api/reservations/${id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json', 'x-admin-key': key }, body: JSON.stringify({ status }) });
    setRows((rs) => rs.map((r) => (r.id === id ? { ...r, status } : r)));
  }

  if (!key) {
    return (
      <form className="form" onSubmit={login} style={{ maxWidth: 420, margin: '0 auto' }}>
        <h2>{t.login}</h2>
        {error && <div className="alert err">{error}</div>}
        <div className="field"><label>{t.password}</label><input type="password" dir="ltr" value={input} onChange={(e) => setInput(e.target.value)} required /></div>
        <button className="btn solid" style={{ width: '100%' }}>{t.enter}</button>
      </form>
    );
  }

  const visible = rows.filter((r) => filter === 'all' || r.status === filter);
  const counts = { all: rows.length, pending: rows.filter((r) => r.status === 'pending').length, confirmed: rows.filter((r) => r.status === 'confirmed').length, cancelled: rows.filter((r) => r.status === 'cancelled').length };
  const fmtDate = (iso) => new Date(iso).toLocaleString(locale === 'ar' ? 'ar-LY' : 'en-GB', { dateStyle: 'medium', timeStyle: 'short' });

  return (
    <div className="admin">
      <div className="admin-bar">
        <div className="tabs">
          <button className={tab === 'reservations' ? 'on' : ''} onClick={() => setTab('reservations')}>{t.tabs.reservations} <b>{rows.length}</b></button>
          <button className={tab === 'gifts' ? 'on' : ''} onClick={() => setTab('gifts')}>{t.tabs.gifts} <b>{gifts.length}</b></button>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button className="btn sm" onClick={() => load()} disabled={loading}>{t.refresh}</button>
          <button className="btn sm" onClick={logout}>{t.logout}</button>
        </div>
      </div>

      {tab === 'reservations' && (
        <>
          <div className="filters">
            {['all', 'pending', 'confirmed', 'cancelled'].map((f) => (
              <button key={f} className={filter === f ? 'on' : ''} onClick={() => setFilter(f)}>{t.filter[f]} <b>{counts[f]}</b></button>
            ))}
          </div>
          {visible.length === 0 ? <p className="menu-note">{t.empty}</p> : (
            <div className="table-wrap">
              <table>
                <thead><tr><th>{t.cols.when}</th><th>{t.cols.guest}</th><th>{t.cols.contact}</th><th>{t.cols.guests}</th><th>{t.cols.notes}</th><th>{t.cols.status}</th><th>{t.cols.actions}</th></tr></thead>
                <tbody>
                  {visible.map((r) => (
                    <tr key={r.id} className={`st-${r.status}`}>
                      <td dir="ltr"><b>{r.date}</b><br />{r.time}</td>
                      <td>{r.name}<br /><small>{r.locale.toUpperCase()}</small></td>
                      <td dir="ltr"><a href={`tel:${r.phone}`}>{r.phone}</a>{r.email && <><br /><small>{r.email}</small></>}</td>
                      <td>{r.guests}</td>
                      <td><small>{r.notes || '—'}</small></td>
                      <td><span className={`pill ${r.status}`}>{t.status[r.status]}</span></td>
                      <td className="acts">
                        {r.status !== 'confirmed' && <button onClick={() => setStatus(r.id, 'confirmed')} className="ok">{t.confirm}</button>}
                        {r.status !== 'cancelled' && <button onClick={() => setStatus(r.id, 'cancelled')} className="no">{t.cancel}</button>}
                        {r.status !== 'pending' && <button onClick={() => setStatus(r.id, 'pending')}>{t.reset}</button>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}

      {tab === 'gifts' && (
        gifts.length === 0 ? <p className="menu-note">{t.giftEmpty}</p> : (
          <div className="table-wrap">
            <table>
              <thead><tr><th>ID</th><th>{t.giftCols.date}</th><th>{t.giftCols.from}</th><th>{t.giftCols.to}</th><th>{t.giftCols.amount}</th><th>{t.giftCols.message}</th></tr></thead>
              <tbody>
                {gifts.map((g) => (
                  <tr key={g.id}>
                    <td dir="ltr"><small>{g.id}</small></td>
                    <td>{fmtDate(g.createdAt)}</td>
                    <td>{g.from}</td>
                    <td>{g.to}<br /><small dir="ltr">{g.toEmail}</small></td>
                    <td><b>{g.amount} {lyd}</b></td>
                    <td><small>{g.message || '—'}</small></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      )}
    </div>
  );
}
