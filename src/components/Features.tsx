"use client";

import React from "react";
import { Anchor, MapPin, Compass } from "lucide-react";
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/constants/animations";

interface FeaturesProps {
  dict?: {
    title: string;
    items: { title: string; desc: string }[];
  };
}

export default function Features({ dict }: FeaturesProps) {
  const icons = [
    <Anchor key="anchor" className="feature-icon" />,
    <MapPin key="map" className="feature-icon" />,
    <Compass key="compass" className="feature-icon" />,
  ];

  const featureList = dict?.items.map((item, index) => ({
    icon: icons[index] || icons[0],
    title: item.title,
    description: item.desc,
  })) || [
    {
      icon: icons[0],
      title: "Luxury Fleet",
      description:
        "Private boats maintained to the highest standards with full amenities for your comfort.",
    },
    {
      icon: icons[1],
      title: "Hidden Gems",
      description:
        "Navigate through narrow canals where large boats can't reach. Experience authentic local life.",
    },
    {
      icon: icons[2],
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
