"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { switchLocalePath, type Locale } from "@/lib/i18n";

const options: { code: Locale; label: string; full: string }[] = [
  { code: "en", label: "EN", full: "English" },
  { code: "th", label: "ไทย", full: "ภาษาไทย" },
];

export default function LangSwitch({ lang, label }: { lang: Locale; label: string }) {
  const pathname = usePathname() ?? `/${lang}`;
  return (
    <div role="group" aria-label={label} className="flex rounded-full border border-line bg-white p-0.5 text-sm font-semibold">
      {options.map((o) => (
        <Link
          key={o.code}
          href={switchLocalePath(pathname, o.code)}
          hrefLang={o.code}
          lang={o.code}
          aria-label={o.full}
          aria-current={o.code === lang ? "true" : undefined}
          className={`flex min-h-10 min-w-11 items-center justify-center rounded-full px-3 transition-colors ${
            o.code === lang ? "bg-foreground text-white" : "text-muted hover:text-foreground"
          }`}
        >
          {o.label}
        </Link>
      ))}
    </div>
  );
}
