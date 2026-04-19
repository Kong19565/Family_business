import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google"; // 1. เพิ่ม Playfair_Display
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
        {children}
      </body>
    </html>
  );
}

