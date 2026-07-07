import React from "react";
import Image from "next/image";
import Link from "next/link";
import { fleet } from "@/constants/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getDictionary } from "@/dictionaries/dictionaries";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: lang === "th" ? "เรือท่องเที่ยวของเรา | Canal tour" : "Our Luxury Fleet | Canal tour",
    description: lang === "th"
      ? "เลือกเรือท่องเที่ยวที่ใช่ในแบบคุณ มีให้เลือกทั้งเรือหางยาวดั้งเดิม เรือแท็กซี่ย้อนยุค หรือเรือไฟฟ้าไร้มลพิษ"
      : "Choose from our selection of premium traditional teak longtail boats, vintage taxi boats, and silent eco electric boats.",
  };
}

export default async function FleetPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const currentLang = lang as 'en' | 'th';
  const dict = await getDictionary(currentLang);

  return (
    <main className="bg-cream min-h-screen">
      <Navbar lang={lang} dict={dict.common.nav} />

      {/* Header Section */}
      <section className="bg-navy relative flex h-[40vh] min-h-[300px] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/gallery_1.jpg"
            alt="Our Fleet"
            fill
            className="object-cover opacity-40 brightness-75"
          />
        </div>
        <div className="container-custom relative z-10 text-center">
          <span className="tag-label text-white/70">
            {dict.fleetPage.tagLabel}
          </span>
          <h1 className="heading-serif mb-4 text-5xl text-white md:text-7xl">
            {dict.fleetPage.title}
          </h1>
          <div className="bg-gold mx-auto h-0.5 w-16 opacity-50"></div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-custom">
          {/* Intro */}
          <div className="mb-24">
            <h2 className="heading-serif text-navy text-3xl md:text-4xl">
              {dict.fleetPage.subtitle}
            </h2>
            <p className="mt-4 max-w-2xl text-sm font-light italic text-gray-500">
              {dict.fleetPage.subdesc}
            </p>
          </div>

          {/* Grid แสดงทุกลำ */}
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-20">
            {fleet.map((boat, index) => (
              <div key={index} className="group fleet-card">
                {/* Container รูปภาพ */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={boat.image}
                    alt={boat.name[currentLang]}
                    fill
                    className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-navy/0 transition-colors duration-500 group-hover:bg-navy/10"></div>
                </div>

                {/* เนื้อหา */}
                <div className="fleet-card-content">
                  <div className="mb-6 flex items-center justify-between border-b border-gray-50 pb-6">
                    <div>
                      <span className="text-gold mb-1 block text-[10px] font-bold tracking-[0.3em] uppercase">
                        {dict.fleetPage.privateVessel}
                      </span>
                      <h3 className="heading-serif text-3xl text-navy lg:text-4xl">
                        {boat.name[currentLang]}
                      </h3>
                    </div>
                    <div className="text-right">
                      <span className="text-navy text-[11px] font-bold tracking-widest uppercase">
                        {dict.fleetPage.capacity}
                      </span>
                      <p className="text-gold font-serif text-xl">{boat.capacity[currentLang]}</p>
                    </div>
                  </div>
                  
                  <p className="mb-10 text-base leading-relaxed">
                    {boat.description[currentLang]}
                  </p>

                  {/* ปุ่มสอบถาม */}
                  <Link
                    href={`/${lang}/#contact-section`}
                    className="group/link inline-flex items-center gap-6 self-start"
                  >
                    <span className="text-[11px] font-bold tracking-[0.3em] text-navy uppercase">
                      {dict.fleetPage.bookVessel}
                    </span>
                    <div className="h-[1px] w-12 bg-gold transition-all duration-300 group-hover/link:w-20"></div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer lang={lang} dict={dict.common.footer} />
    </main>
  );
}
