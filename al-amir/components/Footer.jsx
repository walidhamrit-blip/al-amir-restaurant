import Link from 'next/link';
import Logo from './Logo';
import { restaurant } from '@/lib/config';

export default function Footer({ locale, t }) {
  const p = (path) => `/${locale}${path}`;
  const year = new Date().getFullYear();
  const links = [
    ['', t.nav.home], ['/about', t.nav.about], ['/gallery', t.nav.gallery], ['/gift-cards', t.nav.gift],
    ['/catering', t.nav.catering], ['/menus', t.nav.menus], ['/contact', t.nav.contact],
  ];
  return (
    <footer className="footer">
      <div className="container">
        <div className="frame">
          <div className="logo-holder"><Logo locale={locale} href={p('')} /></div>
          <nav>{links.map(([path, label]) => <Link key={path} href={p(path)}>{label}</Link>)}</nav>
          <div className="mid">
            <div className="addr">
              <span>{restaurant.address[locale]}</span><span className="sep">|</span>
              <span>{restaurant.country[locale]}</span><span className="sep">|</span>
              <span>{t.footer.copyright} {year}</span>
            </div>
            <div className="acts">
              <a className="btn" href={restaurant.orderUrl}>{t.footer.order}</a>
              <Link className="btn" href={p('/contact')}>{t.footer.reserve}</Link>
            </div>
          </div>
        </div>
        <div className="hours">
          {restaurant.hours[locale].map((h, i) => (
            <span key={h.days}>{i > 0 && <span className="sep">|</span>}{h.days}: {h.time}</span>
          ))}
        </div>
        <div className="copy">{t.footer.copyright} {year} <span style={{ padding: '0 0.8rem' }}>|</span> {restaurant.name[locale]} · {t.footer.rights}</div>
        <p className="disclaimer"><b>{t.footer.seoTitle}</b><br />{t.footer.seoText}</p>
      </div>
    </footer>
  );
}
