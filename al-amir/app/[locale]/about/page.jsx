import Link from 'next/link';
import { getDict } from '@/lib/i18n';

export default function About({ params: { locale } }) {
  const t = getDict(locale);
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">{t.nav.about}</p>
          <h1>{t.about.pageTitle}</h1>
          <p>{t.about.pageIntro}</p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container split reveal">
          <img src="/images/hero.jpg" alt={t.about.title} />
          <div>
            <p className="eyebrow">{t.about.title}</p>
            <h2 className="title">{t.hero.line1} {t.hero.line2} {t.hero.line3}</h2>
            <p>{t.about.p1}</p>
            <p>{t.about.p3}</p>
          </div>
        </div>
      </section>
      <section className="section" style={{ background: 'var(--bg-2)' }}>
        <div className="container cards-3">
          {t.about.values.map((v, i) => (
            <div className="card reveal" key={v.title} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="num">0{i + 1}</div>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="container split reveal">
          <div>
            <p className="eyebrow">{t.about.chefTitle}</p>
            <h2 className="title">Kenji Okamoto</h2>
            <p>{t.about.chefText}</p>
            <Link className="btn" href={`/${locale}/menus`}>{t.about.cta}</Link>
          </div>
          <img src="/images/dish1.jpg" alt={t.about.chefTitle} />
        </div>
      </section>
    </>
  );
}
