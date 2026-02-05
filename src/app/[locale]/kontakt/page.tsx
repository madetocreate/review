import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function KontaktPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20" />
      <Contact />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
}
