export type Locale = 'pt' | 'en' | 'es';

export const locales: Locale[] = ['pt', 'en', 'es'];
export const defaultLocale: Locale = 'pt';

export const localeNames: Record<Locale, string> = {
  pt: 'PT',
  en: 'EN',
  es: 'ES',
};

/** Builds an href for `path` (e.g. "/", "/explore") in the given locale. */
export function localePath(locale: Locale, path: string): string {
  const clean = path === '/' ? '' : path;
  if (locale === defaultLocale) {
    return clean === '' ? '/' : clean;
  }
  return `/${locale}${clean}`;
}
