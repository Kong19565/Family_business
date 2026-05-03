import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google"; // 1. เพิ่ม Playfair_Display
import Script from "next/script";
import "./globals.css";

// ฟอนต์สำหรับตัวหนังสือทั่วไป
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// 2. ฟอนต์สำหรับหัวข้อ (Serif)
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chao Phraya Trips",
  description: "Private & Exclusive River Experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        /* 3. ใส่ตัวแปรฟอนต์เข้าไปใน body */
        className={`${inter.variable} ${playfair.variable} antialiased`}
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

