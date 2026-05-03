"use client";

import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { motion } from "motion/react";
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
          sizes="100vw"
          className="scale-105 object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-navy/40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 px-6 text-center text-white">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="tag-label inline-block text-white/80"
        >
          {t("tag")}
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 font-serif text-5xl leading-[1.1] md:text-7xl lg:text-8xl"
        >
          {t.rich("title", {
            br: () => <br />
          })}
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link href="/destinations" className="w-full sm:w-auto">
            <button className="btn-hero w-full sm:w-auto">{t("button")}</button>
          </Link>
        </motion.div>
      </div>

      {/* Bottom Decoration */}
      <div className="from-white absolute bottom-0 z-10 h-24 w-full bg-gradient-to-t to-transparent opacity-10"></div>
    </section>
  );
}
