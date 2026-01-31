import Navbar from '@/components/Navbar';
import Shop from '@/components/Shop';
import FAQ from '@/components/FAQ';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function PreisePage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20" />
      <Shop />
      <Testimonials />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
}
