"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import { Calendar, Check, MapPin, Minus, Phone, Plus, Send, Ship, Users } from "lucide-react";
import { useBooking } from "./BookingProvider";
import { Reveal, Swap } from "./Motion";
import {
  buildMessage,
  clampGuests,
  formatBaht,
  formatDate,
  isFutureOrToday,
  todayIso,
  tripPrice,
  whatsappLink,
  type MessageLabels,
} from "@/lib/booking";
import { MAX_GUESTS } from "@/constants/site";
import type { Locale } from "@/lib/i18n";

export interface BookingPanelProps {
  lang: Locale;
  tours: { id: string; title: string; summary: string; price: number; image: string }[];
  pickups: { id: string; name: string; hint: string }[];
  boats: { max: number; name: string; image: string }[];
  contact: { lineUrl: string; whatsappUrl: string; phoneHref: string };
  text: {
    eyebrow: string;
    title: string;
    subtitle: string;
    tour: string;
    date: string;
    guests: string;
    pickup: string;
    name: string;
    namePlaceholder: string;
    summary: string;
    suggested: string;
    total: string;
    perTrip: string;
    confirm: string;
    line: string;
    lineHint: string;
    whatsapp: string;
    call: string;
    copied: string;
    copyFailed: string;
    pickDate: string;
    pickTour: string;
    tooMany: string;
    decrease: string;
    increase: string;
    message: MessageLabels;
  };
}

type Copy = { state: "copied" | "failed"; message: string } | null;

