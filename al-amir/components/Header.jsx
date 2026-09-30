'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import Socials from './Socials';
import { restaurant } from '@/lib/config';

export default function Header({ locale, t }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; }, [open]);

  const other = locale === 'ar' ? 'en' : 'ar';
  const switchHref = pathname.replace(/^\/(en|ar)/, `/${other}`);
  const p = (path) => `/${locale}${path}`;
  const links = [
    ['', t.nav.home], ['/about', t.nav.about], ['/menus', t.nav.menus], ['/gallery', t.nav.gallery],
    ['/gift-cards', t.nav.gift], ['/catering', t.nav.catering], ['/contact', t.nav.contact],
  ];

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''} ${open ? 'menu-open' : ''}`}>
        <button className={`toggle ${open ? 'open' : ''}`} onClick={() => setOpen(!open)} aria-label="Menu">
          <i /><i /><i />
        </button>
        <div className="brand"><Logo locale={locale} href={p('')} /></div>
        <div className="cells">
          <a className="hide-md phone" href={`tel:${restaurant.phone.replace(/\s/g, '')}`} dir="ltr">{restaurant.phone}</a>
          <a href={restaurant.orderUrl}>{t.nav.order}</a>
          <Link href={p('/contact')}>{t.nav.reserveShort || t.nav.reserve}</Link>
          <Link className="lang keep" href={switchHref} hrefLang={other}>{t.switchLabel}</Link>
        </div>
      </header>

      <div className={`drawer ${open ? 'open' : ''}`} aria-hidden={!open}>
        <nav>
          {links.map(([path, label], i) => (
            <Link key={path} href={p(path)} style={{ transitionDelay: open ? `${0.9 + i * 0.2}s, ${0.9 + i * 0.2}s, 0s` : '0s' }}
              className={pathname === p(path) ? 'active' : ''}>{label}</Link>
          ))}
        </nav>
        <div className="extras">
          <Socials />
          <a className="btn solid" href={restaurant.orderUrl}>{t.nav.order}</a>
          <Link className="btn solid" href={p('/contact')}>{t.nav.reserve}</Link>
        </div>
      </div>
    </>
  );
}
