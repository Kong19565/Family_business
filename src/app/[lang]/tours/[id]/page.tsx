import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, Clock, MapPin, Wallet } from "lucide-react";
import { allDestinations } from "@/constants/data";
import { contact } from "@/constants/site";
import { getDictionary } from "@/dictionaries/dictionaries";
import { isLocale, locales, pick } from "@/lib/i18n";
import { panelProps } from "@/lib/panel";
import Navbar from "@/components/Navbar";
import BookingPanel from "@/components/BookingPanel";
import MobileBar from "@/components/MobileBar";
import { BookingProvider, BookTourButton } from "@/components/BookingProvider";
import { Contact, Footer } from "@/components/Sections";

export function generateStaticParams() {
  return locales.flatMap((lang) => allDestinations.map((t) => ({ lang, id: t.id })));
}

export default async function TourPage({ params }: { params: Promise<{ lang: string; id: string }> }) {
  const { lang, id } = await params;
  if (!isLocale(lang)) notFound();
  const tour = allDestinations.find((t) => t.id === id);
  if (!tour) notFound();
  const dict = await getDictionary(lang);
  const p = { lang, dict };
  const steps = tour.details.itinerary[lang];

  return (
    <BookingProvider initialTourId={tour.id}>
      <Navbar {...p} />
      <main>
        <div className="container-page pb-14 pt-4">
          <Link href={`/${lang}#tours`} className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-muted hover:text-foreground">
            <ArrowLeft className="h-4 w-4" aria-hidden /> {dict.tour.back}
          </Link>

          <div className="relative mt-1 aspect-[16/10] overflow-hidden rounded-3xl md:aspect-[21/9]">
            <Image src={tour.image} alt={pick(tour.title, lang)} fill priority sizes="(min-width:1152px) 1152px, 100vw" className="object-cover" />
          </div>

          <h1 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl">{pick(tour.title, lang)}</h1>
          <p className="mt-3 max-w-3xl text-lg text-muted">{pick(tour.description, lang)}</p>

          <dl className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
            {[
              { icon: Clock, label: dict.tour.duration, value: pick(tour.duration, lang), wide: false },
              { icon: Wallet, label: dict.tour.price, value: tour.price, wide: false },
              { icon: MapPin, label: dict.tour.start, value: pick(tour.details.startingPoint, lang), wide: true },
            ].map(({ icon: Icon, label, value, wide }) => (
              <div
                key={label}
                className={`flex items-start gap-3 rounded-2xl border border-line bg-white p-4 ${wide ? "col-span-2 md:col-span-1" : ""}`}
              >
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden />
                <div>
                  <dt className="text-sm text-muted">{label}</dt>
                  <dd className="font-semibold">{value}</dd>
                </div>
              </div>
            ))}
          </dl>
          <p className="mt-2 text-sm text-muted">{dict.tour.priceNote}</p>

          <div className="mt-10 grid gap-10 md:grid-cols-[1.4fr_1fr]">
            <section aria-labelledby="route">
              <h2 id="route" className="text-2xl font-bold">{dict.tour.route}</h2>
              <ol className="ml-3.5 mt-6 border-l-2 border-brand/30 pl-6">
                {steps.map((s, i) => (
                  <li key={s} className="relative pb-7 last:pb-0">
                    <span className="absolute -left-[2.45rem] flex h-7 w-7 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <p className="text-lg leading-snug">{s}</p>
                  </li>
                ))}
              </ol>
            </section>
            <section aria-labelledby="included">
              <h2 id="included" className="text-2xl font-bold">{dict.tour.included}</h2>
              <ul className="mt-6 space-y-3">
                {tour.details.included[lang].map((x) => (
                  <li key={x} className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                      <Check className="h-4 w-4" aria-hidden />
                    </span>
                    {x}
                  </li>
                ))}
              </ul>
              <BookTourButton tourId={tour.id} className="btn btn-primary mt-7 w-full">
                {dict.tour.book}
              </BookTourButton>
            </section>
          </div>
        </div>

        <BookingPanel {...panelProps(lang, dict)} />
        <Contact {...p} />
      </main>
      <Footer {...p} />
      <MobileBar bookLabel={dict.tour.book} lineUrl={contact.line.url} lineLabel={dict.hero.cta2} />
    </BookingProvider>
  );
}
