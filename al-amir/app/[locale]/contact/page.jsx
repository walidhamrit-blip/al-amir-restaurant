import { getDict } from '@/lib/i18n';
import { restaurant } from '@/lib/config';
import ReservationForm from '@/components/ReservationForm';

export default function Contact({ params: { locale } }) {
  const t = getDict(locale);
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">{t.nav.contact}</p>
          <h1>{t.contact.pageTitle}</h1>
          <p>{t.contact.pageIntro}</p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container contact-grid">
          <div className="reveal">
            <div className="info-block">
              <span className="eyebrow">{t.contact.address}</span>
              <p>{restaurant.address[locale]}<br />{restaurant.country[locale]}</p>
              <a className="btn sm" style={{ marginTop: '0.8rem' }} href={restaurant.mapUrl} target="_blank" rel="noreferrer">{t.contact.directions}</a>
            </div>
            <div className="info-block">
              <span className="eyebrow">{t.contact.phone}</span>
              <p><a href={`tel:${restaurant.phone.replace(/\s/g, '')}`} dir="ltr">{restaurant.phone}</a></p>
            </div>
            <div className="info-block">
              <span className="eyebrow">{t.contact.email}</span>
              <p><a href={`mailto:${restaurant.email}`}>{restaurant.email}</a></p>
            </div>
            <div className="info-block">
              <span className="eyebrow">{t.contact.hours}</span>
              <ul>{restaurant.hours[locale].map((h) => <li key={h.days}><span>{h.days}</span><span>{h.time}</span></li>)}</ul>
            </div>
          </div>
          <div className="reveal">
            <ReservationForm locale={locale} t={t.contact.form} />
          </div>
        </div>
        <div className="container">
          <div className="map-embed">
            <iframe title="map" loading="lazy" src="https://www.google.com/maps?q=Gargaresh%20Road%20Tripoli%20Libya&output=embed" />
          </div>
        </div>
      </section>
    </>
  );
}
