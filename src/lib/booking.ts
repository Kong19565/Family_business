import { boatBySize, DEPOSIT_RATE, EXTRA_GUEST_PRICE, INCLUDED_GUESTS, MAX_GUESTS } from "@/constants/site";
import type { Bilingual, Locale } from "./i18n";

/** Smallest boat that fits the group, or null when the group is too big. */
export function suggestBoat(guests: number): Bilingual | null {
  if (guests > MAX_GUESTS) return null;
  return boatBySize.find((b) => guests <= b.max)?.name ?? null;
}

export function clampGuests(n: number, max = MAX_GUESTS): number {
  if (!Number.isFinite(n)) return 2;
  return Math.max(1, Math.min(max + 1, Math.round(n)));
}

/** Per-boat price: the base covers the first guests, then a fee per extra guest. */
export function tripPrice(base: number, guests: number, included = INCLUDED_GUESTS, extra = EXTRA_GUEST_PRICE): number {
  return base + Math.max(0, guests - included) * extra;
}

export function depositAmount(total: number): number {
  return Math.round(total * DEPOSIT_RATE);
}

export function formatBaht(amount: number): string {
  return `฿${amount.toLocaleString("en-US")}`;
}

/** Local calendar date as YYYY-MM-DD. */
export function todayIso(now = new Date()): string {
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
}

/** True if `isoDate` (YYYY-MM-DD) is today or later, comparing calendar days only. */
export function isFutureOrToday(isoDate: string, now = new Date()): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(isoDate)) return false;
  return isoDate >= todayIso(now);
}

/** Human date: "Sat, 5 Dec 2026" / "ส. 5 ธ.ค. 2569". */
export function formatDate(isoDate: string, lang: Locale): string {
  const [y, m, d] = isoDate.split("-").map(Number);
  if (!y || !m || !d) return "";
  return new Intl.DateTimeFormat(lang === "th" ? "th-TH" : "en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(y, m - 1, d));
}

export interface MessageLabels {
  hello: string;
  tour: string;
  date: string;
  guests: string;
  pickup: string;
  name: string;
  price: string;
  deposit: string;
  departure: string;
}

export interface MessageInput {
  labels: MessageLabels;
  tour: string;
  date: string;
  guests: number | string;
  pickup: string;
  name?: string;
  price: string;
  boat?: string;
  deposit?: string;
  departure?: string;
}

/** Plain-text message that the customer sends on LINE / WhatsApp. */
export function buildMessage(input: MessageInput): string {
  const { labels: l } = input;
  const lines = [
    l.hello,
    `• ${l.tour}: ${input.tour}`,
    `• ${l.date}: ${input.date}`,
    ...(input.departure ? [`• ${l.departure}: ${input.departure}`] : []),
    `• ${l.guests}: ${input.guests}${input.boat ? ` (${input.boat})` : ""}`,
    `• ${l.pickup}: ${input.pickup}`,
    `• ${l.price}: ${input.price}`,
  ];
  if (input.deposit) lines.push(`• ${l.deposit}: ${input.deposit}`);
  if (input.name?.trim()) lines.push(`• ${l.name}: ${input.name.trim()}`);
  return lines.join("\n");
}

export function whatsappLink(base: string, message: string): string {
  return `${base}?text=${encodeURIComponent(message)}`;
}
