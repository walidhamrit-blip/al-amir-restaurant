import Link from 'next/link';
import { restaurant } from '@/lib/config';

// Brush-script wordmark (the reference uses a hand-lettered logo)
export default function Logo({ locale, href }) {
  const inner = (
    <span className="logo-mark" aria-label={restaurant.name[locale]}>
      <span className={`word ${locale === 'ar' ? 'ar' : ''}`}>{restaurant.name[locale]}</span>
    </span>
  );
  return href ? <Link href={href}>{inner}</Link> : inner;
}
