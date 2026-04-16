"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Ship } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="nav-glass w-full px-4 md:px-8 py-4 sticky top-0 z-50 overflow-hidden">
      {/* ปรับ container ให้ยืดหยุ่นและไม่กว้างเกินหน้าจอ */}
      <div className="mx-auto max-w-7xl flex items-center justify-between gap-2">
        
        {/* 1. Back Button - ปรับขนาด padding ให้เล็กลงบนมือถือ */}
        <button 
          onClick={() => router.back()} 
          className="flex items-center gap-2 group transition-all active:scale-95 shrink-0"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-100 bg-white shadow-sm group-hover:bg-navy group-hover:text-white transition-colors">
            <ArrowLeft className="h-4 w-4" />
          </div>
          <span className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase text-navy">
            Go Back
          </span>
        </button>

        {/* 2. Logo Center - เปลี่ยนจาก Absolute เป็น Flex-1 เพื่อให้อยู่ตรงกลางอย่างปลอดภัย */}
        <div className="flex-1 flex justify-center">
          <Link
            href="/"
            className="group flex items-center gap-2"
          >
            <Ship className="text-gold h-5 w-5 transition-transform duration-500 group-hover:rotate-12 shrink-0" />
            <span className="text-navy hidden sm:block text-base md:text-xl font-bold tracking-tighter uppercase whitespace-nowrap">
              Chao Phraya
            </span>
          </Link>
        </div>

        {/* 3. Contact Link - เพิ่มพื้นที่ว่างฝั่งขวาให้สมดุลกับปุ่ม Back ในมือถือ */}
        <div className="flex justify-end shrink-0 min-w-[60px] md:min-w-0">
          <Link href="/#contact-section" className="nav-link-underline hidden md:block">
            Contact Us
          </Link>
          
          {/* บนมือถือถ้าไม่มีปุ่ม Contact ให้โชว์ไอคอนเล็กๆ หรือเว้นไว้เพื่อให้ Logo อยู่กลางจริงๆ */}
          <div className="md:hidden w-4"></div> 
        </div>

      </div>
    </nav>
  );
}