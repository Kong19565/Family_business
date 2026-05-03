"use client";
import { useState } from "react";
import { Car, Info } from "lucide-react";
import { mapLocations } from "@/constants/data";

export default function MapSection() {
  // 1. ตั้งชื่อ state ให้เป็นมาตรฐานเดียวกับปุ่ม (activePier)
  const [activePier, setActivePier] = useState("talat-phlu");

  const activeLocation = mapLocations[activePier as keyof typeof mapLocations];

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
                {activeLocation.name}
              </h3>
              <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                <Info className="text-gold h-4 w-4" />
                {activeLocation.info}
              </div>
            </div>
            {activePier === "talat-phlu" && (
              <div className="bg-cream text-navy flex items-center gap-2 rounded-full px-4 py-2 text-[10px] font-bold tracking-widest uppercase shadow-sm">
                <Car className="h-4 w-4" /> Parking Available
              </div>
            )}
          </div>

          {/* ตัวกรอบหุ้มแผนที่ */}
          <div className="bg-navy overflow-hidden rounded-lg p-3 shadow-xl md:p-4">
            <iframe
              title={`${activeLocation.name} Map`}
              src={activeLocation.embedUrl}
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

