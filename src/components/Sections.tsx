import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  Check,
  ExternalLink,
  ListChecks,
  MapPin,
  MessageCircle,
  Phone,
  Ship,
  Users,
} from "lucide-react";
import { BookTourButton } from "./BookingProvider";
import { Reveal, Stagger, StaggerItem } from "./Motion";
import { fleet } from "@/constants/data";
import { courses } from "@/constants/courses";
import { formatBaht } from "@/lib/booking";
import { boatBySize, contact, gallery, heroImage, phonesFor, pickups } from "@/constants/site";
import { pick, type Locale } from "@/lib/i18n";
import type { Dictionary } from "@/dictionaries/dictionaries";

type Props = { lang: Locale; dict: Dictionary };

function Heading({
  eyebrow,
  title,
  sub,
  center = false,
  gold = false,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  center?: boolean;
  gold?: boolean;
}) {
  return (
    <Reveal className={center ? "md:text-center" : ""}>
      <p className={`eyebrow ${gold ? "text-gold" : ""}`}>{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {sub && <p className="section-sub">{sub}</p>}
    </Reveal>
  );
}

export function Hero({ lang, dict }: Props) {
  const h = dict.hero;
  return (
    <section className="relative isolate overflow-hidden md:text-white">
      {/* Phones: whole photo above the text, so the boat and Buddha both show. Larger screens: full-bleed. */}
      <div className="relative aspect-video overflow-hidden md:absolute md:inset-0 md:-z-10 md:aspect-auto">
        <Image src={heroImage} alt="" fill priority sizes="100vw" className="ken-burns object-cover" />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-black/75 via-black/35 to-transparent md:block" />
        <div className="absolute inset-x-0 bottom-0 hidden h-1/3 bg-gradient-to-t from-black/50 to-transparent md:block" />
      </div>
      <Stagger
        onMount
        className="container-page flex flex-col justify-end pb-8 pt-7 md:min-h-[44rem] md:pb-14 md:pt-40"
      >
        <StaggerItem>
          <p className="eyebrow md:text-[#ecd9b0]">{h.eyebrow}</p>
        </StaggerItem>
        <StaggerItem>
          <h1 className="max-w-2xl text-[2rem] leading-tight sm:text-4xl md:text-5xl lg:text-[3.5rem]">{h.title}</h1>
        </StaggerItem>
        <StaggerItem>
          <p className="mt-4 max-w-xl text-base text-muted sm:text-lg md:text-white/90">{h.subtitle}</p>
        </StaggerItem>
        <StaggerItem className="mt-6 grid grid-cols-2 gap-3 sm:flex">
          <Link href={`/${lang}#tours`} className="btn btn-primary md:bg-white md:text-foreground md:hover:bg-[#f3ecdf]">
            {h.cta} <ArrowRight className="h-5 w-5" aria-hidden />
          </Link>
          <a href={contact.line.url} target="_blank" rel="noopener noreferrer" className="btn btn-line">
            <MessageCircle className="h-5 w-5" aria-hidden /> {h.cta2}
          </a>
        </StaggerItem>
        <StaggerItem>
          <ul className="mt-6 grid gap-1.5 text-sm sm:flex sm:flex-wrap sm:gap-x-6 md:text-white/95">
            {h.facts.map((f) => (
              <li key={f} className="flex items-center gap-2">
                <Check className="h-4 w-4 shrink-0 text-gold" aria-hidden /> {f}
              </li>
            ))}
          </ul>
        </StaggerItem>
      </Stagger>
    </section>
  );
}

export function Steps({ dict }: Props) {
  const icons = [ListChecks, CalendarCheck, MessageCircle];
  return (
    <section id="how" className="section">
      <div className="container-page">
        <Heading eyebrow={dict.steps.eyebrow} title={dict.steps.title} center />
        <Stagger as="ol" className="mt-8 grid gap-3 md:mt-12 md:grid-cols-3 md:gap-5">
          {dict.steps.items.map((s, i) => {
            const Icon = icons[i];
            return (
              <StaggerItem
                as="li"
                key={s.title}
                className="lift flex items-center gap-4 rounded-lg border border-line bg-white p-4 md:block md:p-7"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/60 text-accent">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <div>
                  <h3 className="text-lg font-semibold md:mt-5">
                    {i + 1}. {s.title}
                  </h3>
                  <p className="mt-0.5 text-muted">{s.desc}</p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

export function Tours({ lang, dict }: Props) {
  return (
    <section id="tours" className="section bg-white">
      <div className="container-page">
        <Heading eyebrow={dict.tours.eyebrow} title={dict.tours.title} sub={dict.tours.subtitle} />
        <Stagger className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {courses.map((t) => (
            <StaggerItem
              as="article"
              key={t.id}
              className={`lift flex flex-col overflow-hidden rounded-lg border border-line bg-background ${t.no === 0 ? "border-gold md:col-span-2 lg:col-span-6" : t.no >= 7 ? "lg:col-span-3" : "lg:col-span-2"}`}
            >
              <Link
                href={`/${lang}/tours/${t.id}`}
                className={`relative block aspect-[16/10] overflow-hidden ${t.no === 0 ? "md:aspect-[21/9] lg:aspect-[4/1]" : t.no >= 7 ? "lg:aspect-[16/9]" : ""}`}
              >
                <Image
                  src={t.image}
                  alt={pick(t.title, lang)}
                  fill
                  sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                  className="zoom object-cover"
                />
                <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded bg-white/95 px-2.5 py-1 text-sm font-medium text-foreground">
                  {t.tag ? pick(t.tag, lang) : `${dict.tours.route_no} ${t.no}`}
                </span>
              </Link>
              <div className="flex flex-1 flex-col p-5 md:p-6">
                <h3 className="text-lg font-semibold leading-snug">{pick(t.title, lang)}</h3>
                <p className="mt-1.5 line-clamp-2 text-muted">{pick(t.description, lang)}</p>
                <div className="mt-auto pt-4">
                  <p className="text-2xl font-semibold text-brand-dark">
                    {t.options.length > 1 && <span className="text-sm font-normal text-muted">{dict.tours.from} </span>}
                    {formatBaht(Math.min(...t.options.map((o) => o.price)))} <span className="text-sm font-normal text-muted">{t.unit ? pick(t.unit, lang) : dict.tours.perTrip}</span>
                  </p>
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <Link href={`/${lang}/tours/${t.id}`} className="btn btn-ghost !px-3 text-sm">
                      {dict.tours.route}
                    </Link>
                    <BookTourButton tourId={t.options[0].id} className="btn btn-primary !px-3 text-sm">
                      {dict.tours.book}
                    </BookTourButton>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export function Boats({ lang, dict }: Props) {
  // Smallest to largest, so group size is easy to scan.
  const order = boatBySize.map((b) => b.name.en);
  const boats = [...fleet].sort((a, b) => order.indexOf(a.name.en) - order.indexOf(b.name.en));
  return (
    <section id="boats" className="section">
      <div className="container-page">
        <Heading eyebrow={dict.boats.eyebrow} title={dict.boats.title} sub={dict.boats.subtitle} />
        <Stagger
          as="ul"
          className="no-scrollbar -mx-4 mt-9 flex snap-x gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 lg:grid-cols-5"
        >
          {boats.map((b) => (
            <StaggerItem
              as="li"
              key={b.name.en}
              className="lift w-60 shrink-0 snap-start overflow-hidden rounded-lg border border-line bg-white sm:w-auto"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={b.image} alt={pick(b.name, lang)} fill sizes="(min-width:1024px) 20vw, 240px" className="zoom object-cover" />
              </div>
              <div className="p-4">
                <p className="inline-flex items-center gap-1.5 font-semibold text-brand-dark">
                  <Users className="h-4 w-4 text-accent" aria-hidden /> {pick(b.capacity, lang)}
                </p>
                <h3 className="mt-0.5 text-sm text-muted">{pick(b.name, lang)}</h3>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export function Meeting({ lang, dict }: Props) {
  return (
    <section className="section bg-white">
      <div className="container-page">
        <Heading eyebrow={dict.meeting.eyebrow} title={dict.meeting.title} />
        <Stagger as="ul" className="mt-9 grid gap-4 md:grid-cols-3">
          {pickups
            .filter((p) => p.map)
            .map((p) => (
              <StaggerItem as="li" key={p.id} className="overflow-hidden rounded-lg border border-line bg-background">
                <iframe
                  src={p.embed}
                  title={`${dict.meeting.title}: ${pick(p.name, lang)}`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="aspect-[16/10] w-full border-0 bg-sand"
                />
                <div className="p-5">
                  <h3 className="flex items-center gap-2 font-semibold">
                    <MapPin className="h-5 w-5 shrink-0 text-accent" aria-hidden /> {pick(p.name, lang)}
                  </h3>
                  <p className="mt-1 text-muted">{pick(p.hint, lang)}</p>
                  <a
                    href={p.map}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost mt-3 w-full !min-h-11 text-sm"
                  >
                    {dict.meeting.map} <ExternalLink className="h-4 w-4" aria-hidden />
                  </a>
                </div>
              </StaggerItem>
            ))}
        </Stagger>
      </div>
    </section>
  );
}

export function Gallery({ dict }: Props) {
  return (
    <section className="section">
      <div className="container-page">
        <Heading eyebrow={dict.gallery.eyebrow} title={dict.gallery.title} />
        <Stagger as="ul" className="mt-9 grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3">
          {gallery.map((src) => (
            <StaggerItem as="li" key={src} className="lift relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image src={src} alt="" fill sizes="(min-width:768px) 33vw, 50vw" className="zoom object-cover" />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function QrCard({ src, label, caption }: { src: string; label: string; caption: string }) {
  return (
    <figure className="text-center">
      <div className="rounded-lg bg-white p-2">
        <Image src={src} alt={`${label} QR code`} width={160} height={160} className="h-36 w-36" />
      </div>
      <figcaption className="mt-2 text-sm text-white/85">{caption}</figcaption>
    </figure>
  );
}

export function Contact({ lang, dict }: Props) {
  return (
    <section id="contact" className="section bg-brand-dark text-white">
      <div className="container-page">
        <Heading eyebrow={dict.contact.eyebrow} title={dict.contact.title} gold />
        <Reveal className="mt-8 grid items-start gap-8 lg:grid-cols-[1fr_auto]">
          <div className="grid gap-3 sm:grid-cols-2">
            <a href={contact.line.url} target="_blank" rel="noopener noreferrer" className="btn btn-line">
              <MessageCircle className="h-5 w-5" aria-hidden /> {dict.contact.line}
            </a>
            <a href={contact.whatsapp.url} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              WhatsApp
            </a>
            {phonesFor(lang).map((p) => (
              <a key={p.href} href={p.href} className="btn btn-ghost">
                <Phone className="h-4 w-4" aria-hidden /> {p.label}
              </a>
            ))}
            {/* WeChat has no web link, so phones get the ID and QR here. */}
            <details className="rounded-md bg-white text-foreground sm:col-span-2 lg:hidden">
              <summary className="flex min-h-12 cursor-pointer list-none items-center justify-center px-5 font-medium">
                WeChat: {contact.wechat.id}
              </summary>
              <div className="flex justify-center pb-5">
                <Image src={contact.wechat.qr} alt="WeChat QR code" width={200} height={200} />
              </div>
            </details>
            <p className="hidden text-sm text-white/85 sm:col-span-2 lg:block">WeChat ID: {contact.wechat.id}</p>
          </div>
          <div className="hidden gap-4 lg:flex">
            <QrCard src={contact.line.qr} label="LINE" caption="LINE" />
            <QrCard src={contact.wechat.qr} label="WeChat" caption="WeChat" />
            <QrCard src={contact.whatsapp.qr} label="WhatsApp" caption="WhatsApp" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer({ dict }: Props) {
  return (
    <footer className="border-t border-line py-8 pb-24 text-center text-sm text-muted md:pb-8">
      <div className="container-page">
        <p className="flex items-center justify-center gap-2 font-semibold text-foreground">
          <Ship className="h-4 w-4 text-accent" aria-hidden /> Canal Tour
        </p>
        <p className="mt-1">{dict.footer.tagline}</p>
        <p className="mt-3">
          © {new Date().getFullYear()} Canal Tour. {dict.footer.rights}
        </p>
      </div>
    </footer>
  );
}
