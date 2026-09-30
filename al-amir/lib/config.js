// ─────────────────────────────────────────────────────────────
//  RESTAURANT CONFIG — edit this single file to rebrand the site
// ─────────────────────────────────────────────────────────────
export const restaurant = {
  brand: 'AL AMIR',                     // Latin brand letters used in the logo / hero
  name: { en: 'Al Amir', ar: 'الأمير' },
  tagline: { en: 'Japanese Inspired Cuisine', ar: 'مطبخ مستوحى من اليابان' },
  city: { en: 'Tripoli', ar: 'طرابلس' },
  address: { en: 'Gargaresh Road, Hay Al-Andalus', ar: 'طريق قرقارش، حي الأندلس' },
  country: { en: 'Tripoli, Libya', ar: 'طرابلس، ليبيا' },
  phone: '+218 91 000 0000',
  email: 'hello@alamir-tripoli.ly',
  mapUrl: 'https://maps.google.com/?q=Gargaresh+Road+Tripoli',
  social: {
    facebook: 'https://facebook.com/',
    instagram: 'https://instagram.com/',
  },
  hours: {
    en: [
      { days: 'Saturday – Thursday', time: '12:00 pm – 11:30 pm' },
      { days: 'Friday', time: '1:00 pm – 12:00 am' },
    ],
    ar: [
      { days: 'السبت – الخميس', time: '12:00 ظهراً – 11:30 مساءً' },
      { days: 'الجمعة', time: '1:00 ظهراً – 12:00 منتصف الليل' },
    ],
  },
  orderUrl: '#',           // external ordering platform link (Talabat, etc.)
};
