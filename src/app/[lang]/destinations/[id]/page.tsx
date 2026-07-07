import Image from "next/image";
import Link from "next/link";
import { allDestinations } from "@/constants/data";
import Navbar from "@/components/Navbar";
import { Clock, MapPin, CheckCircle } from "lucide-react";
import Footer from '@/components/Footer';
import MapSection from "@/components/MapSection";
import { getDictionary } from "@/dictionaries/dictionaries";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string; lang: string }>;
}): Promise<Metadata> {
  const { id, lang } = await params;
  const currentLang = lang as 'en' | 'th';
  const tour = allDestinations.find((d) => d.id === id);
  if (!tour) return { title: "Tour Not Found | Canal tour" };
  return {
    title: `${tour.title[currentLang]} | Canal tour`,
    description: tour.description[currentLang],
  };
}

interface PageProps {
  params: Promise<{ id: string, lang: string }>;
}

export default async function TourDetailPage({ params }: PageProps) {
  const { id, lang } = await params;
  const currentLang = lang as 'en' | 'th';
  const dict = await getDictionary(currentLang);
  const tour = allDestinations.find((d) => d.id === id);

  if (!tour) {
    return (
      <div className="bg-cream flex min-h-screen flex-col items-center justify-center gap-6 p-8 text-center">
        <h1 className="heading-serif text-navy text-3xl">
          {dict.tourDetail.notFoundTitle}
        </h1>
        <p className="text-gray-500">
          {dict.tourDetail.notFoundDesc}
        </p>
        <Link
          href={`/${lang}/destinations`}
          className="nav-link-underline text-navy font-bold tracking-widest uppercase"
        >
          {dict.tourDetail.backToDestinations}
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <Navbar lang={lang} dict={dict.common.nav} />

      {/* Hero Section - Full Height & Elegant Overlay */}
      <div className="relative h-[60vh] min-h-[450px] w-full overflow-hidden lg:h-[85vh]">
        <Image
          src={tour.image}
          alt={tour.title[currentLang]}
          fill
          sizes="100vw"
          className="scale-105 object-cover brightness-[0.8] transition-transform duration-[10s] hover:scale-100"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-black/20"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">   
          <span className="tag-label animate-fade-in-up mb-6 text-white/80">
            {dict.tourDetail.privateJourney}
          </span>      
          <h1 className="heading-serif animate-fade-in-up delay-100 max-w-5xl text-5xl leading-[1.1] text-white md:text-7xl lg:text-9xl">
            {tour.title[currentLang]}
          </h1>
          <div className="animate-fade-in-up delay-200 mt-12 h-0.5 w-24 bg-gold"></div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="container-custom relative z-20 -mt-20 grid grid-cols-1 gap-12 pb-32 lg:grid-cols-3 lg:gap-20">
        {/* Left Column: Story & Details */}
        <div className="bg-white p-8 shadow-2xl lg:col-span-2 lg:p-20">
          <section className="mb-20">
            <div className="mb-12">
              <span className="tag-label text-gold">
                {dict.tourDetail.theStory}
              </span>
              <h2 className="heading-serif text-navy mt-2 text-4xl md:text-5xl">
                {dict.tourDetail.experienceOverview}
              </h2>
            </div>
            <p className="first-letter:text-navy text-xl leading-relaxed font-light text-gray-600 first-letter:float-left first-letter:mr-4 first-letter:font-serif first-letter:text-7xl first-letter:font-bold md:text-2xl">
              {tour.description[currentLang]}
            </p>
          </section>

          {/* Itinerary Highlights Box */}
          <section className="bg-cream/40 border-gold/10 mb-20 rounded-sm border p-10 md:p-16">
            <h3 className="heading-serif text-navy mb-10 text-3xl italic">
              {dict.tourDetail.routeHighlights}
            </h3>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {tour.details.itinerary[currentLang].map((item: string, i: number) => (
                <div key={i} className="group flex items-start gap-5">
                  <div className="bg-navy mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-gold transition-all group-hover:bg-gold group-hover:text-navy">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <span className="text-base leading-relaxed font-medium text-navy/80">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* What's Included */}
          <section>
            <h3 className="heading-serif text-navy mb-8 text-2xl">
              {dict.tourDetail.inclusions}
            </h3>
            <div className="flex flex-wrap gap-4">
              {tour.details.included[currentLang].map((item: string, i: number) => (
                <div
                  key={i}
                  className="bg-navy/5 border-navy/10 flex items-center gap-2 rounded-full border px-6 py-3 text-[12px] font-bold tracking-widest text-navy uppercase"
                >
                  <div className="bg-gold h-1.5 w-1.5 rounded-full"></div>
                  {item}
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Booking Card */}
        <div className="lg:col-span-1">
          <div className="sticky top-32 overflow-hidden border border-gray-100 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.15)]">
            {/* Price Header */}
            <div className="bg-navy p-12 text-center text-white">
              <p className="text-gold mb-4 text-[11px] font-bold tracking-[0.4em] uppercase opacity-80">
                {dict.tourDetail.rateLabel}
              </p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-5xl font-bold tracking-tighter">
                  {tour.price}
                </span>
                <span className="text-sm font-light tracking-[0.2em] text-white/50 uppercase">
                  THB
                </span>
              </div>
              <p className="mt-4 text-[10px] italic text-white/40">
                {dict.tourDetail.taxLabel}
              </p>  
            </div>

            {/* Info Body */}
            <div className="text-navy space-y-8 p-8 md:p-12">
              {/* Duration Section */}
              <div className="flex items-center justify-between border-b border-gray-50 pb-6">
                <div className="flex items-center gap-4 text-gray-400">
                  <Clock className="text-gold h-5 w-5" />
                  <span className="text-[11px] font-bold tracking-widest uppercase">
                    {dict.tourDetail.duration}
                  </span>
                </div>
                <span className="font-serif text-2xl">
                  {tour.details.duration[currentLang]}
                </span>
              </div>

              {/* Starting Point Section */}
              <div className="flex flex-col gap-3 border-b border-gray-50 pb-6">
                <div className="flex items-center gap-4 text-gray-400">
                  <MapPin className="text-gold h-5 w-5" />
                  <span className="text-[11px] font-bold tracking-widest uppercase">
                    {dict.tourDetail.embarkation}
                  </span>
                </div>
                <span className="text-[12px] font-bold tracking-tighter text-navy uppercase">
                  {dict.tourDetail.embarkationDetail}
                </span>
              </div>

              {/* Action Button */}
              <div className="pt-6">
                <Link
                  href={`/${lang}/#contact-section`}
                  className="group block w-full"
                >
                  <button
                    type="button"
                    className="bg-gold hover:bg-navy w-full py-8 text-[12px] font-bold tracking-[0.5em] text-white uppercase shadow-xl transition-all duration-500 active:scale-[0.98]"
                  >
                    {dict.tourDetail.reserveNow}
                  </button>
                  <div className="mt-8 flex items-center justify-center gap-3 opacity-40 transition-opacity group-hover:opacity-100">
                     <div className="h-[1px] w-8 bg-navy"></div>
                     <p className="text-[10px] font-bold tracking-[0.2em] text-navy uppercase">
                       {dict.tourDetail.concierge}
                     </p>
                     <div className="h-[1px] w-8 bg-navy"></div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MapSection lang={lang} dict={dict.home.mapSection} />
      <Footer lang={lang} dict={dict.common.footer} />
    </main>
  );
}
