"use client";

import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="bg-navy relative flex h-[90vh] min-h-[600px] items-center justify-center overflow-hidden md:h-screen">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Home_pic.jpg"
          alt="Luxury River Experience"
          fill
          className="animate-slow-zoom scale-105 object-cover brightness-[0.7] transition-transform duration-[10s]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-navy/40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 px-6 text-center text-white">
        <span className="animate-fade-in-up tag-label inline-block text-white/80">
          {t("tag")}
        </span>
        <h1 className="animate-fade-in-up delay-100 mt-6 font-serif text-5xl leading-[1.1] md:text-7xl lg:text-8xl">
          {t.rich("title", {
            br: () => <br />
          })}
        </h1>
        <div className="animate-fade-in-up delay-200 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/destinations" className="w-full sm:w-auto">
            <button className="btn-hero w-full sm:w-auto">{t("button")}</button>
          </Link>
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="from-white absolute bottom-0 z-10 h-24 w-full bg-gradient-to-t to-transparent opacity-10"></div>
    </section>
  );
}
