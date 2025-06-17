import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Youtube, Send, Star, Shield, Award, ChevronRight, Zap } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubscribe = () => {
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail('');
    }
  };

  const socialLinks = [
    { icon: Instagram, color: 'from-pink-500 to-orange-500', hoverColor: 'hover:shadow-pink-500/25' },
    { icon: Youtube, color: 'from-red-500 to-red-600', hoverColor: 'hover:shadow-red-500/25' },
    { icon: () => <span className="font-bold text-sm">VK</span>, color: 'from-blue-500 to-blue-600', hoverColor: 'hover:shadow-blue-500/25' }
  ];

  const navItems = [
    { name: 'О нас', href: '#about' },
    { name: 'Модели', href: '#models' },
    { name: 'Услуги', href: '#services' },
    { name: 'Отзывы', href: '#testimonials' },
    { name: 'Контакты', href: '#contact' },
    { name: 'Тест-драйв', href: '#test-drive' },
  ];

  return (
    <footer className="relative min-h-screen overflow-hidden">
      {/* Динамический фон с несколькими слоями */}
      <div className="absolute inset-0">
        {/* Базовый градиент */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-blue-900"></div>
        
        {/* Анимированные геометрические формы */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-cyan-500/15 to-blue-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Интерактивный эффект курсора */}
        <div 
          className="absolute w-96 h-96 bg-gradient-radial from-blue-500/5 to-transparent rounded-full blur-xl pointer-events-none transition-all duration-300"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
        
        {/* Сетка с анимацией */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite'
          }}></div>
        </div>
      </div>

      {/* Верхняя декоративная линия */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 via-cyan-400 to-transparent animate-pulse"></div>
      
      {/* Основной контент */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Заголовочная секция */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-500 rounded-full mb-6 shadow-2xl shadow-blue-500/25 animate-pulse">
            <span className="text-white font-bold text-2xl">BMW</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
            BMW Екатеринбург
          </h2>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-white/10 rounded-full px-6 py-2">
            <Shield className="w-5 h-5 text-blue-400" />
            <span className="text-white font-medium">Официальный дилер</span>
            <Award className="w-5 h-5 text-cyan-400" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* О компании */}
          <div className="lg:col-span-1" id="about">
            <div className="bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm border border-white/10 rounded-3xl p-8 h-full transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-3 h-8 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
                <h3 className="text-2xl font-bold text-white">О нас</h3>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-8">
                Премиальный автомобильный опыт с 2008 года. Полный спектр услуг, 
                официальная гарантия и сервис мирового класса.
              </p>
              
              {/* Статистика */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-1">15+</div>
                  <div className="text-gray-400 text-sm">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-1">5000+</div>
                  <div className="text-gray-400 text-sm">клиентов</div>
                </div>
              </div>
              
              {/* Социальные сети */}
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`w-12 h-12 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.hoverColor} hover:-translate-y-1`}
                  >
                    <social.icon className="w-5 h-5 text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Навигация */}
          <div id="navigation">
            <div className="bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm border border-white/10 rounded-3xl p-8 h-full transform hover:scale-105 transition-all duration-500">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-3 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                <h4 className="text-2xl font-bold text-white">Навигация</h4>
              </div>
              
              <ul className="space-y-4">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a 
                      href={item.href} 
                      className="group flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300 py-2"
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.querySelector(item.href);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-150"></div>
                      <span className="group-hover:translate-x-2 transition-transform duration-300">{item.name}</span>
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Контакты */}
          <div id="contact">
            <div className="bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm border border-white/10 rounded-3xl p-8 h-full transform hover:scale-105 transition-all duration-500">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-3 h-8 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full"></div>
                <h4 className="text-2xl font-bold text-white">Контакты</h4>
              </div>
              
              <div className="space-y-6">
                <div className="group">
                  <div className="flex items-start space-x-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-300">
                    <Phone className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <a href="tel:+73431234567" className="text-white hover:text-blue-400 transition-colors duration-300 font-semibold text-lg">
                        +7 (343) 123-45-67
                      </a>
                      <p className="text-gray-400 text-sm flex items-center mt-1">
                        <Zap className="w-3 h-3 mr-1" />
                        24/7 поддержка
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="group">
                  <div className="flex items-start space-x-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-300">
                    <Mail className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <a href="mailto:info@bmw-ekb.ru" className="text-white hover:text-blue-400 transition-colors duration-300 font-medium">
                        info@bmw-ekb.ru
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="group">
                  <div className="flex items-start space-x-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-300">
                    <MapPin className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <p className="text-white font-medium">ул. Примерная, д. 123</p>
                      <p className="text-gray-400 text-sm">Екатеринбург, Россия</p>
                    </div>
                  </div>
                </div>
                
                <div className="group">
                  <div className="flex items-start space-x-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-300">
                    <Clock className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <p className="text-white font-medium">Пн-Пт: 9:00-20:00</p>
                      <p className="text-gray-400 text-sm">Сб-Вс: 10:00-18:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Подписка */}
          <div id="newsletter">
            <div className="bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm border border-white/10 rounded-3xl p-8 h-full transform hover:scale-105 transition-all duration-500">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-3 h-8 bg-gradient-to-b from-orange-500 to-red-500 rounded-full"></div>
                <h4 className="text-2xl font-bold text-white">Новости</h4>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Эксклюзивные предложения и новости BMW первыми
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ваш email"
                    className="w-full px-6 py-4 bg-black/50 border border-white/20 rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/25 text-white placeholder-gray-400 transition-all duration-300 backdrop-blur-sm"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
                
                <button 
                  onClick={handleSubscribe}
                  disabled={isSubscribed}
                  className="w-full relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 hover:from-blue-700 hover:via-blue-800 hover:to-cyan-700 text-white py-4 px-6 rounded-2xl font-semibold transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 disabled:opacity-75"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    {isSubscribed ? (
                      <>
                        <Star className="w-5 h-5" />
                        <span>Подписка оформлена!</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Подписаться</span>
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
              
              {/* Сертификаты */}
              <div>
                <p className="text-gray-400 text-sm mb-4 flex items-center">
                  <Shield className="w-4 h-4 mr-2" />
                  Сертификаты и лицензии
                </p>
                <div className="flex space-x-3">
                  <div className="flex-1 h-16 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center hover:scale-105 transition-transform duration-300">
                    <span className="text-white font-bold">BMW</span>
                  </div>
                  <div className="flex-1 h-16 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center hover:scale-105 transition-transform duration-300">
                    <span className="text-white font-bold text-sm">ISO</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Нижняя секция */}
        <div className="mt-20 pt-12 border-t border-gradient-to-r from-transparent via-white/20 to-transparent">
          <div className="bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
              <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8">
                <p className="text-gray-300 text-center lg:text-left">
                  © 2025 BMW Екатеринбург. Все права защищены.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start space-x-6">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm hover:underline">
                    Политика конфиденциальности
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm hover:underline">
                    Пользовательское соглашение
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 text-gray-300">
                <span className="text-sm">Сделано</span>
                <div className="w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-pulse shadow-lg shadow-red-500/25"></div>
                <span className="text-sm">в России</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Дополнительные стили */}
      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </footer>
  );
};

export default Footer;