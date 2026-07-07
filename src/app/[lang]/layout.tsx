import type { Metadata } from "next";
import { Inter, Playfair_Display, Sarabun, Noto_Serif_Thai } from "next/font/google";
import Script from "next/script";
import "../globals.css";

// ฟอนต์สำหรับตัวหนังสือทั่วไป (อังกฤษ)
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// ฟอนต์สำหรับหัวข้อ (อังกฤษ)
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

// ฟอนต์สำหรับตัวหนังสือทั่วไป (ไทย)
const sarabun = Sarabun({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sarabun",
  subsets: ["thai", "latin"],
});

// ฟอนต์สำหรับหัวข้อ (ไทย)
const notoSerifThai = Noto_Serif_Thai({
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-serif-thai",
  subsets: ["thai", "latin"],
});

export const metadata: Metadata = {
  title: "Canal tour",
  description: "Private & Exclusive River Experience",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <html lang={lang}>
      <body
        /* 3. ใส่ตัวแปรฟอนต์เข้าไปใน body */
        className={`${inter.variable} ${playfair.variable} ${sarabun.variable} ${notoSerifThai.variable} antialiased`}
      >
        <Script
          id="disable-right-click"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('contextmenu', function(e) {
                if (e.target.tagName === 'IMG' || e.target.closest('.gallery-item') || e.target.closest('nav')) {
                  e.preventDefault();
                }
              });
              document.addEventListener('dragstart', function(e) {
                if (e.target.tagName === 'IMG') {
                  e.preventDefault();
                }
              });
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}

