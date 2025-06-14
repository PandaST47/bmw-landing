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
        {/* Единый блок с общим фоном для About и FeaturedCar */}
        <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden"> 
          {/* Общий анимированный фон для обоих секций */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-blue-900/60 to-black/80"></div>
            
            {/* Плавные переходы градиентов */}
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                background: `
                  radial-gradient(circle at 20% 25%, #0066CC 0%, transparent 50%),
                  radial-gradient(circle at 80% 25%, #0066CC 0%, transparent 50%),
                  radial-gradient(circle at 40% 50%, #0066CC 0%, transparent 50%),
                  radial-gradient(circle at 60% 75%, #0066CC 0%, transparent 50%)
                `
              }}
            />
            
            {/* Единые плавающие частицы для обеих секций */}
            {[...Array(40)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full animate-pulse"
                style={{
                  width: `${Math.random() * 4 + 1}px`,
                  height: `${Math.random() * 4 + 1}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: i % 3 === 0 ? '#60A5FA' : i % 3 === 1 ? '#34D399' : '#F59E0B',
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              />
            ))}

            {/* Большие плавающие элементы */}
            {[...Array(8)].map((_, i) => (
              <div
                key={`large-${i}`}
                className="absolute rounded-full blur-xl opacity-5 animate-pulse"
                style={{
                  width: `${Math.random() * 300 + 100}px`,
                  height: `${Math.random() * 300 + 100}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: `linear-gradient(45deg, #0066CC, #00A8FF)`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${8 + Math.random() * 4}s`
                }}
              />
            ))}
          </div>

          {/* Секции без собственного фона */}
          <div className="relative z-10">
            <About />
            <FeaturedCar />
            <ModelsShowcase />
            <Services />
            <Testimonials />
            <Contact />
            <CTASection />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;