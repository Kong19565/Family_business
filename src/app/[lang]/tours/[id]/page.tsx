import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, Clock, Users, Wallet } from "lucide-react";
import { courses, included, mapPiers, pierIds, places } from "@/constants/courses";
import routes from "@/constants/routes.geo.json";
import { contact, pickups } from "@/constants/site";
import { getDictionary } from "@/dictionaries/dictionaries";
import { formatBaht } from "@/lib/booking";
import { isLocale, locales, pick } from "@/lib/i18n";
import { panelProps } from "@/lib/panel";
import Navbar from "@/components/Navbar";
import BookingPanel from "@/components/BookingPanel";
import CourseMap from "@/components/CourseMap";
import MobileBar from "@/components/MobileBar";
import { Stagger, StaggerItem } from "@/components/Motion";
import { BookingProvider, BookTourButton } from "@/components/BookingProvider";
import { Contact, Footer } from "@/components/Sections";

type RouteFile = Record<string, Record<string, { km: number; line: [number, number][] }>>;

export function generateStaticParams() {
  return locales.flatMap((lang) => courses.map((c) => ({ lang, id: c.id })));
}

export default async function TourPage({ params }: { params: Promise<{ lang: string; id: string }> }) {
  const { lang, id } = await params;
  if (!isLocale(lang)) notFound();
  const course = courses.find((c) => c.id === id);
  if (!course) notFound();
  const dict = await getDictionary(lang);
  const p = { lang, dict };
  const fromPrice = Math.min(...course.options.map((o) => o.price));
  const geo = (routes as unknown as RouteFile)[course.id];
  const pierName = (pid: string) => pick(pickups.find((x) => x.id === pid)!.name, lang);

  return (
    <BookingProvider initialTourId={course.options[0].id}>
      <Navbar {...p} />
      <main>
        <div className="container-page pb-14 pt-4">
          <Link href={`/${lang}#tours`} className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-muted hover:text-foreground">
            <ArrowLeft className="h-4 w-4" aria-hidden /> {dict.tour.back}
          </Link>

          <div className="relative mt-1 aspect-[16/10] overflow-hidden rounded-lg md:aspect-[21/9]">
            <Image src={course.image} alt={pick(course.title, lang)} fill priority sizes="(min-width:1152px) 1152px, 100vw" className="ken-burns object-cover" />
          </div>

          <p className="eyebrow mt-6">{course.tag ? pick(course.tag, lang) : `${dict.tours.route_no} ${course.no}`}</p>
          <h1 className="text-3xl leading-tight sm:text-4xl">{pick(course.title, lang)}</h1>
          <p className="mt-3 max-w-3xl text-lg text-muted">{pick(course.description, lang)}</p>

          <dl className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
            {[
              { icon: Wallet, label: course.pricing ? pick(course.pricing.label, lang) : dict.tour.price, value: `${course.options.length > 1 ? dict.tours.from + " " : ""}${formatBaht(fromPrice)}` },
              { icon: Users, label: dict.tour.extraLabel, value: course.pricing ? pick(course.pricing.extraValue, lang) : dict.tour.extraValue },
              ...(course.duration ? [{ icon: Clock, label: dict.tour.durationLabel, value: pick(course.duration, lang) }] : []),
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-3 rounded-lg border border-line bg-white p-4">
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
                <div>
                  <dt className="text-sm text-muted">{label}</dt>
                  <dd className="font-semibold">{value}</dd>
                </div>
              </div>
            ))}
          </dl>

          <div className="mt-10">
            <CourseMap
              lang={lang}
              loop={!!course.loop}
              via={course.via ?? course.stops}
              stops={course.stops.map((s) => ({ id: s, name: pick(places[s].name, lang), at: places[s].at as [number, number] }))}
              piers={(course.starts ?? pierIds).map((pid) => ({ id: pid, name: pierName(pid), at: mapPiers[pid].at, km: geo[pid].km, line: geo[pid].line }))}
              text={dict.map}
            />
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-[1.4fr_1fr]">
            <section aria-labelledby="route">
              <h2 id="route" className="text-2xl">{dict.tour.route}</h2>
              <Stagger as="ol" className="ml-3.5 mt-6 border-l border-gold pl-6">
                {course.highlights[lang].map((s, i) => (
                  <StaggerItem as="li" key={s} className="relative pb-7 last:pb-0">
                    <span className="absolute -left-[2.4rem] flex h-7 w-7 items-center justify-center rounded-full border border-gold bg-background text-sm font-semibold text-accent">
                      {i + 1}
                    </span>
                    <p className="text-lg leading-snug">{s}</p>
                  </StaggerItem>
                ))}
              </Stagger>
            </section>
            <section aria-labelledby="included">
              <h2 id="included" className="text-2xl">{dict.tour.included}</h2>
              <ul className="mt-6 space-y-3">
                {included[lang].map((x) => (
                  <li key={x} className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold/60 text-accent">
                      <Check className="h-4 w-4" aria-hidden />
                    </span>
                    {x}
                  </li>
                ))}
              </ul>
              <BookTourButton tourId={course.options[0].id} className="btn btn-primary mt-7 w-full">
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
