"use client";

import React, { useState, useEffect } from "react";
import { ArrowLeft, Ship, Menu, X, Globe } from "lucide-react";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { useTranslations, useLocale } from "next-intl";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("Navbar");
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = pathname === "/";

  const toggleLanguage = () => {
    const newLocale = locale === "en" ? "th" : "en";
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <nav
      className={`fixed top-0 z-[100] w-full transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 py-3 shadow-md backdrop-blur-lg"
          : isHomePage
          ? "bg-transparent py-6"
          : "bg-white/80 py-4 backdrop-blur-md"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* 1. Left Side: Back or Logo-Brand */}
        <div className="flex items-center gap-4">
          {!isHomePage ? (
            <button
              onClick={() => router.back()}
              className={`group flex items-center gap-2 transition-all active:scale-95 ${
                isScrolled ? "text-navy" : "text-navy"
              }`}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-100 bg-white shadow-sm transition-all group-hover:bg-navy group-hover:text-white">
                <ArrowLeft className="h-4 w-4" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest hidden lg:block">
                {t("back")}
              </span>
            </button>
          ) : (
            <Link href="/" className="group flex items-center gap-3">
              <div className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-500 ${isScrolled ? 'bg-navy text-white' : 'bg-white/20 backdrop-blur-sm text-white'}`}>
                <Ship className={`h-5 w-5 transition-transform duration-500 group-hover:rotate-12 ${!isScrolled && isHomePage ? 'text-gold' : ''}`} />
              </div>
              <span className={`text-sm font-bold tracking-tighter uppercase md:text-xl transition-colors duration-500 ${isScrolled ? 'text-navy' : 'text-white'}`}>
                Chao Phraya <span className="text-gold italic font-serif lowercase">Trips</span>
              </span>
            </Link>
          )}
        </div>

        {/* 2. Center/Right: Nav Links */}
        <div className="hidden items-center gap-10 md:flex">
          <Link
            href="/fleet"
            className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-all hover:text-gold ${
              isScrolled || !isHomePage ? "text-navy" : "text-white"
            }`}
          >
            {t("fleet")}
          </Link>
          <Link
            href="/destinations"
            className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-all hover:text-gold ${
              isScrolled || !isHomePage ? "text-navy" : "text-white"
            }`}
          >
            {t("destinations")}
          </Link>
          
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-all hover:text-gold ${
              isScrolled || !isHomePage ? "text-navy" : "text-white"
            }`}
          >
            <Globe className="h-3.5 w-3.5" />
            {locale === "en" ? "TH" : "EN"}
          </button>

          <Link
            href="/#contact-section"
            className={`bg-gold px-8 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-navy hover:scale-105 active:scale-95 rounded-full shadow-sm ${
               !isScrolled && isHomePage ? "bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white hover:text-navy" : ""
            }`}
          >
            {t("bookNow")}
          </Link>
        </div>

        {/* Mobile Toggle & Language */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleLanguage}
            className={`flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.2em] transition-all ${
              isScrolled || !isHomePage ? "text-navy" : "text-white"
            }`}
          >
            <Globe className="h-3 w-3" />
            {locale === "en" ? "TH" : "EN"}
          </button>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled || !isHomePage ? 'text-navy' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled || !isHomePage ? 'text-navy' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[70px] z-[90] bg-white p-8 md:hidden animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-8 text-center">
            <Link 
              href="/fleet" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-navy font-serif text-3xl"
            >
              {t("fleet")}
            </Link>
            <Link 
              href="/destinations" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-navy font-serif text-3xl"
            >
              {t("destinations")}
            </Link>
            <Link 
              href="/#contact-section" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-navy font-serif text-3xl"
            >
              {t("contact")}
            </Link>
            <div className="mt-8 border-t border-gray-100 pt-8">
               <p className="text-gold text-[10px] font-bold tracking-widest uppercase mb-4">Private & Exclusive</p>
               <p className="text-gray-400 text-sm italic">"The Ultimate River Experience"</p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
