"use client";

import Image from "next/image";
import Link from "next/link";
import { fleet } from "@/constants/data";
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/constants/animations";

export default function Fleet() {
  // เลือกแสดงผล 3 ลำแรกในหน้า Home (รวมเรือไฟฟ้า)
  const displayFleet = fleet.slice(0, 3);

  return (
    <section id="fleet" className="bg-cream px-4 py-16 md:px-8 md:py-24">
      <motion.div 
        className="mb-12 text-center md:mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="heading-serif mb-4 text-3xl md:mb-6 md:text-5xl">Our Fleet</h2>
        <p className="mx-auto max-w-xl px-4 text-xs text-gray-500 italic md:text-sm">
          &ldquo;Traditional craftsmanship meets modern comfort&rdquo;
        </p>
      </motion.div>

      <motion.div 
        className="container-custom grid grid-cols-1 gap-12 lg:grid-cols-3"
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
      >
        {displayFleet.map((boat, index) => (
          <motion.div 
            key={index} 
            className="group fleet-card"
            variants={fadeInUp}
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={boat.image}
                alt={boat.name}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-navy/0 transition-colors duration-500 group-hover:bg-navy/10"></div>
            </div>
            
            <div className="fleet-card-content">
              <div className="mb-6">
                <span className="text-gold mb-2 block text-[10px] font-bold tracking-[0.3em] uppercase">
                  {boat.capacity}
                </span>
                <h3 className="heading-serif text-2xl tracking-tighter text-navy md:text-3xl">
                  {boat.name}
                </h3>
              </div>
              
              <p className="mb-8 flex-grow">
                {boat.description}
              </p>
              
              <Link href="/fleet" className="group/link flex items-center gap-4 self-start">
                <span className="text-[10px] font-bold tracking-[0.2em] text-navy uppercase">View Details</span>
                <div className="h-[1px] w-8 bg-gold transition-all duration-300 group-hover/link:w-12"></div>
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-20 text-center">
        <Link href="/fleet">
          <button type="button" className="btn-gold">
            See More Fleet
          </button>
        </Link>
      </div>
    </section>
  );
}
