import Hero from '@/components/Hero';
import TourGrid from '@/components/TourGrid';
import Fleet from '@/components/Fleet';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import MapSection from '@/components/MapSection';
import Navbar from '@/components/Navbar';
import Features from '@/components/Features';

export default function YachtStylePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <TourGrid />
      <Fleet />
      <Gallery />
      <MapSection />
      <Footer />
    </main>
  );
}
