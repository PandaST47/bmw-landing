import React, { useState, useEffect, useRef } from 'react';
import { Phone, Menu, X, ChevronDown, Zap, Star, MapPin } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeNav, setActiveNav] = useState('');
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Функция скролла наверх при клике на логотип
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Mouse tracking для интерактивных эффектов
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (headerRef.current) {
        const rect = headerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    const headerElement = headerRef.current;
    if (headerElement) {
      headerElement.addEventListener('mousemove', handleMouseMove);
      return () => headerElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const navItems = [
    { name: 'Модели', href: '#models', icon: Zap },
    { name: 'Сервис', href: '#services', icon: Star },
    { name: 'Контакты', href: '#contact', icon: MapPin },
    { name: 'Тест-драйв', href: '#test-drive', icon: ChevronDown },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
          isScrolled
            ? 'bg-slate-900/95 backdrop-blur-2xl border-b border-slate-700/50 shadow-2xl shadow-slate-900/50'
            : 'bg-gradient-to-b from-black/60 via-black/30 to-transparent backdrop-blur-sm'
        }`}
      >
        {/* Ambient Light Effect */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none transition-all duration-500"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(59, 130, 246, 0.2) 0%, transparent 70%)`,
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 relative">
          <div className="flex items-center justify-between">
            {/* Логотип с функцией скролла наверх */}
            <div 
              className="flex items-center space-x-3 sm:space-x-4 group cursor-pointer"
              onClick={scrollToTop}
            >
              <div className="relative">
                {/* Rotating Ring */}
                <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-500 via-orange-500 to-blue-500 opacity-0 group-hover:opacity-100 animate-spin transition-opacity duration-500" style={{ animationDuration: '3s' }} />
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500/50 to-orange-500/50 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Main Logo */}
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-600 via-blue-800 to-blue-600 rounded-full flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                  <span className="text-white font-black text-sm sm:text-lg tracking-wider relative z-10 group-hover:text-orange-400 transition-colors duration-300">BMW</span>
                  
                  {/* Pulse Effect */}
                  <div className="absolute inset-0 rounded-full bg-orange-500/30 scale-0 group-hover:scale-110 opacity-0 group-hover:opacity-100 transition-all duration-700" />
                </div>
              </div>
              
              <div className="hidden sm:block">
                <h2 className={`font-bold text-lg sm:text-xl tracking-wide transition-all duration-300 ${
                  isScrolled ? 'text-white drop-shadow-lg' : 'text-white'
                }`}>
                  <span className="bg-gradient-to-r from-white via-blue-400 to-white bg-clip-text text-transparent group-hover:from-orange-400 group-hover:to-blue-400 transition-all duration-500">
                    BMW Екатеринбург
                  </span>
                </h2>
                <p className={`text-xs sm:text-sm font-medium transition-all duration-300 ${
                  isScrolled ? 'text-slate-300' : 'text-gray-300'
                } group-hover:text-orange-400`}>
                  ✨ Официальный дилер
                </p>
              </div>
            </div>

            {/* Desktop Navigation - улучшенный дизайн для скролла */}
            <nav className="hidden lg:flex items-center space-x-2">
              {navItems.map((item, index) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setActiveNav(item.name)}
                  onMouseLeave={() => setActiveNav('')}
                >
                  <a
                    href={item.href}
                    className={`relative flex items-center space-x-2 px-5 py-3 rounded-2xl font-semibold transition-all duration-500 hover:scale-105 ${
                      isScrolled 
                        ? 'text-slate-200 hover:text-white hover:bg-slate-800/60 border border-slate-700/50 hover:border-orange-500/50'
                        : 'text-white hover:text-white hover:bg-white/10 border border-transparent hover:border-orange-500/30'
                    }`}
                    style={{
                      background: activeNav === item.name 
                        ? isScrolled 
                          ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(251, 146, 60, 0.2) 100%)'
                          : 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(251, 146, 60, 0.2) 100%)'
                        : 'transparent',
                      backdropFilter: activeNav === item.name ? 'blur(10px)' : 'none',
                    }}
                  >
                    {/* Glowing Background */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />
                    
                    {/* Icon */}
                    <item.icon className={`w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300 ${
                      activeNav === item.name ? 'text-orange-400 scale-110' : isScrolled ? 'text-slate-400 group-hover:text-orange-400' : 'text-gray-300 group-hover:text-orange-400'
                    }`} />
                    
                    {/* Text */}
                    <span className={`relative z-10 transition-all duration-300 text-sm sm:text-base ${
                      activeNav === item.name ? 'text-white font-bold' : isScrolled ? 'text-slate-200 group-hover:text-white' : 'text-white group-hover:text-white'
                    }`}>
                      {item.name}
                    </span>
                  </a>
                </div>
              ))}
            </nav>

            {/* Contact & CTA - адаптивный дизайн */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
              {/* Phone Info */}
              <div className="text-right group cursor-pointer">
                <a
                  href="tel:+73431234567"
                  className={`font-bold text-lg xl:text-xl transition-all duration-300 flex items-center space-x-2 ${
                    isScrolled ? 'text-white drop-shadow-lg' : 'text-white'
                  } group-hover:text-orange-400`}
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-300 flex-shrink-0" />
                  <span className={`bg-gradient-to-r ${isScrolled ? 'from-white to-slate-200' : 'from-white to-gray-200'} bg-clip-text text-transparent group-hover:from-orange-400 group-hover:to-orange-400 transition-all duration-500 text-sm sm:text-lg xl:text-xl`}>
                    +7 (343) 123-45-67
                  </span>
                </a>
                <p className={`text-xs sm:text-sm font-medium transition-all duration-300 ${
                  isScrolled ? 'text-slate-300' : 'text-gray-300'
                } group-hover:text-white`}>
                  🕒 Ежедневно 9:00-20:00
                </p>
              </div>

              {/* CTA Button */}
              <button className={`group relative px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-2xl overflow-hidden bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 text-white font-bold text-sm sm:text-base lg:text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                isScrolled ? 'hover:shadow-orange-500/50' : 'hover:shadow-orange-500/50'
              }`}>
                {/* Animated Background Layers */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/80 to-red-500/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-45deg from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                
                {/* Button Content */}
                <div className="relative flex items-center justify-center space-x-2 sm:space-x-3 z-10">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-pulse flex-shrink-0" />
                  <span className="whitespace-nowrap">Заказать звонок</span>
                </div>

                {/* Glowing Ring */}
                <div className="absolute inset-0 rounded-2xl ring-2 ring-orange-500/50 ring-offset-2 ring-offset-transparent opacity-0 group-hover:opacity-100 group-hover:ring-offset-4 transition-all duration-500" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className={`lg:hidden relative p-2 sm:p-3 rounded-xl transition-all duration-300 ${
                isScrolled ? 'text-white bg-slate-800/60 border border-slate-700/50' : 'text-white bg-black/20 border border-white/10'
              } hover:bg-orange-500/20 hover:scale-110 backdrop-blur-sm hover:border-orange-500/50`}
            >
              <div className="relative">
                {isMobileMenuOpen ? (
                  <X size={20} className="animate-spin" />
                ) : (
                  <Menu size={20} className="group-hover:rotate-180 transition-transform duration-300" />
                )}
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu - улучшенный дизайн */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-700 ${
        isMobileMenuOpen ? 'visible' : 'invisible'
      }`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 backdrop-blur-xl transition-all duration-700 ${
            isMobileMenuOpen ? 'bg-black/70 opacity-100' : 'bg-black/0 opacity-0'
          }`}
          onClick={toggleMobileMenu}
        />
        
        {/* Menu Panel */}
        <div className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] transition-all duration-700 ease-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="h-full bg-gradient-to-br from-slate-900/98 via-slate-800/98 to-slate-900/98 backdrop-blur-2xl border-l border-slate-700/50">
            {/* Menu Header */}
            <div className="p-4 sm:p-6 border-b border-slate-700/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300"
                    onClick={scrollToTop}
                  >
                    <span className="text-white font-bold text-sm">BMW</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">Меню</h3>
                    <p className="text-slate-300 text-sm">BMW Екатеринбург</p>
                  </div>
                </div>
                <button
                  onClick={toggleMobileMenu}
                  className="p-2 rounded-lg bg-slate-800/60 text-white hover:bg-orange-500/20 transition-colors border border-slate-700/50 hover:border-orange-500/50"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Navigation */}
            <nav className="p-4 sm:p-6 space-y-2">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={toggleMobileMenu}
                  className="group flex items-center space-x-4 p-4 rounded-xl text-white hover:bg-slate-800/60 transition-all duration-300 hover:scale-105 border border-slate-700/30 hover:border-orange-500/50"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: isMobileMenuOpen ? 'slideInRight 0.5s ease-out forwards' : 'none',
                  }}
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center group-hover:from-orange-500 group-hover:to-red-500 transition-all duration-300 border border-slate-700/30 group-hover:border-orange-500/50">
                    <item.icon className="w-5 h-5 text-orange-400 group-hover:text-white transition-colors" />
                  </div>
                  <span className="font-semibold text-base sm:text-lg group-hover:text-orange-400 transition-colors text-slate-200">
                    {item.name}
                  </span>
                </a>
              ))}
            </nav>

            {/* Contact Info */}
            <div className="p-4 sm:p-6 border-t border-slate-700/50 mt-auto">
              <div className="space-y-4">
                <a
                  href="tel:+73431234567"
                  className="flex items-center space-x-3 text-white hover:text-orange-400 transition-colors group p-3 rounded-xl hover:bg-slate-800/40 border border-slate-700/30 hover:border-orange-500/30"
                >
                  <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center group-hover:bg-orange-500 transition-colors border border-slate-700/30 group-hover:border-orange-500">
                    <Phone className="w-5 h-5 text-orange-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="font-bold text-base sm:text-lg text-slate-200">+7 (343) 123-45-67</p>
                    <p className="text-slate-400 text-sm">Нажмите для звонка</p>
                  </div>
                </a>
                
                <button className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 text-white px-6 py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative">Заказать звонок</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        
        .animation-delay-400 {
          animation-delay: 400ms;
        }
      `}</style>
    </>
  );
};

export default Header;