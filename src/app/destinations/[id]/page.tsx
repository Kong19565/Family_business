import Image from "next/image";
import Link from "next/link";
import { allDestinations } from "@/app/constants/data";
import Navbar from "@/app/components/Navbar";
import { Clock, MapPin, CheckCircle, ArrowLeft } from "lucide-react";
import MapSection from "@/app/components/MapSection";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function TourDetailPage({ params }: PageProps) {
  const { id } = await params;
  const tour = allDestinations.find((d) => d.id === id);

  if (!tour) {
    return (
      <div className="bg-cream flex min-h-screen flex-col items-center justify-center gap-6 p-8 text-center">
        <h1 className="heading-serif text-navy text-3xl">Tour Not Found</h1>
        <p className="text-gray-500">
          The destination you are looking for does not exist.
        </p>
        <Link
          href="/destinations"
          className="nav-link-underline text-navy font-bold tracking-widest uppercase"
        >
          Back to Destinations
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <Navbar />

      {/* Hero Section - ปรับความสูงให้ดูหรูขึ้น */}
      <div className="relative h-[50vh] min-h-100 w-full lg:h-[70vh]">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 px-6 text-center">
          <h1 className="heading-serif max-w-4xl text-4xl leading-tight text-white md:text-6xl lg:text-7xl">
            {tour.title}
          </h1>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="container-custom grid grid-cols-1 gap-12 py-20 lg:grid-cols-3 lg:gap-20">
        {/* Left Column: Story & Details */}
        <div className="space-y-16 lg:col-span-2">
          <section>
            <div className="mb-8">
              <span className="tag-label text-gold">The Experience</span>
              <h2 className="heading-serif text-navy mt-2 text-4xl">
                Overview
              </h2>
            </div>
            <p className="first-letter:text-navy text-lg leading-relaxed font-light text-gray-600 first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-5xl">
              {tour.description}
            </p>
          </section>

          {/* Itinerary Highlights Box */}
          <section className="bg-cream/30 border-gold/10 rounded-sm border p-10">
            <h3 className="heading-serif text-navy mb-8 text-2xl italic">
              Itinerary Highlights
            </h3>
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {tour.details.itinerary.map((item, i) => (
                <li key={i} className="group flex items-start gap-4">
                  <div className="bg-navy mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white transition-transform group-hover:scale-110">
                    <CheckCircle className="h-3 w-3" />
                  </div>
                  <span className="text-[14px] leading-relaxed font-medium text-gray-600">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* What's Included */}
          <section>
            <h3 className="heading-serif text-navy mb-6 text-2xl">
              What&apos;s Included
            </h3>
            <div className="flex flex-wrap gap-3">
              {tour.details.included.map((item, i) => (
                <span
                  key={i}
                  className="bg-navy/5 text-navy rounded-full px-4 py-2 text-[11px] font-bold tracking-widest uppercase"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Booking Card (จัดระเบียบใหม่ไม่ให้เบี้ยว) */}
        <div className="lg:col-span-1">
          <div className="sticky top-32 overflow-hidden border border-gray-100 bg-white shadow-2xl transition-transform duration-500 hover:-translate-y-1">
            {/* Price Header */}
            <div className="bg-navy p-10 text-center text-white">
              <p className="text-gold mb-2 text-[10px] font-bold tracking-[0.3em] uppercase opacity-80">
                Price Per Private Trip
              </p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl font-bold tracking-tight">
                  {tour.price}
                </span>
                <span className="text-xs font-light tracking-widest text-white/60 uppercase">
                  THB
                </span>
              </div>
            </div>

            {/* Info Body */}
            <div className="text-navy space-y-6 p-6 md:space-y-8 md:p-10">
              {/* Duration Section */}
              <div className="flex flex-col justify-between gap-2 border-b border-gray-50 pb-4 sm:flex-row sm:items-center md:pb-6">
                <div className="flex items-center gap-3 text-gray-400">
                  <Clock className="text-gold h-4 w-4" />
                  <span className="text-[10px] font-bold tracking-widest uppercase">
                    Duration
                  </span>
                </div>
                <span className="font-serif text-lg md:text-xl">
                  {tour.details.duration}
                </span>
              </div>

              {/* Starting Point Section */}
              <div className="flex flex-col justify-between gap-2 border-b border-gray-50 pb-4 sm:flex-row sm:items-center md:pb-6">
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin className="text-gold h-4 w-4" />
                  <span className="text-[10px] font-bold tracking-widest uppercase">
                    Starting Point
                  </span>
                </div>
                <span className="text-left text-[11px] leading-tight font-medium tracking-tighter uppercase sm:text-right">
                  Talat Phlu / Wutthakat
                </span>
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <Link
                  href="/#contact-section"
                  className="group flex w-full flex-col items-center"
                >
                  <button
                    type="button"
                    className="bg-navy hover:bg-gold hover:text-navy w-full py-6 text-[11px] font-bold tracking-[0.4em] text-white uppercase shadow-lg transition-all duration-500 active:scale-95"
                  >
                    Book This Trip Now
                  </button>
                  <p className="mt-10 text-center text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase opacity-60 transition-opacity group-hover:opacity-100">
                    *Instant confirmation via WhatsApp
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MapSection />
    </main>
  );
}
