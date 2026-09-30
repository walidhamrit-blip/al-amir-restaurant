import { NextResponse } from 'next/server';
import { locales, defaultLocale } from './lib/i18n';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const hasLocale = locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
  if (hasLocale) return NextResponse.next();

  // Detect preferred language from browser
  const accept = request.headers.get('accept-language') || '';
  const preferred = accept.toLowerCase().startsWith('ar') ? 'ar' : defaultLocale;
  const url = request.nextUrl.clone();
  url.pathname = `/${preferred}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!api|_next|images|favicon.ico|.*\\..*).*)'],
};
