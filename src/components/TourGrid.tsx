"use client";

import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { tours } from "@/constants/data";
import { Clock, Camera } from "lucide-react";
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/constants/animations";
import { useTranslations } from "next-intl";

export default function TourGrid() {
  const t = useTranslations("TourGrid");
  const d = useTranslations("Data.tours");

  return (
    <section className="bg-[#fdfcf9] px-6 py-16 md:px-12 md:py-32">
      <motion.div 
        className="container-custom"
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
      >
        {/* Header */}
        <motion.div className="mb-16 text-center md:mb-24" variants={fadeInUp}>
          <h2 className="heading-serif mb-4 text-4xl md:text-6xl">{t("title")}</h2>
          <div className="mx-auto h-0.5 w-16 bg-gold"></div>
        </motion.div>

        {/* Tour Grid */}
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-12">
          {tours.map((tour, index) => (
            <motion.div
              key={index}
              className="group flex flex-col gap-6 md:flex-row md:gap-8"
              variants={fadeInUp}
            >
              {/* Image Section */}
              <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden rounded-sm shadow-lg md:aspect-[4/5] md:w-48 lg:w-64">
                <Image
                  src={tour.image}
                  alt={d(`${tour.id}.title`)}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>

              {/* Content Section */}
              <div className="flex flex-col justify-between py-1">
                <div>
                  <h3 className="heading-serif mb-3 text-2xl transition-colors group-hover:text-gold md:text-3xl">
                    {d(`${tour.id}.title`)}
                  </h3>
                  <div className="mb-4 space-y-2">
                    <div className="flex items-center text-[10px] font-bold uppercase tracking-widest text-gold">
                      <Clock className="mr-2 h-3.5 w-3.5" /> {tour.duration}
                    </div>
                    <div className="flex items-start text-sm text-gray-600">
                      <Camera className="mr-3 h-4 w-4 flex-shrink-0 text-gray-300" />
                      <span className="leading-relaxed line-clamp-2">{d(`${tour.id}.highlights`)}</span>
                    </div>
                  </div>
                  <p className="mb-6 text-sm font-light leading-relaxed text-gray-500 line-clamp-2 md:line-clamp-3">
                    {d(`${tour.id}.description`)}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                  <p className="font-serif text-2xl font-bold text-navy">
                    {tour.price}
                    <span className="ml-1 text-[10px] font-sans font-normal text-gray-400 uppercase">/ {t("trip")}</span>
                  </p>
                  <Link href={`/destinations/${tour.id}`}>
                    <button className="bg-navy px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-gold rounded-sm active:scale-95">
                      {t("joinTrip")}
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See More Button */}
        <div className="mt-20 text-center md:mt-32">
          <Link href="/destinations">
            <button className="border border-gold text-gold hover:bg-gold hover:text-white px-10 py-4 text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-500 rounded-sm active:scale-95">
              {t("seeMore")}
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
