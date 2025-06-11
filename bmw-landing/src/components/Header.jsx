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

  // Mouse tracking for interactive effects
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
            ? 'bg-white/10 backdrop-blur-2xl border-b border-white/10 shadow-2xl shadow-black/20'
            : 'bg-gradient-to-b from-black/40 via-black/20 to-transparent backdrop-blur-sm'
        }`}
        style={{
          background: isScrolled 
            ? 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.08) 100%)'
            : 'linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)',
        }}
      >
        {/* Ambient Light Effect */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none transition-all duration-500"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(0, 102, 204, 0.15) 0%, transparent 70%)`,
          }}
        />

        <div className="container mx-auto px-6 py-4 relative">
          <div className="flex items-center justify-between">
            {/* Revolutionary Logo */}
            <div className="flex items-center space-x-4 group cursor-pointer">
              <div className="relative">
                {/* Rotating Ring */}
                <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-[#0066CC] via-[#FF6B35] to-[#0066CC] opacity-0 group-hover:opacity-100 animate-spin transition-opacity duration-500" style={{ animationDuration: '3s' }} />
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#0066CC]/50 to-[#FF6B35]/50 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Main Logo */}
                <div className="relative w-14 h-14 bg-gradient-to-br from-[#0066CC] via-[#004080] to-[#0066CC] rounded-full flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                  <span className="text-white font-black text-lg tracking-wider relative z-10 group-hover:text-[#FF6B35] transition-colors duration-300">BMW</span>
                  
                  {/* Pulse Effect */}
                  <div className="absolute inset-0 rounded-full bg-[#FF6B35]/30 scale-0 group-hover:scale-110 opacity-0 group-hover:opacity-100 transition-all duration-700" />
                </div>
              </div>
              
              <div className="hidden sm:block">
                <h2 className={`font-bold text-xl tracking-wide transition-all duration-300 ${
                  isScrolled ? 'text-white drop-shadow-lg' : 'text-white'
                }`}>
                  <span className="bg-gradient-to-r from-white via-[#0066CC] to-white bg-clip-text text-transparent group-hover:from-[#FF6B35] group-hover:to-[#0066CC] transition-all duration-500">
                    BMW Екатеринбург
                  </span>
                </h2>
                <p className={`text-sm font-medium transition-all duration-300 ${
                  isScrolled ? 'text-gray-200' : 'text-gray-300'
                } group-hover:text-[#FF6B35]`}>
                  ✨ Официальный дилер
                </p>
              </div>
            </div>

            {/* Ultra-Modern Desktop Navigation */}
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
                    className="relative flex items-center space-x-2 px-6 py-3 rounded-2xl font-semibold text-white transition-all duration-700 hover:scale-105"
                    style={{
                      background: activeNav === item.name 
                        ? 'linear-gradient(135deg, rgba(0, 102, 204, 0.2) 0%, rgba(255, 107, 53, 0.2) 100%)'
                        : 'transparent',
                      backdropFilter: activeNav === item.name ? 'blur(10px)' : 'none',
                      border: activeNav === item.name ? '1px solid rgba(255, 107, 53, 0.3)' : '1px solid transparent',
                    }}
                  >
                    {/* Glowing Background */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-[#0066CC]/20 to-[#FF6B35]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />
                    
                    {/* Icon */}
                    <item.icon className={`w-5 h-5 transition-all duration-300 ${
                      activeNav === item.name ? 'text-[#FF6B35] scale-110' : 'text-gray-300 group-hover:text-[#FF6B35]'
                    }`} />
                    
                    {/* Text */}
                    <span className={`relative z-10 transition-all duration-300 ${
                      activeNav === item.name ? 'text-white font-bold' : 'group-hover:text-white'
                    }`}>
                      {item.name}
                    </span>
                  </a>
                </div>
              ))}
            </nav>

            {/* Contact & Revolutionary CTA */}
            <div className="hidden md:flex items-center space-x-6">
              {/* Phone Info with Glow */}
              <div className="text-right group cursor-pointer">
                <a
                  href="tel:+73431234567"
                  className={`font-bold text-xl transition-all duration-300 flex items-center space-x-2 ${
                    isScrolled ? 'text-white drop-shadow-lg' : 'text-white'
                  } group-hover:text-[#FF6B35]`}
                >
                  <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent group-hover:from-[#FF6B35] group-hover:to-[#FF6B35] transition-all duration-500">
                    +7 (343) 123-45-67
                  </span>
                </a>
                <p className={`text-sm font-medium transition-all duration-300 ${
                  isScrolled ? 'text-gray-200' : 'text-gray-300'
                } group-hover:text-white`}>
                  🕒 Ежедневно 9:00-20:00
                </p>
              </div>

              {/* Ultimate CTA Button */}
              <button className="group relative px-8 py-4 rounded-2xl overflow-hidden bg-gradient-to-r from-[#FF6B35] via-[#FF4500] to-[#FF6B35] text-white font-bold text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/50">
                {/* Animated Background Layers */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/80 to-[#FF4500]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-45deg from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                
                {/* Button Content */}
                <div className="relative flex items-center justify-center space-x-3 z-10">
                  <Phone className="w-5 h-5 group-hover:animate-pulse" />
                  <span>Заказать звонок</span>
                </div>

                {/* Glowing Ring */}
                <div className="absolute inset-0 rounded-2xl ring-2 ring-[#FF6B35]/50 ring-offset-2 ring-offset-transparent opacity-0 group-hover:opacity-100 group-hover:ring-offset-4 transition-all duration-500" />
                
                {/* Particle Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-2 left-2 w-1 h-1 bg-white rounded-full animate-ping" />
                  <div className="absolute top-4 right-3 w-1 h-1 bg-white rounded-full animate-ping animation-delay-200" />
                  <div className="absolute bottom-3 left-4 w-1 h-1 bg-white rounded-full animate-ping animation-delay-400" />
                </div>
              </button>
            </div>

            {/* Enhanced Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className={`lg:hidden relative p-3 rounded-xl transition-all duration-300 ${
                isScrolled ? 'text-white bg-white/10' : 'text-white bg-black/20'
              } hover:bg-[#FF6B35]/20 hover:scale-110 backdrop-blur-sm border border-white/10`}
            >
              <div className="relative">
                {isMobileMenuOpen ? (
                  <X size={24} className="animate-spin" />
                ) : (
                  <Menu size={24} className="group-hover:rotate-180 transition-transform duration-300" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0066CC] via-[#FF6B35] to-[#0066CC] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </header>

      {/* Revolutionary Mobile Menu */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-700 ${
        isMobileMenuOpen ? 'visible' : 'invisible'
      }`}>
        {/* Backdrop with Blur */}
        <div 
          className={`absolute inset-0 backdrop-blur-xl transition-all duration-700 ${
            isMobileMenuOpen ? 'bg-black/60 opacity-100' : 'bg-black/0 opacity-0'
          }`}
          onClick={toggleMobileMenu}
        />
        
        {/* Menu Panel */}
        <div className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] transition-all duration-700 ease-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="h-full bg-gradient-to-br from-[#0066CC]/95 via-[#004080]/95 to-black/95 backdrop-blur-2xl border-l border-white/10">
            {/* Menu Header */}
            <div className="p-6 border-b border-white/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#FF6B35] to-[#FF4500] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">BMW</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">Меню</h3>
                    <p className="text-gray-300 text-sm">BMW Екатеринбург</p>
                  </div>
                </div>
                <button
                  onClick={toggleMobileMenu}
                  className="p-2 rounded-lg bg-white/10 text-white hover:bg-[#FF6B35]/20 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Navigation */}
            <nav className="p-6 space-y-2">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={toggleMobileMenu}
                  className="group flex items-center space-x-4 p-4 rounded-xl text-white hover:bg-white/10 transition-all duration-300 hover:scale-105 border border-transparent hover:border-[#FF6B35]/30"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: isMobileMenuOpen ? 'slideInRight 0.5s ease-out forwards' : 'none',
                  }}
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FF6B35]/20 to-[#FF4500]/20 flex items-center justify-center group-hover:from-[#FF6B35] group-hover:to-[#FF4500] transition-all duration-300">
                    <item.icon className="w-5 h-5 text-[#FF6B35] group-hover:text-white transition-colors" />
                  </div>
                  <span className="font-semibold text-lg group-hover:text-[#FF6B35] transition-colors">
                    {item.name}
                  </span>
                </a>
              ))}
            </nav>

            {/* Contact Info */}
            <div className="p-6 border-t border-white/10 mt-auto">
              <div className="space-y-4">
                <a
                  href="tel:+73431234567"
                  className="flex items-center space-x-3 text-white hover:text-[#FF6B35] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#FF6B35]/20 flex items-center justify-center group-hover:bg-[#FF6B35] transition-colors">
                    <Phone className="w-5 h-5 text-[#FF6B35] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">+7 (343) 123-45-67</p>
                    <p className="text-gray-300 text-sm">Нажмите для звонка</p>
                  </div>
                </a>
                
                <button className="w-full bg-gradient-to-r from-[#FF6B35] via-[#FF4500] to-[#FF6B35] text-white px-6 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#FF6B35]/30 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FF4500] to-[#FF6B35] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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