import React from "react";
import Image from "next/image";
import Link from "next/link";
import { tours } from "@/app/constants/data";
import { Clock, MapPin, Camera } from "lucide-react";

export default function TourGrid() {
  return (
    <section className="bg-[#fdfcf9] px-6 py-24 md:px-12">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-20 text-center">
          <h2 className="heading-serif mb-4 text-5xl md:text-6xl">Discover the River</h2>
          <div className="mx-auto h-0.5 w-16 bg-gold mb-6"></div>
          <p className="text-[10px] font-bold tracking-[0.3em] text-gray-400 uppercase">
            Private canal boat trips • 08:00 - 18:00 • Custom schedules available
          </p>
        </div>

        {/* Tour Grid: ปรับเป็น 1 คอลัมน์บน Tablet เพื่อความสมมาตร */}
        <div className="grid grid-cols-1 gap-y-24 lg:grid-cols-2 lg:gap-x-16">
          {tours.map((tour, index) => (
            <div
              key={index}
              className="group grid grid-cols-1 gap-8 md:grid-cols-2 lg:flex lg:flex-row"
            >
              {/* Image Section: อัตราส่วน 4:3 คงที่เพื่อให้ดูสมดุล */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm shadow-md">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>

              {/* Content Section */}
              <div className="flex flex-col justify-between py-1">
                <div>
                  <h3 className="heading-serif mb-4 text-2xl leading-tight transition-colors group-hover:text-gold md:text-3xl">
                    {tour.title}
                  </h3>

                  {/* Highlights & Duration */}
                  <div className="mb-6 space-y-3">
                    <div className="flex items-center text-[11px] font-bold uppercase tracking-widest text-gold">
                      <Clock className="mr-2 h-3.5 w-3.5" /> {tour.duration}
                    </div>
                    
                    <div className="flex items-start text-sm text-gray-600">
                      <Camera className="mr-3 h-4 w-4 flex-shrink-0 text-gray-400" />
                      <span className="leading-relaxed">{tour.highlights}</span>
                    </div>
                    
                    <div className="flex items-start text-sm italic text-gray-400">
                      <MapPin className="mr-3 h-4 w-4 flex-shrink-0 text-gray-400" />
                      <span>Starts: {tour.startingPoint}</span>
                    </div>
                  </div>

                  <p className="mb-6 text-sm leading-relaxed text-gray-500 font-light line-clamp-3">
                    {tour.description}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-gray-100 pt-6 md:flex-col md:items-start md:gap-4 lg:flex-row lg:items-center">
                  <p className="font-serif text-2xl font-bold text-navy">
                    {tour.price}
                    <span className="ml-1 text-xs font-sans font-normal text-gray-400 uppercase tracking-tighter">
                      / trip
                    </span>
                  </p>

                  <Link href={`/destinations/${tour.id}`} className="w-auto">
                    <button className="bg-navy hover:bg-gold px-8 py-3 text-[10px] font-bold tracking-[0.2em] text-white uppercase transition-all duration-300 rounded-sm">
                      Join Trip
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="mt-24 text-center">
          <Link href="/destinations">
            <button className="border border-gold text-gold hover:bg-gold hover:text-white px-10 py-4 text-[11px] font-bold tracking-[0.3em] uppercase transition-all duration-500">
              See More Destinations
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}