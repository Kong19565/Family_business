export const locales = ["en", "th"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export type Bilingual<T = string> = { en: T; th: T };

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Pick the right language from a { en, th } object. */
export function pick<T>(value: Bilingual<T>, lang: Locale): T {
  return value[lang];
}

/** Swap the locale prefix of a path: /en/tours/x -> /th/tours/x */
export function switchLocalePath(pathname: string, to: Locale): string {
  const parts = pathname.split("/");
  if (parts[1] && isLocale(parts[1])) parts[1] = to;
  else parts.splice(1, 0, to);
  return parts.join("/") || `/${to}`;
}
