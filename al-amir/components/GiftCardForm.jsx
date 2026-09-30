'use client';
import { useState } from 'react';

const AMOUNTS = [100, 250, 500, 1000];

export default function GiftCardForm({ locale, t, lyd }) {
  const [status, setStatus] = useState('idle');
  const [amount, setAmount] = useState(250);
  const [custom, setCustom] = useState('');
  const [form, setForm] = useState({ from: '', to: '', toEmail: '', message: '' });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const finalAmount = custom ? Number(custom) : amount;

  function pick(a) {
    setAmount(a); setCustom('');
    const el = document.getElementById('gc-amount-preview');
    if (el) el.textContent = `${a} ${lyd}`;
  }
  function onCustom(e) {
    setCustom(e.target.value);
    const el = document.getElementById('gc-amount-preview');
    if (el && e.target.value) el.textContent = `${e.target.value} ${lyd}`;
  }

  async function submit(e) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/gift-cards', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, amount: finalAmount, locale }),
      });
      if (!res.ok) throw new Error();
      setStatus('ok');
      setForm({ from: '', to: '', toEmail: '', message: '' });
    } catch { setStatus('err'); }
  }

  return (
    <form className="form" onSubmit={submit}>
      <h2>{t.form.title}</h2>
      {status === 'ok' && <div className="alert ok">{t.form.success}</div>}
      {status === 'err' && <div className="alert err">{t.form.error}</div>}
      <div className="field">
        <label>{t.chooseAmount}</label>
        <div className="amounts">
          {AMOUNTS.map((a) => (
            <button type="button" key={a} className={`amt ${!custom && amount === a ? 'on' : ''}`} onClick={() => pick(a)}>{a} {lyd}</button>
          ))}
        </div>
      </div>
      <div className="field"><label>{t.custom}</label><input type="number" min="50" step="10" dir="ltr" value={custom} onChange={onCustom} placeholder="—" /></div>
      <div className="row">
        <div className="field"><label>{t.form.from}</label><input required value={form.from} onChange={set('from')} /></div>
        <div className="field"><label>{t.form.to}</label><input required value={form.to} onChange={set('to')} /></div>
      </div>
      <div className="field"><label>{t.form.toEmail}</label><input required type="email" dir="ltr" value={form.toEmail} onChange={set('toEmail')} /></div>
      <div className="field"><label>{t.form.message}</label><textarea value={form.message} onChange={set('message')} /></div>
      <button className="btn solid" type="submit" disabled={status === 'sending'} style={{ width: '100%' }}>
        {status === 'sending' ? t.form.sending : `${t.form.submit} — ${finalAmount} ${lyd}`}
      </button>
    </form>
  );
}
