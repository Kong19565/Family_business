import { allDestinations, fleet } from "@/constants/data";
import { boatBySize, contact, pickups } from "@/constants/site";
import { pick, type Locale } from "./i18n";
import type { Dictionary } from "@/dictionaries/dictionaries";
import type { BookingPanelProps } from "@/components/BookingPanel";

/** Build the (language-specific) props for <BookingPanel> on the server. */
export function panelProps(lang: Locale, dict: Dictionary): BookingPanelProps {
  return {
    lang,
    tours: allDestinations.map((t) => ({
      id: t.id,
      title: pick(t.title, lang),
      duration: pick(t.duration, lang),
      price: t.price,
      image: t.image,
    })),
    pickups: pickups.map((p) => ({ id: p.id, name: pick(p.name, lang), hint: pick(p.hint, lang) })),
    boats: boatBySize.map((b) => ({
      max: b.max,
      name: pick(b.name, lang),
      image: fleet.find((f) => f.name.en === b.name.en)?.image ?? "",
    })),
    contact: {
      lineUrl: contact.line.url,
      whatsappUrl: contact.whatsapp.url,
      phoneHref: contact.phones[1].href,
    },
    text: dict.booking,
  };
}
