"use client";

import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { allDestinations } from "@/constants/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslations } from "next-intl";

export default function DestinationsPage() {
  const t = useTranslations("Destinations");
  const d = useTranslations("Data.tours");

  return (
    <main className="bg-cream min-h-screen">
      <Navbar />

      {/* Header Section - Modern Hero Style */}
      <section className="bg-navy relative flex h-[40vh] min-h-[300px] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Bangluang.jpg"
            alt="Destinations"
            fill
            className="object-cover opacity-40 brightness-75"
          />
        </div>
        <div className="container-custom relative z-10 text-center">
          <span className="tag-label text-white/70">{t("tag")}</span>
          <h1 className="heading-serif mb-4 text-5xl text-white md:text-7xl">{t("title")}</h1>
          <div className="bg-gold mx-auto h-0.5 w-16 opacity-50"></div>
        </div>
      </section>

      {/* Destinations List */}
      <section className="container-custom py-24 md:py-32">
        <div className="mb-16">
           <h2 className="heading-serif text-navy text-3xl md:text-4xl">{t("curated")}</h2>
           <p className="mt-4 max-w-2xl text-sm font-light italic text-gray-500">
             {t("intro")}
           </p>
        </div>
        <div className="space-y-24 md:space-y-40">
          {allDestinations.map((dest, index) => (
            <div
              key={index}
              className={`group flex flex-col items-center gap-12 lg:flex-row ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Part */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm shadow-2xl lg:w-3/5">
                <Image
                  src={dest.image}
                  alt={d(`${dest.id}.title`)}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>

              {/* Content Part */}
              <div className="flex w-full flex-col justify-center lg:w-2/5">
                <span className="tag-label">{d(`${dest.id}.tags`)}</span>

                <h2 className="heading-serif text-navy mb-6 text-3xl md:text-5xl">{d(`${dest.id}.title`)}</h2>

                <p className="heading-serif text-navy mb-6 text-2xl font-bold">
                  {dest.price}{" "}
                  <span className="font-sans text-[10px] font-normal tracking-widest text-gray-400 uppercase">
                    / {t("privateTrip")}
                  </span>
                </p>

                <p className="mb-10 text-base leading-relaxed font-light text-gray-500 italic">
                  {d(`${dest.id}.description`)}
                </p>

                <Link href={`/destinations/${dest.id}`}>
                  <button className="btn-gold self-start border-navy text-navy hover:bg-navy hover:text-white">
                    {t("explore")}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
