import React from "react";
import Image from "next/image";
import Link from "next/link";
import { fleet } from "@/constants/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function FleetPage() {
  return (
    <main className="bg-cream min-h-screen">
      <Navbar />

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
          <span className="tag-label text-white/70">Exclusive Collection</span>
          <h1 className="heading-serif mb-4 text-5xl text-white md:text-7xl">Our Fleet</h1>
          <div className="bg-gold mx-auto h-0.5 w-16 opacity-50"></div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-custom">
          {/* Intro */}
          <div className="mb-24">
            <h2 className="heading-serif text-navy text-3xl md:text-4xl">Timeless Vessels</h2>
            <p className="mt-4 max-w-2xl text-sm font-light italic text-gray-500">
              From intimate sunset cruises to large family gatherings, choose
              the perfect vessel for your Chao Phraya river journey.
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
                    alt={boat.name}
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
                        Private Vessel
                      </span>
                      <h3 className="heading-serif text-3xl text-navy lg:text-4xl">
                        {boat.name}
                      </h3>
                    </div>
                    <div className="text-right">
                      <span className="text-navy text-[11px] font-bold tracking-widest uppercase">
                        Capacity
                      </span>
                      <p className="text-gold font-serif text-xl">{boat.capacity}</p>
                    </div>
                  </div>
                  
                  <p className="mb-10 text-base leading-relaxed">
                    {boat.description}
                  </p>

                  {/* ปุ่มสอบถาม */}
                  <Link
                    href="/#contact-section"
                    className="group/link inline-flex items-center gap-6 self-start"
                  >
                    <span className="text-[11px] font-bold tracking-[0.3em] text-navy uppercase">Book This Vessel</span>
                    <div className="h-[1px] w-12 bg-gold transition-all duration-300 group-hover/link:w-20"></div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}


