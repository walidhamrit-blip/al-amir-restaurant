import { getDict } from '@/lib/i18n';
import AdminDashboard from '@/components/AdminDashboard';

export const metadata = { robots: { index: false, follow: false } };

export default function Admin({ params: { locale } }) {
  const t = getDict(locale);
  return (
    <>
      <section className="page-hero" style={{ paddingBottom: '2rem' }}>
        <div className="container">
          <p className="eyebrow">Admin</p>
          <h1>{t.admin.title}</h1>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <AdminDashboard locale={locale} t={t.admin} lyd={t.common.lyd} />
        </div>
      </section>
    </>
  );
}
