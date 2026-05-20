import Hero from '@/components/Hero';
import TourGrid from '@/components/TourGrid';
import Fleet from '@/components/Fleet';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import MapSection from '@/components/MapSection';
import Navbar from '@/components/Navbar';
import Features from '@/components/Features';
import { getDictionary } from '@/dictionaries/dictionaries';

export default async function YachtStylePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as 'en' | 'th');

  return (
    <main className="min-h-screen bg-white">
      <Navbar lang={lang} dict={dict.common.nav} />
      <Hero dict={dict.home.hero} />
      <Features dict={dict.home.features} />
      <TourGrid lang={lang} />
      <Fleet lang={lang} />
      <Gallery />
      <MapSection />
      <Footer dict={dict.common.footer} />
    </main>
  );
}
