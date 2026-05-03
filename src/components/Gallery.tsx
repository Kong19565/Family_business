"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/constants/animations";

export default function Gallery() {
  const images = [
    {
      src: "/images/gallery_1.jpg",
      alt: "Boat Front",
      ratio: "aspect-[4/5]",
      col: 1,
    },
    {
      src: "/images/gallery_2.jpg",
      alt: "Tourist Enjoying",
      ratio: "aspect-square",
      col: 1,
    },
    {
      src: "/images/gallery_3.jpg",
      alt: "Lifestyle",
      ratio: "aspect-square",
      col: 2,
    },
    {
      src: "/images/gallery_4.jpg",
      alt: "Marina View",
      ratio: "aspect-[3/4]",
      col: 2,
    },
    {
      src: "/images/gallery_5.jpg",
      alt: "Boat Deck",
      ratio: "aspect-[4/5]",
      col: 3,
    },
    {
      src: "/images/gallery_6.jpg",
      alt: "Friends on Boat",
      ratio: "aspect-square",
      col: 3,
    },
    {
      src: "/images/gallery_7.png",
      alt: "Lifestyle",
      ratio: "aspect-[3/4]",
      col: 4,
    },
    {
      src: "/images/gallery_8.jpg",
      alt: "Marina View",
      ratio: "aspect-square",
      col: 4,
    },
  ];

  return (
    <section className="bg-white px-4 py-32 md:px-8">
      <motion.div 
        className="mx-auto max-w-7xl"
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
      >
        {/* Title สำหรับ Gallery ให้ดูพรีเมียมขึ้น */}
        <motion.div className="mb-16 text-center" variants={fadeInUp}>
          <h2 className="heading-serif mb-4 text-4xl">Life on the Water</h2>
          <div className="bg-gold mx-auto h-0.5 w-16"></div>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[1, 2, 3, 4].map((colNum) => (
            <div key={colNum} className="flex flex-col gap-4">
              {images
                .filter((img) => img.col === colNum)
                .map((img, i) => (
                  <motion.div 
                    key={i} 
                    className={`${img.ratio} gallery-item`}
                    variants={fadeInUp}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="gallery-image"
                    />
                  </motion.div>
                ))}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}


