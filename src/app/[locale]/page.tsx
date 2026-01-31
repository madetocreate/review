import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Benefits from '@/components/Benefits';
import StickyShowcase from '@/components/StickyShowcase';
import Products from '@/components/Products';
import Shop from '@/components/Shop';
import SuccessStories from '@/components/SuccessStories';
import CTASection from '@/components/CTASection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Benefits />
      <StickyShowcase />
      <Products />
      <Shop />
      <SuccessStories />
      <CTASection />
      <Contact />
      <Footer />
    </main>
  );
}
