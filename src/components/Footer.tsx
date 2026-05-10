"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, ExternalLink, X } from "lucide-react";

export default function Footer() {
  const [activePopup, setActivePopup] = useState<string | null>(null);

  const contactLinks = {
    whatsapp: {
      url: "https://wa.me/66988289849",
      qr: "/images/whatsapp_qr.jpg",
      id: "0988289849",
    },
    line: {
      url: "https://line.me/R/ti/p/~0988289849",
      qr: "/images/line_qr.jpg",
      id: "0988289849",
    },
    wechat: {
      qr: "/images/wechat_qr.jpg",
      id: "0988289849",
    },
    phone1: { label: "065-446-3694", href: "tel:0654463694" },
    phone2: { label: "098-828-9849", href: "tel:0988289849" },
  };

  const renderPopup = () => {
    if (!activePopup) return null;

    let title = "";
    let content: React.ReactNode = null;

    if (activePopup === "phone") {
      title = "Contact Numbers";
      content = (
        <div className="flex flex-col gap-3">
          {[contactLinks.phone1, contactLinks.phone2].map((phone, idx) => (
            <a
              key={idx}
              href={phone.href}
              className="flex items-center justify-between rounded-xl border border-gold/10 bg-white/5 px-6 py-4 transition-all hover:bg-gold hover:text-navy"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-gold/10 p-2 group-hover:bg-navy/10">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="font-bold tracking-widest">{phone.label}</span>
              </div>
              <ExternalLink className="h-3 w-3 opacity-50" />
            </a>
          ))}
        </div>
      );
    } else {
      const type = activePopup as "line" | "whatsapp" | "wechat";
      const config = contactLinks[type];
      title = `${type.toUpperCase()} Contact`;
      content = (
        <div className="flex flex-col items-center gap-8">
          <div className="relative aspect-square w-64 overflow-hidden rounded-2xl bg-white">
            <Image
              src={config.qr}
              alt={`${type} QR Code`}
              fill
              className={`object-cover ${
                type === "whatsapp" ? "scale-[2] -translate-y-6" : "scale-150"
              } ${type === "line" ? "translate-y-19" : ""} ${type === "wechat" ? "translate-y-2" : ""}`}
            />
          </div>
          <div className="text-center">
            <span className="mb-1 block text-[10px] font-bold tracking-[0.3em] text-gold uppercase">
              {type === "line" ? "Phone Number" : "Account ID"}
            </span>
            <p className="mb-6 text-xl font-serif text-white italic">
              {config.id}
            </p>
            {"url" in config && (
              <a
                href={config.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-gold px-8 py-3 text-[10px] font-bold tracking-[0.2em] text-navy transition-all hover:bg-white hover:scale-105 active:scale-95 uppercase"
              >
                Open Application <ExternalLink className="h-3 w-3" />
              </a>
            )}
          </div>
        </div>
      );
    }

    return (
      <div className="fixed inset-0 z-[150] flex items-center justify-center bg-navy/90 px-4 backdrop-blur-md animate-in fade-in duration-300">
        <div className="relative w-full max-w-md rounded-[2rem] border border-gold/20 bg-navy p-10 shadow-[0_0_50px_rgba(212,195,163,0.1)] animate-in zoom-in-95 duration-500">
          <button
            onClick={() => setActivePopup(null)}
            className="absolute top-6 right-6 text-gray-500 hover:text-gold transition-colors"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="mb-10 text-center">
            <span className="mb-3 block text-[10px] font-bold tracking-[0.4em] text-gold uppercase">
              Concierge Service
            </span>
            <h3 className="font-serif text-3xl text-white italic underline decoration-gold/20 underline-offset-8 decoration-1">
              {title}
            </h3>
          </div>

          {content}

          <button
            onClick={() => setActivePopup(null)}
            className="mt-10 w-full text-[10px] font-bold tracking-[0.3em] text-gray-500 uppercase hover:text-white transition-colors"
          >
            Close Window
          </button>
        </div>
      </div>
    );
  };

  return (
    <footer
      id="contact-section"
      className="relative border-t border-gold/10 bg-navy px-6 py-24 text-white md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-24 text-center">
          <span className="footer-tag">
            Private & Personalized
          </span>
          <h2 className="mb-8 font-serif text-5xl tracking-tight text-white md:text-7xl lg:text-8xl italic">
            Connect <span className="text-gold not-italic">With Us</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed font-light text-gray-400 italic md:text-lg">
            Experience the finest canal tours with our dedicated concierge. 
            Choose your preferred platform to start your journey.
          </p>
        </div>

        {/* Contact Hub with Elegant Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* LINE Card */}
          <button
            onClick={() => setActivePopup("line")}
            className="group relative flex flex-col items-center justify-center rounded-3xl bg-white p-12 shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gold/10"
          >
            <div className="mb-6 relative w-12 h-12 transition-transform duration-500 group-hover:scale-110">
              <Image 
                src="/images/line-custom.svg" 
                alt="LINE" 
                fill 
                className="object-contain"
              />
            </div>
            <h3 className="mb-2 text-[10px] font-bold tracking-[0.3em] text-navy uppercase">
              LINE APP
            </h3>
            <p className="text-[10px] font-medium tracking-widest text-gray-400 uppercase">
              Official Contact
            </p>
            <div className="absolute inset-0 border-2 border-gold/0 rounded-3xl transition-all duration-500 group-hover:border-gold/20"></div>
          </button>

          {/* WhatsApp Card */}
          <button
            onClick={() => setActivePopup("whatsapp")}
            className="group relative flex flex-col items-center justify-center rounded-3xl bg-white p-12 shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gold/10"
          >
            <div className="mb-6 relative w-12 h-12 transition-transform duration-500 group-hover:scale-110">
              <Image 
                src="/images/whatsapp-custom.svg" 
                alt="WhatsApp" 
                fill 
                className="object-contain"
              />
            </div>
            <h3 className="mb-2 text-[10px] font-bold tracking-[0.3em] text-navy uppercase">
              WHATSAPP
            </h3>
            <p className="text-[10px] font-medium tracking-widest text-gray-400 uppercase">
              Quick Inquiry
            </p>
            <div className="absolute inset-0 border-2 border-gold/0 rounded-3xl transition-all duration-500 group-hover:border-gold/20"></div>
          </button>

          {/* WeChat Card */}
          <button
            onClick={() => setActivePopup("wechat")}
            className="group relative flex flex-col items-center justify-center rounded-3xl bg-white p-12 shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gold/10"
          >
            <div className="mb-6 relative w-12 h-12 transition-transform duration-500 group-hover:scale-110">
              <Image 
                src="/images/wechat-custom.svg" 
                alt="WeChat" 
                fill 
                className="object-contain"
              />
            </div>
            <h3 className="mb-2 text-[10px] font-bold tracking-[0.3em] text-navy uppercase">
              WECHAT
            </h3>
            <p className="text-[10px] font-medium tracking-widest text-gray-400 uppercase">
              Global Support
            </p>
            <div className="absolute inset-0 border-2 border-gold/0 rounded-3xl transition-all duration-500 group-hover:border-gold/20"></div>
          </button>

          {/* Direct Call Card */}
          <button
            onClick={() => setActivePopup("phone")}
            className="group relative flex flex-col items-center justify-center rounded-3xl bg-gold p-12 shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/10"
          >
            <div className="mb-6 rounded-full bg-navy/5 p-4 text-navy transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
              <Phone className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-[10px] font-bold tracking-[0.3em] text-navy uppercase">
              DIRECT CALL
            </h3>
            <p className="text-[10px] font-bold tracking-widest text-navy/60 uppercase">
              Select Number
            </p>
          </button>
        </div>

        {/* Dynamic Popup */}
        {renderPopup()}

        {/* Footer Bottom */}
        <div className="mt-32 flex flex-col items-center justify-between gap-12 border-t border-gold/10 pt-16 text-center md:flex-row md:text-left">
          <div className="md:flex-1">
            <h4 className="mb-2 font-serif text-3xl text-gold italic underline decoration-gold/10 underline-offset-8">
              Canal tour
            </h4>
            <p className="text-[10px] font-bold tracking-[0.4em] text-gray-500 uppercase">
              Bangkok&apos;s Private Heritage
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-[11px] font-bold tracking-[0.2em] text-gray-400 uppercase md:flex-1">
            <Link
              href="/destinations"
              className="transition-colors hover:text-gold"
            >
              Routes
            </Link>
            <Link href="/fleet" className="transition-colors hover:text-gold">
              Fleet
            </Link>
          </div>

          <div className="text-[10px] font-medium tracking-[0.5em] text-gray-700 uppercase md:flex-1 md:text-right">
            © 2026 LUXURY CANALS. ESTABLISHED HERITAGE.
          </div>
        </div>
      </div>
    </footer>
  );
}
