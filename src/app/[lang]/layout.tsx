import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Inter, Noto_Serif_Thai, Playfair_Display, Sarabun } from "next/font/google";
import { MotionProvider } from "@/components/Motion";
import "../globals.css";
import { getDictionary } from "@/dictionaries/dictionaries";
import { isLocale, locales } from "@/lib/i18n";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const sarabun = Sarabun({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sarabun",
  subsets: ["thai", "latin"],
});

const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"], weight: ["500", "600"] });
const notoSerifThai = Noto_Serif_Thai({
  variable: "--font-noto-serif-thai",
  subsets: ["thai", "latin"],
  weight: ["500", "600"],
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
      <body className={`${inter.variable} ${sarabun.variable} ${playfair.variable} ${notoSerifThai.variable} antialiased`}>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
