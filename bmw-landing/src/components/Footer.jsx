import React from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-blue-800/10"></div>
      
      {/* Декоративные элементы */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Логотип и описание */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">BMW</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">BMW Екатеринбург</h3>
                <p className="text-gray-400 text-sm">Официальный дилер</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Премиальный автомобильный опыт в Екатеринбурге. Полный спектр услуг 
              и официальная гарантия BMW.
            </p>
            
            {/* Социальные сети */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <span className="text-sm font-bold">VK</span>
              </a>
            </div>
          </div>

          {/* Быстрые ссылки */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Навигация</h4>
            <ul className="space-y-3">
              {['Модели', 'Сервис', 'Тест-драйв', 'Trade-in', 'Финансирование', 'О нас'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center group">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Контактная информация */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Контакты</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+73431234567" className="text-white hover:text-blue-400 transition-colors duration-300 font-medium">
                    +7 (343) 123-45-67
                  </a>
                  <p className="text-gray-400 text-xs">Звонки круглосуточно</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="mailto:info@bmw-ekb.ru" className="text-white hover:text-blue-400 transition-colors duration-300">
                    info@bmw-ekb.ru
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white">ул. Примерная, д. 123</p>
                  <p className="text-gray-400 text-sm">Екатеринбург, Россия</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white text-sm">Пн-Пт: 9:00-20:00</p>
                  <p className="text-gray-400 text-sm">Сб-Вс: 10:00-18:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Подписка на новости */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Будьте в курсе</h4>
            <p className="text-gray-400 text-sm mb-4">
              Подпишитесь на новости и специальные предложения BMW
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Ваш email"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-400 transition-colors duration-300"
              />
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                Подписаться
              </button>
            </div>
            
            {/* Сертификаты */}
            <div className="mt-8">
              <p className="text-gray-400 text-xs mb-3">Официальный дилер</p>
              <div className="flex space-x-2">
                <div className="w-16 h-12 bg-gray-800 rounded border border-gray-700 flex items-center justify-center">
                  <span className="text-xs text-gray-400">BMW</span>
                </div>
                <div className="w-16 h-12 bg-gray-800 rounded border border-gray-700 flex items-center justify-center">
                  <span className="text-xs text-gray-400">ISO</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Разделительная линия */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                © 2025 BMW Екатеринбург. Все права защищены.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                  Политика конфиденциальности
                </a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                  Пользовательское соглашение
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 text-sm">Сделано с</span>
              <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-gray-400 text-sm">в России</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;