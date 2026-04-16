import React from "react";
import Image from "next/image";
import Link from "next/link";
import { allDestinations } from "@/app/constants/data";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function DestinationsPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />
      
      {/* Header Section */}
      <section className="py-24 text-center">
        <div className="container-custom">
          <h1 className="heading-serif text-6xl mb-6">Destinations</h1>
          <div className="mx-auto h-1 w-20 bg-gold"></div>
        </div>
      </section>

      {/* Destinations List */}
      <section className="container-custom pb-32">
        {allDestinations.map((dest, index) => (
          <div
            key={index}
            className={`group mb-20 flex flex-col items-stretch overflow-hidden bg-white shadow-sm md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image Part */}
            <div className="relative min-h-[450px] w-full md:w-1/2 overflow-hidden">
              <Image
                src={dest.image}
                alt={dest.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </div>

            {/* Content Part */}
            <div className="flex w-full flex-col justify-center p-12 md:w-1/2 md:p-20">
              <span className="tag-label">{dest.tags}</span>
              
              <h2 className="heading-serif text-4xl mb-6">
                {dest.title}
              </h2>

              <p className="mb-6 text-xl heading-serif font-bold">
                {dest.price} <span className="text-xs font-sans font-normal text-gray-400 italic">/ trip</span>
              </p>

              <p className="mb-10 text-sm leading-relaxed text-gray-500 font-light italic">
                {dest.description}
              </p>

              <Link href={`/destinations/${dest.id}`}>
                <button className="btn-gold self-start">
                  Explore Journey
                </button>
              </Link>
            </div>
          </div>
        ))}
      </section>
      
    </main>
  );
}