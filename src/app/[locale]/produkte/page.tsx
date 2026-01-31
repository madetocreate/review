import Navbar from '@/components/Navbar';
import Products from '@/components/Products';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function ProduktePage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20" />
      <Products />
      <CTASection />
      <Footer />
    </main>
  );
}
