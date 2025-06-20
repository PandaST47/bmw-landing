import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Youtube, Send, Star, Shield, Award, ChevronRight, Zap, Car, Users, Settings, Wrench, Calendar, Trophy, ArrowUp } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Intersection Observer для анимации появления
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  const handleSubscribe = () => {
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 4000);
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Instagram, color: 'from-pink-500 via-purple-500 to-orange-500', hoverColor: 'shadow-pink-500/30', label: 'Instagram' },
    { icon: Youtube, color: 'from-red-500 via-red-600 to-red-700', hoverColor: 'shadow-red-500/30', label: 'YouTube' },
    { icon: () => <span className="font-bold text-lg">VK</span>, color: 'from-blue-500 via-blue-600 to-blue-700', hoverColor: 'shadow-blue-500/30', label: 'VKontakte' }
  ];

  const navItems = [
    { name: 'О нас', href: '#about', icon: Users },
    { name: 'Модели', href: '#models', icon: Car },
    { name: 'Услуги', href: '#services', icon: Settings },
    { name: 'Сервис', href: '#service', icon: Wrench },
    { name: 'Отзывы', href: '#testimonials', icon: Star },
    { name: 'Контакты', href: '#contact', icon: Phone },
    { name: 'Тест-драйв', href: '#test-drive', icon: Calendar },
  ];

  const stats = [
    { value: '15+', label: 'лет опыта', icon: Trophy },
    { value: '2000+', label: 'довольных клиентов', icon: Users },
    { value: '99%', label: 'рейтинг качества', icon: Star },
    { value: '24/7', label: 'поддержка', icon: Zap }
  ];

  return (
    <footer ref={footerRef} className="relative overflow-hidden bg-gray-900">
      {/* Упрощенный статичный фон */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900"></div>
      </div>

      {/* Верхняя декоративная полоса */}
      <div className="absolute top-0 left-0 w-full">
        <div className="h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
      </div>
      
      {/* Основной контент */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Заголовочная секция */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex justify-center mb-6">
            <img 
              src="images/bmw-logo.png" 
              alt="BMW Logo" 
              className="w-20 h-auto object-contain" 
            />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent leading-tight">
            BMW Екатеринбург
          </h2>
          
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600/25 to-cyan-600/25 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 shadow-xl">
            <Shield className="w-5 h-5 text-blue-300" />
            <span className="text-white font-semibold">Официальный дилер BMW</span>
            <Award className="w-5 h-5 text-cyan-300" />
          </div>

          {/* Статистика */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300">
                <stat.icon className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-300 text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Основная сетка контента - изменены пропорции */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          
          {/* О компании */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-6 h-full transform hover:scale-[1.02] transition-all duration-500">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-3 h-8 bg-gradient-to-b from-blue-400 to-cyan-500 rounded-full"></div>
                <h3 className="text-2xl font-bold text-white">О нас</h3>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                Ведущий BMW центр Екатеринбурга с 2008 года. Предлагаем полный спектр услуг: 
                продажу новых и подержанных автомобилей, сервисное обслуживание и запчасти.
              </p>
              
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3 flex items-center">
                  <Trophy className="w-4 h-4 mr-2 text-blue-400" />
                  Наши преимущества
                </h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                    Официальная гарантия BMW
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                    Сертифицированные специалисты
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                    Оригинальные запчасти
                  </li>
                </ul>
              </div>
              
              {/* Социальные сети */}
              <div>
                <h4 className="text-white font-semibold mb-3">Мы в соцсетях</h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className={`relative w-10 h-10 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.hoverColor}`}
                      title={social.label}
                    >
                      <social.icon className="w-4 h-4 text-white" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Навигация */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-6 h-full transform hover:scale-[1.02] transition-all duration-500">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-3 h-8 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full"></div>
                <h4 className="text-2xl font-bold text-white">Навигация</h4>
              </div>
              
              <ul className="space-y-2">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a 
                      href={item.href} 
                      className="group flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300 py-2 px-3 rounded-xl hover:bg-white/10"
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.querySelector(item.href);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      <item.icon className="w-4 h-4 text-blue-400 group-hover:text-white transition-all duration-300" />
                      <span className="font-medium text-sm">{item.name}</span>
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 ml-auto" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Контакты и подписка */}
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-4">
              {/* Контакты */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-6 transform hover:scale-[1.02] transition-all duration-500">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-6 bg-gradient-to-b from-green-400 to-emerald-500 rounded-full"></div>
                  <h4 className="text-xl font-bold text-white">Контакты</h4>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-2 rounded-xl hover:bg-white/10 transition-all duration-300">
                    <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <div>
                      <a href="tel:+73431234567" className="text-white hover:text-blue-400 transition-colors duration-300 font-medium text-sm block">
                        +7 (343) 123-45-67
                      </a>
                      <p className="text-gray-400 text-xs">24/7 поддержка</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-2 rounded-xl hover:bg-white/10 transition-all duration-300">
                    <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <a href="mailto:info@bmw-ekb.ru" className="text-white hover:text-blue-400 transition-colors duration-300 text-sm">
                      info@bmw-ekb.ru
                    </a>
                  </div>
                  
                  <div className="flex items-start space-x-3 p-2 rounded-xl hover:bg-white/10 transition-all duration-300">
                    <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white text-sm">ул. Примерная, д. 123</p>
                      <p className="text-gray-400 text-xs">Екатеринбург, Россия</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 p-2 rounded-xl hover:bg-white/10 transition-all duration-300">
                    <Clock className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white text-sm">Пн-Пт: 9:00-20:00</p>
                      <p className="text-gray-400 text-xs">Сб-Вс: 10:00-18:00</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Подписка */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-6 transform hover:scale-[1.02] transition-all duration-500">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-6 bg-gradient-to-b from-orange-400 to-red-500 rounded-full"></div>
                  <h4 className="text-xl font-bold text-white">Новости BMW</h4>
                </div>
                
                <p className="text-gray-300 mb-4 text-sm">
                  Эксклюзивные предложения и новости BMW
                </p>
                
                <div className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Введите email"
                    className="w-full px-4 py-3 bg-black/30 border border-white/30 rounded-xl focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30 text-white placeholder-gray-400 transition-all duration-300 text-sm"
                  />
                  
                  <button 
                    onClick={handleSubscribe}
                    disabled={isSubscribed}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-75 text-sm"
                  >
                    <span className="flex items-center justify-center space-x-2">
                      {isSubscribed ? (
                        <>
                          <Star className="w-4 h-4" />
                          <span>Подписка активна!</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Подписаться</span>
                        </>
                      )}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Нижняя секция */}
        <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <div className="flex flex-col lg:flex-row items-center space-y-3 lg:space-y-0 lg:space-x-6">
                <p className="text-gray-300 text-center lg:text-left">
                  © 2025 BMW Екатеринбург. Все права защищены.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start space-x-4 text-sm">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Политика конфиденциальности
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Условия использования
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 text-sm">
                <span className="text-gray-300">Разработано</span>
                <div className="flex items-center space-x-2 px-3 py-1 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full border border-white/10">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                  <span className="text-white font-medium">Cayman Web</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Кнопка "Наверх" */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full shadow-xl hover:shadow-blue-400/50 transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
};

export default Footer;