import Navbar from '@/components/Navbar';
import SuccessStories from '@/components/SuccessStories';
import Footer from '@/components/Footer';

export default function ErfolgePage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20" />
      <SuccessStories />
      <Footer />
    </main>
  );
}
