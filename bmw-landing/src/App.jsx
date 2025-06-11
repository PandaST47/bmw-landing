import React, { useEffect } from 'react';
import AOS from 'aos';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedCar from './components/FeaturedCar';
import ModelsShowcase from './components/ModelsShowcase';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <FeaturedCar />
        <ModelsShowcase />
        <Services />
        <Testimonials />
        <Contact />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;