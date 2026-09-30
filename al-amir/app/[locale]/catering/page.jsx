import Link from 'next/link';
import { getDict } from '@/lib/i18n';

export default function Catering({ params: { locale } }) {
  const t = getDict(locale);
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">{t.nav.catering}</p>
          <h1>{t.catering.pageTitle}</h1>
          <p>{t.catering.pageIntro}</p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container split reveal">
          <img src="/images/catering.jpg" alt={t.catering.pageTitle} />
          <div>
            <p>{t.catering.p1}</p>
            <Link className="btn solid" href={`/${locale}/contact`}>{t.catering.cta}</Link>
          </div>
        </div>
      </section>
      <section className="section" style={{ background: 'var(--bg-2)' }}>
        <div className="container cards-3">
          {t.catering.options.map((o, i) => (
            <div className="card reveal" key={o.title} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="num">0{i + 1}</div>
              <h3>{o.title}</h3>
              <p>{o.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
