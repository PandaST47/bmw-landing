import React, { useRef, useState, useEffect } from 'react';
import { ChevronDown, Play, Calendar, DollarSign, Zap, Star, ArrowRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef(null);

  // Image paths (ensure these exist in public/images)
  const heroImages = [
    '/images/bmw-m4-hero-2.jpg',
    '/images/bmw-m4-hero.jpg',
    '/images/bmw-m4-hero-3.jpg',
  ];

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  // Smooth mouse movement with debouncing (disabled on mobile)
  useEffect(() => {
    if (isMobile) return;
    
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
        }, 16);
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
  }, [isMobile]);

  const scrollToNext = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section 
      ref={heroRef}
      className="relative h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-800 to-black"
    >
      {/* Dynamic Background with Parallax */}
      <div className="absolute inset-0 w-full h-full">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: isMobile ? 'center center' : 'center',
              backgroundRepeat: 'no-repeat',
              transform: isMobile ? 'none' : `scale(${1 + mousePosition.x * 0.015}) translate(${mousePosition.x * 8}px, ${mousePosition.y * 4}px)`,
              transition: isMobile ? 'opacity 1s ease-in-out' : 'transform 0.5s ease-out, opacity 1s ease-in-out, scale 1s ease-in-out',
            }}
          >
            {/* Enhanced Gradient Overlay for better readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-800/80 via-blue-900/60 to-black/80 md:from-blue-700/70 md:via-blue-800/40 md:to-black/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent md:from-black/80 md:via-transparent md:to-transparent" />
          </div>
        ))}
      </div>

      {/* Animated Grid Background - Hidden on mobile for performance */}
      {!isMobile && (
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
            }}
          />
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 w-full">
          <div className="max-w-6xl mx-auto md:mx-0">
            {/* Floating Badge */}
            <div className="flex justify-center md:justify-start">
              <div className="inline-flex items-center gap-2 px-3 py-2 mb-2 md:mb-2 rounded-full bg-gradient-to-r from-orange-500/20 to-orange-600/40 border border-orange-500/30 backdrop-blur-sm">
                <Star className="w-3 h-3 md:w-4 md:h-4 text-orange-500" />
                <span className="text-orange-500 text-xs md:text-sm font-medium">Официальный дилер BMW</span>
              </div>
            </div>

            {/* Main Heading with Gradient Text - Adaptive sizing */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-4 md:mb-6 leading-none text-center md:text-left">
              <span 
                className="block bg-gradient-to-r from-white via-blue-400 to-white bg-clip-text text-transparent"
                style={{
                  textShadow: '0 0 40px rgba(255,255,255,0.3)',
                  transform: isMobile ? 'none' : `translateX(${mousePosition.x * 4}px)`,
                  transition: isMobile ? 'none' : 'transform 0.3s ease-out',
                }}
              >
                BMW M4
              </span>
              <span 
                className="block bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-6xl mt-1 md:mt-2"
                style={{
                  filter: 'drop-shadow(0 0 20px rgba(255, 107, 53, 0.5))',
                  transform: isMobile ? 'none' : `translateX(${-mousePosition.x * 2}px)`,
                  transition: isMobile ? 'none' : 'transform 0.3s ease-out',
                }}
              >
                Competition
              </span>
            </h1>

            {/* Subtitle with Glow Effect - Responsive text */}
            <div className="text-center md:text-left mb-6 md:mb-8 max-w-3xl mx-auto md:mx-0">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed font-light">
                <span className="text-white font-semibold">Твоя следующая легенда</span> начинается здесь
              </p>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-orange-500 mt-2">
                Полный спектр услуг и гарантия качества
              </p>
            </div>

            {/* Enhanced Stats with Neon Effect - Mobile friendly grid */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 mb-6 md:mb-10 max-w-lg md:max-w-2xl mx-auto md:mx-0">
              {[
                { value: '510', label: 'л.с.', icon: Zap },
                { value: '3.9', label: 'сек 0-100', icon: Play },
                { value: '250', label: 'км/ч макс', icon: ArrowRight },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="group relative p-3 sm:p-4 md:p-6 rounded-xl md:rounded-2xl bg-gradient-to-br from-blue-800/20 to-blue-900/20 border border-blue-600/30 backdrop-blur-lg hover:border-orange-500/50 transition-all duration-500"
                  style={{
                    boxShadow: '0 4px 16px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/10 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <stat.icon className="w-4 h-4 md:w-6 md:h-6 text-orange-500 mb-2 md:mb-3 mx-auto md:mx-0" />
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 text-center md:text-left">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-gray-400 text-center md:text-left">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Revolutionary CTA Buttons - Stack on mobile, inline on desktop */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 px-4 md:px-0">
              {/* Primary CTA with Holographic Effect */}
              <button className="group relative w-full md:w-72 px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl overflow-hidden bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold text-base md:text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/80 to-red-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                <div className="relative flex items-center justify-center space-x-2 md:space-x-3">
                  <Calendar className="w-5 h-5 md:w-6 md:h-6" />
                  <a href="#test-drive">Записаться на <br />тест-драйв</a>
                </div>
              </button>

              {/* Secondary CTA with Glass Morphism */}
              <button className="group relative w-full md:w-64 px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl overflow-hidden backdrop-blur-lg bg-white/10 border-2 border-white/30 text-white font-bold text-base md:text-lg transition-all duration-500 hover:scale-105 hover:bg-white/20 hover:border-blue-500/40">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-blue-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex items-center justify-center space-x-2 md:space-x-3">
                  <DollarSign className="w-5 h-5 md:w-6 md:h-6 group-hover:text-orange-500 transition-colors" />
                  <a href="#featured-car">Узнать цену M4</a>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Slide Indicators - Adjusted for mobile */}
      <div className="absolute bottom-16 md:bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-4 z-30">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`relative w-8 md:w-12 h-1.5 md:h-2 rounded-full transition-all duration-500 ${
              index === currentSlide 
                ? 'bg-gradient-to-r from-orange-500 to-red-600 shadow-lg shadow-orange-500/50' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
          >
            {index === currentSlide && (
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 rounded-full animate-pulse" />
            )}
          </button>
        ))}
      </div>

      {/* Floating Scroll Indicator - Hidden on mobile */}
      {!isMobile && (
        <div
          className="absolute bottom-8 right-8 cursor-pointer z-30 group"
          onClick={scrollToNext}
        >
          <div className="relative p-4 rounded-full bg-gradient-to-br from-blue-800/20 to-blue-900/20 border border-white/20 backdrop-blur-sm hover:border-orange-500/50 transition-all duration-500 group-hover:scale-110">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-600/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <ChevronDown className="w-6 h-6 text-white group-hover:text-orange-500 transition-colors animate-bounce" />
          </div>
        </div>
      )}

      {/* Ambient Light Effects - Desktop only */}
      {!isMobile && (
        <div className="absolute inset-0 pointer-events-none z-15">
          <div 
            className="absolute w-96 h-96 rounded-full opacity-15"
            style={{
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
              left: `${mousePosition.x * 100}%`,
              top: `${mousePosition.y * 100}%`,
              transform: 'translate(-50%, -50%)',
              transition: 'all 0.4s ease-out',
            }}
          />
        </div>
      )}

      <style jsx>{`
        @keyframes gridMove {
          0% { background-position: 0 0; }
          100% { background-position: 50px 50px; }
        }
        
        @media (max-width: 768px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;