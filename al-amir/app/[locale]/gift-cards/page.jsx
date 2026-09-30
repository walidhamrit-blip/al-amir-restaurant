import { getDict } from '@/lib/i18n';
import GiftCardForm from '@/components/GiftCardForm';

export default function GiftCards({ params: { locale } }) {
  const t = getDict(locale);
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">{t.nav.gift}</p>
          <h1>{t.gift.pageTitle}</h1>
          <p>{t.gift.pageIntro}</p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container contact-grid">
          <div className="reveal">
            <div className="gift-preview">
              <div className="gc-top"><span className="kanji">✦</span><span className="gc-brand">{locale === 'ar' ? 'الأمير' : 'AL AMIR'}</span></div>
              <div className="gc-amount" id="gc-amount-preview">250 {t.common.lyd}</div>
              <div className="gc-bottom"><span>{t.gift.pageTitle}</span><span dir="ltr">GC-XXXX-XXXX</span></div>
            </div>
            <p style={{ color: 'var(--muted)', marginTop: '2rem' }}>{t.gift.p1}</p>
          </div>
          <div className="reveal">
            <GiftCardForm locale={locale} t={t.gift} lyd={t.common.lyd} />
          </div>
        </div>
      </section>
    </>
  );
}
