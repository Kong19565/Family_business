"use client";

import React from "react";
import { Anchor, MapPin, Compass } from "lucide-react";
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/constants/animations";

export default function Features() {
  const featureList = [
    {
      icon: <Anchor className="feature-icon" />,
      title: "Luxury Fleet",
      description:
        "Private boats maintained to the highest standards with full amenities for your comfort.",
    },
    {
      icon: <MapPin className="feature-icon" />,
      title: "Hidden Gems",
      description:
        "Navigate through narrow canals where large boats can't reach. Experience authentic local life.",
    },
    {
      icon: <Compass className="feature-icon" />,
      title: "Bespoke Trips",
      description:
        "Tailor your journey's time and route to perfectly match your personal preferences.",
    },
  ];

  return (
    <section className="bg-cream py-24">
      <motion.div 
        className="container-custom"
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
          {featureList.map((item, index) => (
            <motion.div 
              key={index} 
              className="group space-y-4"
              variants={fadeInUp}
            >
              {item.icon}
              <h3 className="feature-title">{item.title}</h3>
              <p className="text-sm leading-relaxed text-gray-500 italic">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

