import React, { useRef, useState, useEffect } from 'react';
import { ChevronDown, Play, Calendar, DollarSign, Zap, Star, ArrowRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  // Image paths (ensure these exist in public/images)
  const heroImages = [
    '/images/bmw-m4-hero.jpg',
    '/images/bmw-m4-hero-2.jpg',
    '/images/bmw-m4-hero-3.jpg',
  ];

  // Image preloading to prevent loading delays
  useEffect(() => {
    heroImages.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, []);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Smooth mouse movement with debouncing
  useEffect(() => {
    let timeoutId;
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          const rect = heroRef.current.getBoundingClientRect();
          setMousePosition({
            x: (e.clientX - rect.left) / rect.width,
            y: (e.clientY - rect.top) / rect.height,
          });
        }, 16); // ~60fps debouncing
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      return () => {
        heroElement.removeEventListener('mousemove', handleMouseMove);
        clearTimeout(timeoutId);
      };
    }
  }, []);

  const scrollToNext = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section 
      ref={heroRef}
      className="relative h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-[#0066CC] to-black"
    >
      {/* Dynamic Background with Parallax */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: `scale(${1 + mousePosition.x * 0.015}) translate(${mousePosition.x * 8}px, ${mousePosition.y * 4}px)`,
              transition: 'transform 0.5s ease-out, opacity 1s ease-in-out, scale 1s ease-in-out',
            }}
          >
            {/* Gradient Overlay with BMW Blue */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0066CC]/70 via-[#004080]/40 to-black/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </div>
        ))}
      </div>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 30s linear infinite',
            transition: 'background-position 0.5s ease-out',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl">
            {/* Floating Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-[#FF6B35]/20 to-[#FF6B35]/40 border border-[#FF6B35]/30 backdrop-blur-sm animate-pulse">
              <Star className="w-4 h-4 text-[#FF6B35]" />
              <span className="text-[#FF6B35] text-sm font-medium">Официальный дилер BMW</span>
            </div>

            {/* Main Heading with Gradient Text */}
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black mb-6 leading-none">
              <span 
                className="block bg-gradient-to-r from-white via-[#0066CC] to-white bg-clip-text text-transparent"
                style={{
                  textShadow: '0 0 40px rgba(255,255,255,0.3)',
                  transform: `translateX(${mousePosition.x * 4}px)`,
                  transition: 'transform 0.3s ease-out',
                }}
              >
                BMW M4
              </span>
              <span 
                className="block bg-gradient-to-r from-[#FF6B35] via-[#FF6B35] to-[#FF6B35] bg-clip-text text-transparent text-4xl sm:text-5xl lg:text-6xl mt-2"
                style={{
                  filter: 'drop-shadow(0 0 20px rgba(255, 107, 53, 0.5))',
                  transform: `translateX(${-mousePosition.x * 2}px)`,
                  transition: 'transform 0.3s ease-out',
                }}
              >
                Competition
              </span>
            </h1>

            {/* Subtitle with Glow Effect */}
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-3xl leading-relaxed font-light">
              <span className="text-white font-semibold">Твоя следующая легенда</span> начинается здесь
              <br />
              <span className="text-[#FF6B35]">Полный спектр услуг и гарантия качества</span>
            </p>

            {/* Enhanced Stats with Neon Effect */}
            <div className="grid grid-cols-3 gap-6 mb-10 max-w-2xl">
              {[
                { value: '510', label: 'л.с.', icon: Zap },
                { value: '3.9', label: 'сек 0-100', icon: Play },
                { value: '250', label: 'км/ч макс', icon: ArrowRight },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="group relative p-6 rounded-2xl bg-gradient-to-br from-[#0066CC]/10 to-[#004080]/10 border border-[#0066CC]/20 backdrop-blur-lg hover:border-[#FF6B35]/50 transition-all duration-500 cursor-pointer"
                  style={{
                    boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
                    transform: `translateY(${idx * 2}px)`,
                    transition: 'transform 0.3s ease-out, border 0.5s ease-out',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/5 to-[#FF6B35]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <stat.icon className="w-6 h-6 text-[#FF6B35] mb-3 group-hover:text-[#FF6B35]/80 transition-colors" />
                  <div className="text-3xl sm:text-4xl font-bold text-white mb-1 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Revolutionary CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              {/* Primary CTA with Holographic Effect */}
              <button className="group relative px-8 py-4 rounded-2xl overflow-hidden bg-gradient-to-r from-[#FF6B35] to-[#FF4500] text-white font-bold text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/80 to-[#FF4500]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                <div className="relative flex items-center justify-center space-x-3">
                  <Calendar className="w-6 h-6" />
                  <span>Записаться на тест-драйв</span>
                </div>
                <div className="absolute inset-0 rounded-2xl ring-2 ring-[#FF6B35]/50 ring-offset-2 ring-offset-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </button>

              {/* Secondary CTA with Glass Morphism */}
              <button className="group relative px-8 py-4 rounded-2xl overflow-hidden backdrop-blur-lg bg-white/5 border-2 border-white/20 text-white font-bold text-lg transition-all duration-500 hover:scale-105 hover:bg-white/10 hover:border-[#0066CC]/40">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0066CC]/10 to-[#004080]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex items-center justify-center space-x-3">
                  <DollarSign className="w-6 h-6 group-hover:text-[#FF6B35] transition-colors" />
                  <span>Узнать цену M4</span>
                </div>
                <div className="absolute inset-0 rounded-2xl ring-2 ring-[#0066CC]/30 ring-offset-2 ring-offset-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Slide Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-4 z-30">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`relative w-12 h-2 rounded-full transition-all duration-500 ${
              index === currentSlide 
                ? 'bg-gradient-to-r from-[#FF6B35] to-[#FF4500] shadow-lg shadow-[#FF6B35]/50' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
          >
            {index === currentSlide && (
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35] to-[#FF4500] rounded-full animate-pulse" />
            )}
          </button>
        ))}
      </div>

      {/* Floating Scroll Indicator */}
      <div
        className="absolute bottom-8 right-8 cursor-pointer z-30 group"
        onClick={scrollToNext}
      >
        <div className="relative p-4 rounded-full bg-gradient-to-br from-[#0066CC]/20 to-[#004080]/20 border border-white/20 backdrop-blur-lg hover:border-[#FF6B35]/50 transition-all duration-500 group-hover:scale-110">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/10 to-[#FF4500]/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <ChevronDown className="w-6 h-6 text-white group-hover:text-[#FF6B35] transition-colors animate-bounce" />
        </div>
      </div>

      {/* Ambient Light Effects */}
      <div className="absolute inset-0 pointer-events-none z-15">
        <div 
          className="absolute w-96 h-96 rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(0, 102, 204, 0.3) 0%, transparent 70%)',
            left: `${mousePosition.x * 100}%`,
            top: `${mousePosition.y * 100}%`,
            transform: 'translate(-50%, -50%)',
            transition: 'all 0.4s ease-out',
          }}
        />
      </div>

      <style jsx>{`
        @keyframes gridMove {
          0% { background-position: 0 0; }
          100% { background-position: 50px 50px; }
        }
      `}</style>
    </section>
  );
};

export default Hero;