export default function BookingPanel({ lang, tours, pickups, boats, contact, text }: BookingPanelProps) {
  const { tourId, setTourId, pickupId, setPickupId } = useBooking();
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState(2);
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [copy, setCopy] = useState<Copy>(null);
  const dateRef = useRef<HTMLInputElement>(null);

  const tour = tours.find((t) => t.id === tourId);
  const pickup = pickups.find((p) => p.id === pickupId);
  const tooMany = guests > MAX_GUESTS;
  const guestsLabel = tooMany ? `${MAX_GUESTS}+` : String(guests);
  const boat = tooMany ? undefined : boats.find((b) => guests <= b.max);
  const dateLabel = date ? formatDate(date, lang) : "—";
  const priceLabel = tour && !tooMany ? formatBaht(tripPrice(tour.price, guests)) : "—";

  const message = useMemo(
    () =>
      buildMessage({
        labels: text.message,
        tour: tour?.title ?? "—",
        date: dateLabel,
        guests: guestsLabel,
        pickup: pickup?.name ?? "—",
        name,
        price: tour && !tooMany ? `${priceLabel} ${text.perTrip}` : "—",
        boat: boat?.name,
      }),
    [text.message, text.perTrip, tour, tooMany, priceLabel, dateLabel, guestsLabel, pickup, name, boat],
  );

  function validate(): boolean {
    if (!tour) {
      setError(text.pickTour);
      return false;
    }
    if (!isFutureOrToday(date)) {
      setError(text.pickDate);
      dateRef.current?.focus();
      return false;
    }
    setError("");
    return true;
  }

  function onLineClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (!validate()) {
      e.preventDefault();
      return;
    }
    // The link opens LINE by itself; copy the message while it does.
    navigator.clipboard
      .writeText(message)
      .then(() => setCopy({ state: "copied", message }))
      .catch(() => setCopy({ state: "failed", message }));
  }

  // Only show the copy result while it still matches what is on screen.
  const copyResult = copy?.message === message ? copy.state : null;
  const dateInvalid = error === text.pickDate;

  return (
    <section id="book" className="section bg-mist">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow">{text.eyebrow}</p>
          <h2 className="section-title">{text.title}</h2>
          <p className="section-sub">{text.subtitle}</p>
        </Reveal>

        <div className="mt-9 grid items-start gap-5 lg:grid-cols-[1.25fr_1fr] lg:gap-8">
          {/* Form */}
          <div className="space-y-7 rounded-lg border border-line bg-white p-5 sm:p-7">
            <fieldset>
              <legend className="mb-3 flex items-center gap-2 font-semibold">
                <Ship className="h-5 w-5 text-brand" aria-hidden /> {text.tour}
              </legend>
              <div className="grid gap-2">
                {tours.map((t) => (
                  <label
                    key={t.id}
                    className={`flex cursor-pointer items-center justify-between gap-3 rounded-md border p-3 transition-colors focus-within:outline-2 focus-within:outline-accent ${
                      t.id === tourId ? "border-brand bg-brand/5 ring-1 ring-brand" : "border-line hover:bg-sand/50"
                    }`}
                  >
                    <span className="flex min-w-0 items-center gap-3">
                      <input
                        type="radio"
                        name="tour"
                        value={t.id}
                        checked={t.id === tourId}
                        onChange={() => setTourId(t.id)}
                        className="h-4 w-4 shrink-0 accent-brand"
                      />
                      <span className="min-w-0">
                        <span className="block font-medium leading-snug">{t.title}</span>
                        <span className="text-sm text-muted">{t.summary}</span>
                      </span>
                    </span>
                    <span className="whitespace-nowrap font-semibold text-brand-dark">{formatBaht(t.price)}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="grid gap-7 sm:grid-cols-2">
              <div>
                <label htmlFor="date" className="mb-3 flex items-center gap-2 font-semibold">
                  <Calendar className="h-5 w-5 text-brand" aria-hidden /> {text.date}
                </label>
                <input
                  id="date"
                  ref={dateRef}
                  type="date"
                  value={date}
                  aria-invalid={dateInvalid}
                  aria-describedby={dateInvalid ? "date-error" : undefined}
                  onFocus={(e) => {
                    e.currentTarget.min = todayIso();
                  }}
                  onChange={(e) => {
                    setDate(e.target.value);
                    setError("");
                  }}
                  className={`h-12 w-full min-w-0 rounded-md border bg-white px-4 text-base ${
                    dateInvalid ? "border-red-600 ring-1 ring-red-600" : "border-line"
                  }`}
                />
                {dateInvalid && (
                  <p id="date-error" role="alert" className="mt-2 text-sm font-medium text-red-700">
                    {error}
                  </p>
                )}
              </div>

              <div>
                <div className="mb-3 flex items-center gap-2 font-semibold">
                  <Users className="h-5 w-5 text-brand" aria-hidden /> {text.guests}
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    aria-label={text.decrease}
                    disabled={guests <= 1}
                    onClick={() => setGuests((g) => clampGuests(g - 1))}
                    className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-line bg-white hover:bg-sand disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <Minus className="h-5 w-5" aria-hidden />
                  </button>
                  <output aria-live="polite" className="w-12 text-center text-2xl font-bold tabular-nums">
                    {guestsLabel}
                  </output>
                  <button
                    type="button"
                    aria-label={text.increase}
                    disabled={tooMany}
                    onClick={() => setGuests((g) => clampGuests(g + 1))}
                    className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-line bg-white hover:bg-sand disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <Plus className="h-5 w-5" aria-hidden />
                  </button>
                </div>
              </div>
            </div>

            <fieldset>
              <legend className="mb-3 flex items-center gap-2 font-semibold">
                <MapPin className="h-5 w-5 text-brand" aria-hidden /> {text.pickup}
              </legend>
              <div className="flex flex-wrap gap-2">
                {pickups.map((p) => (
                  <label
                    key={p.id}
                    className={`flex min-h-11 cursor-pointer items-center rounded-full border px-4 text-sm font-medium transition-colors focus-within:outline-2 focus-within:outline-accent ${
                      p.id === pickupId ? "border-brand bg-brand text-white" : "border-line bg-white hover:bg-sand"
                    }`}
                  >
                    <input
                      type="radio"
                      name="pickup"
                      value={p.id}
                      checked={p.id === pickupId}
                      onChange={() => setPickupId(p.id)}
                      className="sr-only"
                    />
                    {p.name}
                  </label>
                ))}
              </div>
              {pickup && <p className="mt-2 text-sm text-muted">{pickup.hint}</p>}
            </fieldset>

            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-muted">
                {text.name}
              </label>
              <input
                id="name"
                type="text"
                autoComplete="given-name"
                value={name}
                maxLength={60}
                placeholder={text.namePlaceholder}
                onChange={(e) => setName(e.target.value)}
                className="h-12 w-full rounded-md border border-line bg-white px-4 text-base"
              />
            </div>
          </div>

          {/* Summary + send */}
          <aside className="overflow-hidden rounded-lg border border-line bg-white lg:sticky lg:top-20">
            {tour && (
              <div className="relative aspect-[16/7] overflow-hidden">
                <Swap swapKey={tour.id} className="absolute inset-0">
                  <Image src={tour.image} alt="" fill sizes="(min-width:1024px) 440px, 100vw" className="object-cover" />
                </Swap>
              </div>
            )}
            <div className="p-5 sm:p-6">
              <p className="text-sm font-medium text-muted">{text.summary}</p>
              <h3 className="mt-1 text-lg font-semibold leading-snug">{tour?.title ?? "—"}</h3>

              <dl className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-muted">{text.message.date}</dt>
                  <dd className="text-right font-medium">{dateLabel}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted">{text.message.guests}</dt>
                  <dd className="text-right font-medium">{guestsLabel}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted">{text.message.pickup}</dt>
                  <dd className="text-right font-medium">{pickup?.name}</dd>
                </div>
              </dl>

              {boat ? (
                <div aria-live="polite" className="mt-4 flex items-center gap-3 rounded-md bg-sand/60 p-2.5">
                  <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded">
                    <Swap swapKey={boat.name} className="absolute inset-0">
                      <Image src={boat.image} alt="" fill sizes="80px" className="object-cover" />
                    </Swap>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted">{text.suggested}</p>
                    <Swap swapKey={boat.name}>
                      <p className="font-semibold leading-snug">{boat.name}</p>
                    </Swap>
                  </div>
                </div>
              ) : (
                <p aria-live="polite" className="mt-4 rounded-md bg-sand/60 p-3 text-sm font-medium text-accent">
                  {text.tooMany}
                </p>
              )}

              <div className="mt-4 flex items-baseline justify-between border-t border-line pt-4">
                <span className="text-sm text-muted">{text.total}</span>
                <Swap swapKey={`${tour?.id}-${priceLabel}`} className="text-2xl font-semibold text-brand-dark">
                  {priceLabel} <span className="text-sm font-normal text-muted">{text.perTrip}</span>
                </Swap>
              </div>
              <p className="mt-1 text-sm text-muted">{text.confirm}</p>

              {error && !dateInvalid && (
                <p role="alert" className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
                  {error}
                </p>
              )}

              <div className="mt-5 grid gap-3">
                <a
                  href={contact.lineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onLineClick}
                  className="btn btn-line w-full"
                >
                  <Send className="h-5 w-5" aria-hidden /> {text.line}
                </a>
                <p className="-mt-1 text-center text-sm text-muted">{text.lineHint}</p>

                {copyResult && (
                  <p
                    role="status"
                    className={`flex items-center justify-center gap-2 text-sm font-medium ${
                      copyResult === "copied" ? "text-brand-dark" : "text-accent"
                    }`}
                  >
                    {copyResult === "copied" && <Check className="h-4 w-4" aria-hidden />}
                    {copyResult === "copied" ? text.copied : text.copyFailed}
                  </p>
                )}
                {copyResult === "failed" && (
                  <pre className="select-all whitespace-pre-wrap rounded-xl bg-sand/60 p-3 font-sans text-sm">
                    {message}
                  </pre>
                )}

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={whatsappLink(contact.whatsappUrl, message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (!validate()) e.preventDefault();
                    }}
                    className="btn btn-ghost"
                  >
                    {text.whatsapp}
                  </a>
                  <a href={contact.phoneHref} className="btn btn-ghost">
                    <Phone className="h-4 w-4" aria-hidden /> {text.call}
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
