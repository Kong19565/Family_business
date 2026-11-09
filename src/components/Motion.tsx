"use client";

import { MotionConfig, motion, type Variants } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};

const group: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const inView = { once: true, margin: "-60px" };

/** Turns off movement for visitors who ask their device to reduce motion. */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

/** Fades its content up as it scrolls into view. */
export function Reveal({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={fadeUp} initial="hidden" whileInView="show" viewport={inView}>
      {children}
    </motion.div>
  );
}

const groupTags = { div: motion.div, ul: motion.ul, ol: motion.ol };
const itemTags = { div: motion.div, li: motion.li, article: motion.article };

/** Reveals its <StaggerItem> children one after another. `onMount` starts on load instead of on scroll. */
export function Stagger({
  as = "div",
  onMount = false,
  className,
  children,
}: {
  as?: keyof typeof groupTags;
  onMount?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const Tag = groupTags[as];
  const trigger = onMount ? { animate: "show" } : { whileInView: "show", viewport: inView };
  return (
    <Tag className={className} variants={group} initial="hidden" {...trigger}>
      {children}
    </Tag>
  );
}

export function StaggerItem({
  as = "div",
  className,
  children,
}: {
  as?: keyof typeof itemTags;
  className?: string;
  children: React.ReactNode;
}) {
  const Tag = itemTags[as];
  return (
    <Tag className={className} variants={fadeUp}>
      {children}
    </Tag>
  );
}

/** Soft crossfade when `swapKey` changes, e.g. a different tour or boat. */
export function Swap({
  swapKey,
  className,
  children,
}: {
  swapKey: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      key={swapKey}
      className={className}
      initial={{ opacity: 0, scale: 1.03 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.55, ease }}
    >
      {children}
    </motion.div>
  );
}
