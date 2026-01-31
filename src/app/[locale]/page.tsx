import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import HowItWorks from '@/components/HowItWorks';
import Benefits from '@/components/Benefits';
import StickyShowcase from '@/components/StickyShowcase';
import Products from '@/components/Products';
import Comparison from '@/components/Comparison';
import MadeInGermany from '@/components/MadeInGermany';
import Testimonials from '@/components/Testimonials';
import SuccessStories from '@/components/SuccessStories';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SocialProof />
      <HowItWorks />
      <Benefits />
      <StickyShowcase />
      <Products />
      <Comparison />
      <MadeInGermany />
      <Testimonials />
      <SuccessStories />
      <FAQ />
      <CTASection />
      <Contact />
      <Footer />
    </main>
  );
}
