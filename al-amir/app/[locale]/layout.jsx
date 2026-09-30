import { getDict, locales } from '@/lib/i18n';
import { restaurant } from '@/lib/config';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Splash from '@/components/Splash';
import Reveal from '@/components/Reveal';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = params;
  const name = restaurant.name[locale] || restaurant.name.en;
  const tag = restaurant.tagline[locale] || restaurant.tagline.en;
  return {
    title: `${name} | ${tag}`,
    description: getDict(locale).hero.kicker,
    alternates: { languages: { en: '/en', ar: '/ar' } },
  };
}

export default function LocaleLayout({ children, params }) {
  const { locale } = params;
  if (!locales.includes(locale)) notFound();
  const t = getDict(locale);
  return (
    <html lang={locale} dir={t.dir}>
      <body>
        <Splash locale={locale} t={t} />
        <Header locale={locale} t={t} />
        <main>{children}</main>
        <Footer locale={locale} t={t} />
        <Reveal />
      </body>
    </html>
  );
}
