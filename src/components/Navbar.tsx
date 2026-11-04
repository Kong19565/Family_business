import Link from "next/link";
import { Anchor } from "lucide-react";
import LangSwitch from "./LangSwitch";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/dictionaries/dictionaries";

export default function Navbar({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const links = [
    { href: `/${lang}#tours`, label: dict.nav.tours },
    { href: `/${lang}#boats`, label: dict.nav.boats },
    { href: `/${lang}#how`, label: dict.nav.howto },
    { href: `/${lang}#contact`, label: dict.nav.contact },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-background/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-3">
        <Link href={`/${lang}`} className="flex min-h-11 items-center gap-2 text-lg font-bold">
          <Anchor className="h-5 w-5 text-brand" aria-hidden /> Canal Tour
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-7 text-sm font-medium md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="py-2 text-muted transition-colors hover:text-foreground">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <LangSwitch lang={lang} label={dict.lang.label} />
          {/* Every page has its own #book panel, so stay on this page and keep the chosen tour. */}
          <a href="#book" className="btn btn-primary hidden !min-h-10 !py-2 text-sm md:inline-flex">
            {dict.nav.book}
          </a>
        </div>
      </div>
    </header>
  );
}
