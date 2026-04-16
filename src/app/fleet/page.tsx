import React from "react";
import Image from "next/image";
import Link from "next/link";
import { fleet } from "@/app/constants/data";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function FleetPage() {
  return (
    <main className="bg-cream min-h-screen">
      <Navbar />

      <section className="py-24">
        <div className="container-custom">
          {/* Header */}
          <div className="mb-20 text-center">
            <h1 className="heading-serif mb-6 text-6xl">Our Full Fleet</h1>
            <div className="bg-gold mx-auto mb-10 h-1 w-20"></div>
            <p className="mx-auto max-w-2xl font-light text-gray-500 italic">
              From intimate sunset cruises to large family gatherings, choose
              the perfect vessel for your Chao Phraya river journey.
            </p>
          </div>

          {/* Grid แสดงทุกลำ */}
          <div className="grid grid-cols-1 gap-x-12 gap-y-20 md:grid-cols-2">
            {fleet.map((boat, index) => (
              <div key={index} className="group">
                <div className="fleet-card flex h-full flex-col">
                  {/* Container รูปภาพ */}
                  <div className="fleet-image-container mb-8">
                    <Image
                      src={boat.image}
                      alt={boat.name}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                  </div>

                  {/* เนื้อหา */}
                  <h2 className="heading-serif mb-2 text-2xl">{boat.name}</h2>
                  <p className="tag-label mb-4">{boat.capacity}</p>
                  <p className="mb-8 flex-grow text-sm leading-relaxed font-light text-gray-500 italic">
                    {boat.description}
                  </p>

                  {/* ปุ่มสอบถาม */}
                  <Link
                    href="/#contact-section"
                    className="nav-link-underline self-start"
                  >
                    Inquiry Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
