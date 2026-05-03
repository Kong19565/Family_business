import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from './routing';

export default getRequestConfig(async ({ locale }) => {
  const currentLocale = locale as string;
  // Validate that the incoming `locale` parameter is valid
  if (!routing.locales.includes(currentLocale as "en" | "th")) notFound();

  return {
    locale: currentLocale,
    messages: (await import(`../../messages/${currentLocale}.json`)).default
  };
});
