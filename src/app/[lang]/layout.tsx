import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Inter, Sarabun } from "next/font/google";
import "../globals.css";
import { getDictionary } from "@/dictionaries/dictionaries";
import { isLocale, locales } from "@/lib/i18n";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const sarabun = Sarabun({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sarabun",
  subsets: ["thai", "latin"],
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: { languages: { en: "/en", th: "/th" } },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <html lang={lang} data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${sarabun.variable} antialiased`}>{children}</body>
    </html>
  );
}
