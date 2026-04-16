import Hero from '@/app/components/Hero';
import TourGrid from '@/app/components/TourGrid';
import Fleet from '@/app/components/Fleet';
import Gallery from '@/app/components/Gallery';
import Footer from '@/app/components/Footer';

export default function YachtStylePage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <TourGrid />
      <Fleet />
      <Gallery />
      <Footer />
    </main>
  );
}