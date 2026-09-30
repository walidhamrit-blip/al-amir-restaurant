import Link from 'next/link';
import { getDict } from '@/lib/i18n';
import { restaurant } from '@/lib/config';
import { menuSections } from '@/lib/menu';
import Socials from '@/components/Socials';
import AnimatedText from '@/components/AnimatedText';

export default function Home({ params: { locale } }) {
  const t = getDict(locale);
  const rtl = locale === 'ar';
  const p = (path) => `/${locale}${path}`;
  const galleryLines = [...(t.gallery.titleLines || t.gallery.title.split(' '))];
  const lastWord = galleryLines.pop();

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="bg" />
        <div className="strip">
          <div className="letters" aria-hidden="true">
            {restaurant.brand.replace(/\s/g, '').split('').map((ch, i) => <span key={i}>{ch}</span>)}
          </div>
          <Socials vertical />
        </div>
        <div className="inner">
          <AnimatedText as="span" className="eyebrow" text={t.hero.kicker} rtl={rtl} delay={0.2} />
          <h1>
            <AnimatedText text={t.hero.line1} rtl={rtl} delay={0.4} />
            <AnimatedText text={t.hero.line2} rtl={rtl} delay={0.7} />
            <AnimatedText text={t.hero.line3} rtl={rtl} delay={1.0} />
          </h1>
        </div>
      </section>

      {/* MISSION PANEL — overlaps the hero, picture hangs below */}
      <div className="mission-wrap">
        <div className="mission">
          <h3 className="reveal">{t.about.title}</h3>
          <div className="cols reveal">
            <div><p>{t.about.p1}</p><p>{t.about.p2}</p></div>
            <div><p>{t.about.p3}</p><p>{t.about.p4}</p></div>
          </div>
          <div className="cta reveal"><Link className="link-line" href={p('/menus')}>{t.about.cta}</Link></div>
          <img className="pic reveal" src="/images/about.jpg" alt={t.about.title} />
        </div>
      </div>

      {/* WHITE SECTION — giant title + slowly rotating plates */}
      <section className="pictures" id="gallery">
        <div className="container">
          <h2>
            {galleryLines.map((w, i) => <AnimatedText key={i} as="span" className="line" text={w} rtl={rtl} delay={i * 0.25} />)}
            <AnimatedText as="span" className="line spaced" text={lastWord} rtl={rtl} delay={galleryLines.length * 0.25} />
          </h2>
          <div className="plate p4"><img src="/images/plate4.png" alt="" /></div>
          <div className="plate p1"><img src="/images/plate1.png" alt="" /></div>
          <div className="plate p2"><img src="/images/plate2.png" alt="" /></div>
          <div className="plate p3"><img src="/images/plate3.png" alt="" /></div>
        </div>
      </section>

      {/* MENUS — white top / teal bottom, floating staggered cards */}
      <section className="menus" id="menus">
        <h2 className="title"><AnimatedText text={t.menus.title} rtl={rtl} /></h2>
        <div className="container">
          <div className="menu-cards">
            {t.menus.cards.map((c) => {
              const sec = menuSections.find((s) => s.key === c.key);
              return (
                <div className="card-wrap" key={c.key}>
                  <Link href={p(`/menus#${c.key}`)} className="menu-card">
                    <img src={sec?.image || '/images/dish1.jpg'} alt={c.label} loading="lazy" />
                    <span className="label">{c.label.replace(' ', '\n')}</span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
