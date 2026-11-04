import { notFound } from "next/navigation";
import { allDestinations } from "@/constants/data";
import { contact } from "@/constants/site";
import { getDictionary } from "@/dictionaries/dictionaries";
import { isLocale } from "@/lib/i18n";
import { panelProps } from "@/lib/panel";
import Navbar from "@/components/Navbar";
import BookingPanel from "@/components/BookingPanel";
import MobileBar from "@/components/MobileBar";
import { BookingProvider } from "@/components/BookingProvider";
import { Boats, Contact, Footer, Gallery, Hero, Meeting, Steps, Tours } from "@/components/Sections";

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const p = { lang, dict };

  return (
    <BookingProvider initialTourId={allDestinations[0].id}>
      <Navbar {...p} />
      <main>
        <Hero {...p} />
        <Steps {...p} />
        <Tours {...p} />
        <Boats {...p} />
        <BookingPanel {...panelProps(lang, dict)} />
        <Meeting {...p} />
        <Gallery {...p} />
        <Contact {...p} />
      </main>
      <Footer {...p} />
      <MobileBar bookLabel={dict.nav.book} lineUrl={contact.line.url} lineLabel={dict.hero.cta2} />
    </BookingProvider>
  );
}
