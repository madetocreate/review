import Navbar from '@/components/Navbar';
import Products from '@/components/Products';
import Benefits from '@/components/Benefits';
import Comparison from '@/components/Comparison';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function ProduktePage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20" />
      <Products />
      <Benefits />
      <Comparison />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  );
}
