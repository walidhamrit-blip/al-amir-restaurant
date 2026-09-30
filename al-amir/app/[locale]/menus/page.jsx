import { getDict } from '@/lib/i18n';
import { menuSections } from '@/lib/menu';

export default function Menus({ params: { locale } }) {
  const t = getDict(locale);
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">{t.nav.menus}</p>
          <h1>{t.menus.pageTitle}</h1>
          <p>{t.menus.pageIntro}</p>
        </div>
      </section>
      <div className="container">
        <nav className="menu-tabs">
          {menuSections.map((s) => <a key={s.key} href={`#${s.key}`}>{s.title[locale]}</a>)}
        </nav>
        {menuSections.map((s) => (
          <section className="menu-section" id={s.key} key={s.key}>
            <div className="msec-head reveal">
              <div>
                <h2>{s.title[locale]}</h2>
                {s.subtitle && <p>{s.subtitle[locale]}</p>}
              </div>
              <img src={s.image} alt={s.title[locale]} loading="lazy" />
            </div>
            <div className="menu-groups">
              {s.groups.map((g) => (
                <div className="menu-group reveal" key={g.title.en}>
                  <h3>{g.title[locale]}</h3>
                  {g.items.map((it) => (
                    <div className="menu-item" key={it.name.en}>
                      <span className="name">{it.name[locale]}</span>
                      <span className="price">{it.price} {t.common.lyd}</span>
                      <span className="desc">{it.desc[locale]}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </section>
        ))}
        <p className="menu-note">{t.menus.note}</p>
        <div style={{ height: '4rem' }} />
      </div>
    </>
  );
}
