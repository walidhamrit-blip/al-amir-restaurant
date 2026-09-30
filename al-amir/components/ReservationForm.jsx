'use client';
import { useState } from 'react';

export default function ReservationForm({ locale, t }) {
  const [status, setStatus] = useState('idle'); // idle | sending | ok | err
  const [form, setForm] = useState({ name: '', phone: '', email: '', date: '', time: '19:30', guests: 2, notes: '' });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  async function submit(e) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/reservations', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, locale }),
      });
      if (!res.ok) throw new Error();
      setStatus('ok');
      setForm({ name: '', phone: '', email: '', date: '', time: '19:30', guests: 2, notes: '' });
    } catch { setStatus('err'); }
  }

  const today = new Date().toISOString().slice(0, 10);
  return (
    <form className="form" onSubmit={submit}>
      <h2>{t.title}</h2>
      {status === 'ok' && <div className="alert ok">{t.success}</div>}
      {status === 'err' && <div className="alert err">{t.error}</div>}
      <div className="row">
        <div className="field"><label>{t.name}</label><input required value={form.name} onChange={set('name')} /></div>
        <div className="field"><label>{t.phone}</label><input required type="tel" dir="ltr" value={form.phone} onChange={set('phone')} /></div>
      </div>
      <div className="field"><label>{t.email}</label><input type="email" dir="ltr" value={form.email} onChange={set('email')} /></div>
      <div className="row">
        <div className="field"><label>{t.date}</label><input required type="date" min={today} value={form.date} onChange={set('date')} /></div>
        <div className="field"><label>{t.time}</label><input required type="time" value={form.time} onChange={set('time')} /></div>
      </div>
      <div className="field"><label>{t.guests}</label>
        <select value={form.guests} onChange={set('guests')}>
          {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => <option key={n} value={n}>{n}</option>)}
        </select>
      </div>
      <div className="field"><label>{t.notes}</label><textarea value={form.notes} onChange={set('notes')} /></div>
      <button className="btn solid" type="submit" disabled={status === 'sending'} style={{ width: '100%' }}>
        {status === 'sending' ? t.sending : t.submit}
      </button>
    </form>
  );
}
