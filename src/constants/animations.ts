"use client";

export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { margin: "-10px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

export const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const revealScale = {
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { margin: "-10px" },
  transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
};
