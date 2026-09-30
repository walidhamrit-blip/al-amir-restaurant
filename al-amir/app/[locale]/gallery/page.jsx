import { getDict } from '@/lib/i18n';
import { galleryImages } from '@/lib/menu';

export default function Gallery({ params: { locale } }) {
  const t = getDict(locale);
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">{t.nav.gallery}</p>
          <h1>{t.gallery.pageTitle}</h1>
          <p>{t.gallery.pageIntro}</p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="masonry reveal" style={{ gridAutoRows: '220px' }}>
            {galleryImages.map((g) => (
              <figure key={g.src}><img src={g.src} alt={g.alt[locale]} loading="lazy" /><figcaption>{g.alt[locale]}</figcaption></figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
