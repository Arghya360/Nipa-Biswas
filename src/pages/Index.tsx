import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BrandMarquee from '@/components/BrandMarquee';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Services from '@/components/Services';
import WorkProcess from '@/components/WorkProcess';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className='min-h-screen bg-background'>
      <Header />
      <main>
        <Hero />
        <BrandMarquee />
        <About />
        <Skills />
        <Services />
        <WorkProcess />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
