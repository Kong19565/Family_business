import { fleet } from "@/constants/data";
import { courses } from "@/constants/courses";
import { boatBySize, contact, ownerPhone, pickups } from "@/constants/site";
import { pick, type Locale } from "./i18n";
import type { Dictionary } from "@/dictionaries/dictionaries";
import type { BookingPanelProps } from "@/components/BookingPanel";

/** Build the (language-specific) props for <BookingPanel> on the server. */
export function panelProps(lang: Locale, dict: Dictionary): BookingPanelProps {
  return {
    lang,
    // A course with several price options becomes one choice per option.
    tours: courses.flatMap((c) =>
      c.options.map((o) => ({
        id: o.id,
        title: `${c.no ? `${c.no}. ` : ""}${pick(c.title, lang)}${o.label ? ` (${pick(o.label, lang)})` : ""}`,
        summary: pick(c.summary, lang),
        price: o.price,
        image: c.image,
        fixedPickups: c.starts && (c.starts.length === 1 || c.lockStarts) ? c.starts : undefined,
        unit: c.unit ? pick(c.unit, lang) : undefined,
        departures: c.departures,
        included: c.pricing?.included,
        extra: c.pricing?.extra,
        max: c.pricing?.max,
        confirm: c.pricing ? pick(c.pricing.confirm, lang) : undefined,
      })),
    ),
    pickups: pickups.map((p) => ({ id: p.id, name: pick(p.name, lang), hint: pick(p.hint, lang), courseOnly: p.courseOnly, deposit: p.deposit })),
    boats: boatBySize.map((b) => ({
      max: b.max,
      name: pick(b.name, lang),
      image: fleet.find((f) => f.name.en === b.name.en)?.image ?? "",
    })),
    contact: {
      lineUrl: contact.line.url,
      whatsappUrl: contact.whatsapp.url,
      phoneHref: ownerPhone.href,
    },
    text: dict.booking,
  };
}
