'use client';
import { useEffect, useState } from 'react';
import Logo from './Logo';

export default function Splash({ locale, t }) {
  const [hide, setHide] = useState(true);
  useEffect(() => {
    // show only once per session
    if (!sessionStorage.getItem('splash-seen')) {
      setHide(false);
      const id = setTimeout(() => dismiss(), 2800);
      return () => clearTimeout(id);
    }
  }, []);
  const dismiss = () => { sessionStorage.setItem('splash-seen', '1'); setHide(true); };
  return (
    <div className={`splash ${hide ? 'hide' : ''}`} aria-hidden={hide}>
      <Logo locale={locale} />
      <button className="enter" onClick={dismiss}>{t.splash.enter}</button>
    </div>
  );
}
