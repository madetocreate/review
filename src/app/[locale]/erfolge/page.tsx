import Navbar from '@/components/Navbar';
import SuccessStories from '@/components/SuccessStories';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function ErfolgePage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20" />
      <SuccessStories />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  );
}
