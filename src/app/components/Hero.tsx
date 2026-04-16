import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-navy relative flex h-screen items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Home_pic.jpg"
          alt="Luxury River Experience"
          fill
          className="animate-slow-zoom scale-105 object-cover brightness-[0.75]"
          priority
        />
        <div className="hero-overlay"></div>
      </div>

      {/* Navigation (Transparent over Hero) */}
      <nav className="absolute top-0 z-50 flex w-full items-center justify-between px-8 py-8 text-white">
        <div className="flex items-center gap-2 text-2xl font-bold tracking-tighter">
          <span className="text-gold font-serif italic">Chao Phraya</span> Trips
        </div>
        <div className="hidden gap-10 text-[10px] font-bold tracking-[0.2em] uppercase md:flex">
          <a href="#fleet" className="hover:text-gold transition-colors">
            Fleet
          </a>
          <Link
            href="/destinations"
            className="hover:text-gold transition-colors"
          >
            Destinations
          </Link>
          <a
            href="#contact-section"
            className="hover:text-gold transition-colors"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 px-4 text-center text-white">
        <span className="tag-label text-white/80">Private & Exclusive</span>
        <h1 className="hero-title">
          The Ultimate <br />
          {/* เพิ่ม -mt (Negative Margin Top) เพื่อดึงบรรทัดล่างให้ขึ้นไปชิดบรรทัดบนมากขึ้น */}
          <span className="text-gold -mt-4 block font-serif text-[0.85em] italic md:-mt-8">
            River Experience
          </span>
        </h1>
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
          <Link href="/destinations">
            <button className="btn-hero">Explore Routes</button>
          </Link>
        </div>
      </div>

      {/* Bottom Gradient for smooth transition to next section */}
      <div className="from-cream absolute bottom-0 z-10 h-32 w-full bg-gradient-to-t to-transparent"></div>
    </section>
  );
}
