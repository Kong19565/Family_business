"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { fleet } from "@/constants/data";
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/constants/animations";
import { useTranslations } from "next-intl";

export default function Fleet() {
  const t = useTranslations("Fleet");
  const d = useTranslations("Data.fleet");

  // เลือกแสดงผล 3 ลำแรกในหน้า Home (รวมเรือไฟฟ้า)
  const displayFleet = fleet.slice(0, 3);

  return (
    <section id="fleet" className="bg-cream px-4 py-16 md:px-8 md:py-24">
      <motion.div 
        className="mb-12 text-center md:mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="heading-serif mb-4 text-3xl md:mb-6 md:text-5xl">{t("title")}</h2>
        <p className="mx-auto max-w-xl px-4 text-xs text-gray-500 italic md:text-sm">
          &ldquo;{t("tagline")}&rdquo;
        </p>
      </motion.div>

      <motion.div 
        className="container-custom grid grid-cols-1 gap-12 lg:grid-cols-3"
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
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
                alt={d(`${boat.id}.name`)}
                fill
                className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-navy/0 transition-colors duration-500 group-hover:bg-navy/10"></div>
            </div>
            
            <div className="fleet-card-content">
              <div className="mb-6">
                <span className="text-gold mb-2 block text-[10px] font-bold tracking-[0.3em] uppercase">
                  {d(`${boat.id}.capacity`)}
                </span>
                <h3 className="heading-serif text-2xl tracking-tighter text-navy md:text-3xl">
                  {d(`${boat.id}.name`)}
                </h3>
              </div>
              
              <p className="mb-8 flex-grow">
                {d(`${boat.id}.description`)}
              </p>
              
              <Link href="/fleet" className="group/link flex items-center gap-4 self-start">
                <span className="text-[10px] font-bold tracking-[0.2em] text-navy uppercase">{t("viewDetails")}</span>
                <div className="h-[1px] w-8 bg-gold transition-all duration-300 group-hover/link:w-12"></div>
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-20 text-center">
        <Link href="/fleet">
          <button type="button" className="btn-gold">
            {t("seeMore")}
          </button>
        </Link>
      </div>
    </section>
  );
}
