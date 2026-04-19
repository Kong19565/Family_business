"use client";
import { useState } from "react";
import { Car, Info } from "lucide-react";
import { useTranslations } from "next-intl";

export default function MapSection() {
  const t = useTranslations("Map");
  // 1. ตั้งชื่อ state ให้เป็นมาตรฐานเดียวกับปุ่ม (activePier)
  const [activePier, setActivePier] = useState("talat-phlu");

  const mapData = {
    "talat-phlu": {
      name: "Talat Phlu Pier (Wat Paknam)",
      info: t("templeInfo"),
      url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1937.9665047479211!2d100.47643914312803!3d13.722505579958224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2985bb3ebe235%3A0x9ecaa416911b8c5e!2sTalat%20Phlu%20Pier!5e0!3m2!1sen!2sth!4v1773944993782!5m2!1sen!2sth",
    },
    wutthakat: {
      name: "BTS Wutthakat Pier",
      info: t("btsInfo"),
      url: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1938.0426795285837!2d100.4665387!3d13.7132798!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29869ecc03e61%3A0xbda819456cee9c7!2sWutthakat!5e0!3m2!1sen!2sth!4v1773944166958!5m2!1sen!2sth",
    },
  };

  return (
    <section className="overflow-x-hidden bg-white py-24">
      <div className="container-custom">
        {/* Tabs Container - ปรับให้กว้างแบบ Responsive */}
        <div className="relative mx-auto mb-12 flex w-full max-w-[400px] items-center rounded-full bg-[#f8f9fa] p-1">
          {/* กรอบสีน้ำเงิน (Indicator) - ใช้ % เพื่อความสมมาตรทุกหน้าจอ */}
          <div
            className="bg-navy absolute rounded-full transition-all duration-500 ease-in-out"
            style={{
              width: "calc(50% - 4px)", // แบ่งครึ่งพอดี
              height: "calc(100% - 8px)",
              left: "4px",
              transform:
                activePier === "talat-phlu"
                  ? "translateX(0)"
                  : "translateX(100%)", // เลื่อนไป 1 ช่วงความกว้างของตัวเอง
            }}
          />

          {/* ปุ่มที่ 1 - ใช้ w-1/2 แทนการระบุ px */}
          <button
            type="button"
            onClick={() => setActivePier("talat-phlu")}
            className={`relative z-10 w-1/2 py-3 text-[10px] font-bold tracking-[0.2em] uppercase transition-colors duration-500 md:text-[11px] ${
              activePier === "talat-phlu"
                ? "text-white"
                : "hover:text-navy text-gray-400"
            }`}
          >
            Talat Phlu
          </button>

          {/* ปุ่มที่ 2 - ใช้ w-1/2 */}
          <button
            type="button"
            onClick={() => setActivePier("wutthakat")}
            className={`relative z-10 w-1/2 py-3 text-[10px] font-bold tracking-[0.2em] uppercase transition-colors duration-500 md:text-[11px] ${
              activePier === "wutthakat"
                ? "text-white"
                : "hover:text-navy text-gray-400"
            }`}
          >
            BTS Wutthakat
          </button>
        </div>

        {/* ข้อมูลแผนที่ */}
        <div className="space-y-6">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h3 className="heading-serif text-navy font-serif text-2xl leading-tight md:text-3xl">
                {mapData[activePier as keyof typeof mapData].name}
              </h3>
              <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                <Info className="text-gold h-4 w-4" />
                {mapData[activePier as keyof typeof mapData].info}
              </div>
            </div>
            {activePier === "talat-phlu" && (
              <div className="bg-cream text-navy flex items-center gap-2 rounded-full px-4 py-2 text-[10px] font-bold tracking-widest uppercase shadow-sm">
                <Car className="h-4 w-4" /> {t("parking")}
              </div>
            )}
          </div>

          {/* ตัวกรอบหุ้มแผนที่ */}
          <div className="bg-navy overflow-hidden rounded-lg p-3 shadow-xl md:p-4">
            <iframe
              title={`${mapData[activePier as keyof typeof mapData].name} Map`}
              src={mapData[activePier as keyof typeof mapData].url}
              width="100%"
              height="450"
              style={{ border: "none" }}
              allowFullScreen
              loading="lazy"
              className="rounded-sm"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
