import { restaurant } from '@/lib/config';

export default function Socials({ vertical }) {
  return (
    <div className={`socials ${vertical ? 'vertical' : ''}`}>
      <a href={restaurant.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"><rect x="2.5" y="2.5" width="19" height="19" rx="3"/><path d="M15.5 8h-1.6c-1 0-1.4.5-1.4 1.4V11h3l-.4 2.6h-2.6V21h-2.8v-7.4H8V11h1.7V9c0-2.3 1.3-3.5 3.4-3.5h2.4V8z" fill="currentColor" stroke="none"/></svg>
      </a>
      <a href={restaurant.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"><rect x="2.5" y="2.5" width="19" height="19" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.3" cy="6.7" r="1" fill="currentColor"/></svg>
      </a>
    </div>
  );
}
