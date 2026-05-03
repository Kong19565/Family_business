"use client";

import React from "react";
import { Anchor, MapPin, Compass } from "lucide-react";
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/constants/animations";
import { useTranslations } from "next-intl";

export default function Features() {
  const t = useTranslations("Features");

  const featureList = [
    {
      icon: <Anchor className="feature-icon" />,
      title: t("luxury.title"),
      description: t("luxury.description"),
    },
    {
      icon: <MapPin className="feature-icon" />,
      title: t("hidden.title"),
      description: t("hidden.description"),
    },
    {
      icon: <Compass className="feature-icon" />,
      title: t("bespoke.title"),
      description: t("bespoke.description"),
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
