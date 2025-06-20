import { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, Car, Star, Calendar, ExternalLink, Users, Zap } from 'lucide-react';

const Contact = () => {
  const [activeTab, setActiveTab] = useState('info');
  const [currentDay, setCurrentDay] = useState('');

  const contactInfo = [
    {
      icon: <MapPin className="w-4 h-4 md:w-5 md:h-5" />,
      label: 'Адрес',
      value: 'ул. Примерная, д. 123, Екатеринбург',
      description: 'Центр города, возле плотинки',
    },
    {
      icon: <Phone className="w-4 h-4 md:w-5 md:h-5" />,
      label: 'Телефон',
      value: '+7 (343) 123-45-67',
      description: 'Звоните в любое время',
    },
    {
      icon: <Mail className="w-4 h-4 md:w-5 md:h-5" />,
      label: 'Email',
      value: 'info@bmw-ekb.ru',
      description: 'Ответим в течение часа',
    },
    {
      icon: <Clock className="w-4 h-4 md:w-5 md:h-5" />,
      label: 'Режим работы',
      value: 'Пн-Пт: 9:00-20:00',
      description: 'Сб-Вс: 10:00-18:00',
    }
  ];

  const workingHours = [
    { day: 'Понедельник', dayEng: 'monday', hours: '9:00 - 20:00' },
    { day: 'Вторник', dayEng: 'tuesday', hours: '9:00 - 20:00' },
    { day: 'Среда', dayEng: 'wednesday', hours: '9:00 - 20:00' },
    { day: 'Четверг', dayEng: 'thursday', hours: '9:00 - 20:00' },
    { day: 'Пятница', dayEng: 'friday', hours: '9:00 - 20:00' },
    { day: 'Суббота', dayEng: 'saturday', hours: '10:00 - 18:00' },
    { day: 'Воскресенье', dayEng: 'sunday', hours: '10:00 - 18:00' }
  ];

  useEffect(() => {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const today = new Date().getDay();
    setCurrentDay(days[today]);
  }, []);

  const getCurrentStatus = () => {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinutes = now.getMinutes();
    const currentTime = currentHour * 60 + currentMinutes;
    
    const isWeekend = currentDay === 'saturday' || currentDay === 'sunday';
    const openTime = 9 * 60;
    const closeTime = isWeekend ? 18 * 60 : 20 * 60;
    const weekendOpenTime = 10 * 60;
    
    if (isWeekend) {
      if (currentTime >= weekendOpenTime && currentTime < closeTime) {
        return { isOpen: true, closesAt: '18:00' };
      }
    } else {
      if (currentTime >= openTime && currentTime < closeTime) {
        return { isOpen: true, closesAt: '20:00' };
      }
    }
    
    return { isOpen: false, closesAt: null };
  };

  const status = getCurrentStatus();

  const handleAction = (action, address) => {
    if (action === 'route') {
      const encodedAddress = encodeURIComponent(address);
      // Используем ссылку на Яндекс.Карты с маршрутом от текущей позиции
      const url = `https://yandex.ru/maps/?rtext=~${encodedAddress}&rtt=auto`;
      window.open(url, '_blank');
    }
  };

  return (
    <section id="contact" className="relative py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Заголовок секции */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/90 to-blue-700/90 backdrop-blur-sm text-white px-4 md:px-6 py-2 md:py-3 rounded-full text-sm font-semibold mb-6 md:mb-8 shadow-lg border border-blue-500/30">
            <MapPin className="w-4 h-4" />
            КОНТАКТЫ
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 lg:mb-8 leading-tight">
            Найдите нас в самом
            <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent mt-2">
              сердце Екатеринбурга
            </span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
            Мы расположены в центре города для вашего удобства. 
            Приезжайте на тест-драйв или консультацию в любое удобное время.
          </p>
        </div>

        {/* Основной контент - адаптивная сетка */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Левая колонка - Контактная информация */}
          <div className="lg:col-span-1 space-y-4 lg:space-y-6">
            {/* Табы - компактные */}
            <div className="flex gap-2 bg-black/30 backdrop-blur-md p-2 rounded-2xl border border-gray-700/50">
              <button
                onClick={() => setActiveTab('info')}
                className={`flex-1 py-2 md:py-3 px-3 md:px-4 rounded-xl font-bold text-sm transition-all duration-300 ${
                  activeTab === 'info'
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-2xl scale-105'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span className="hidden sm:inline">Контакты</span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab('hours')}
                className={`flex-1 py-2 md:py-3 px-3 md:px-4 rounded-xl font-bold text-sm transition-all duration-300 ${
                  activeTab === 'hours'
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-2xl scale-105'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span className="hidden sm:inline">Режим работы</span>
                </div>
              </button>
            </div>

            {/* Контент табов */}
            <div className="relative">
              {/* Контактная информация */}
              <div className={`transition-all duration-500 ease-in-out ${
                activeTab === 'info' 
                  ? 'opacity-100 translate-x-0 block' 
                  : 'opacity-0 -translate-x-4 hidden'
              }`}>
                <div className="space-y-2 md:space-y-2">
                  {contactInfo.map((item, index) => (
                    <div
                      key={index}
                      className="group relative bg-black/20 backdrop-blur-md rounded-xl md:rounded-2xl p-3 md:p-4 hover:bg-black/30 transition-all duration-700 border border-gray-700/30 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20"
                    >
                      <div className="flex flex-col sm:flex-row items-start gap-3">
                        <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl md:rounded-2xl flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                          {item.icon}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="text-xs text-blue-400 font-bold mb-1 uppercase tracking-wider">
                            {item.label}
                          </div>
                          <div className="text-base md:text-lg font-bold text-white mb-1 break-words">
                            {item.value}
                          </div>
                          <div className="text-gray-400 text-sm mb-2">
                            {item.description}
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-r from-blue-600/0 via-blue-500/20 to-blue-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Режим работы */}
              <div className={`transition-all duration-500 ease-in-out ${
                activeTab === 'hours' 
                  ? 'opacity-100 translate-x-0 block' 
                  : 'opacity-0 translate-x-4 hidden'
              }`}>
                <div className="bg-black/20 backdrop-blur-md rounded-xl md:rounded-2xl p-3 md:p-4 border border-gray-700/30">
                  <div className="space-y-2 md:space-y-3">
                    {workingHours.map((schedule, index) => {
                      const isToday = schedule.dayEng === currentDay;
                      return (
                        <div
                          key={index}
                          className={`flex justify-between items-center py-2 md:py-3 px-3 md:px-4 rounded-lg md:rounded-xl transition-all duration-500 ${
                            isToday
                              ? 'bg-gradient-to-r from-blue-600/30 to-blue-700/30 border-2 border-blue-500/50 shadow-lg'
                              : 'hover:bg-white/5 border border-transparent'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className={`font-bold text-sm md:text-base ${isToday ? 'text-blue-300' : 'text-white'}`}>
                              {schedule.day}
                            </span>
                            {isToday && (
                              <span className="px-2 py-1 bg-blue-600 text-white text-xs font-bold rounded-full animate-pulse">
                                Сегодня
                              </span>
                            )}
                          </div>
                          <span className={`font-mono text-sm md:text-base font-bold ${isToday ? 'text-blue-200' : 'text-gray-300'}`}>
                            {schedule.hours}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  
                  <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-600/50">
                    <div className={`flex items-center gap-3 ${status.isOpen ? 'text-green-400' : 'text-red-400'}`}>
                      <div className={`w-3 h-3 rounded-full animate-pulse ${status.isOpen ? 'bg-green-400' : 'bg-red-400'}`}></div>
                      <span className="font-bold text-base md:text-lg">
                        {status.isOpen ? 'Сейчас открыто' : 'Сейчас закрыто'}
                      </span>
                    </div>
                    {status.isOpen && (
                      <p className="text-gray-400 text-sm mt-2">
                        Закрываемся в {status.closesAt}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Правая колонка - Карта */}
          <div className="lg:col-span-2">
            <div className="space-y-4 md:space-y-6">
              {/* Карта */}
              <div className="bg-black/20 backdrop-blur-md rounded-2xl md:rounded-3xl p-4 md:p-6 border border-gray-700/30">
                <div className="flex items-center justify-between mb-4 md:mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-white">Местоположение</h3>
                  <div className="flex items-center gap-2 text-yellow-400">
                    <Star className="w-5 h-5 md:w-6 md:h-6 fill-current" />
                    <span className="font-bold text-lg md:text-xl">4.9</span>
                  </div>
                </div>

                {/* Карта */}
                <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl md:rounded-2xl overflow-hidden mb-4 md:mb-6 border border-gray-700/50">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-green-900/20">
                    <div className="absolute inset-0 opacity-40">
                      <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-400/70"></div>
                      <div className="absolute top-0 left-1/2 w-1 h-full bg-gray-400/70"></div>
                      <div className="absolute top-1/4 left-0 w-full h-px bg-gray-500/50"></div>
                      <div className="absolute top-3/4 left-0 w-full h-px bg-gray-500/50"></div>
                    </div>
                    
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="relative">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-xl animate-bounce border-4 border-white">
                          <Car className="w-6 h-6 md:w-8 md:h-8 text-white" />
                        </div>
                        <div className="absolute -bottom-12 md:-bottom-12 left-1/2 transform -translate-x-1/2 bg-black/90 text-white px-4 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl text-sm md:text-base font-bold whitespace-nowrap border border-gray-600">
                          BMW Екатеринбург
                        </div>
                      </div>
                    </div>

                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 md:w-3 md:h-3 bg-blue-400/60 rounded-full animate-pulse"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${Math.random() * 2}s`
                        }}
                      />
                    ))}
                  </div>

                  <div className="absolute bottom-4 md:bottom-4 left-4 md:left-6 right-4 md:right-6 bg-black/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 border border-gray-600/50">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-white font-bold text-base md:text-lg">Центр города</div>
                        <div className="text-blue-400 text-sm md:text-base">5 мин от плотинки</div>
                      </div>
                      <button 
                        onClick={() => handleAction('route', 'ул. Примерная, д. 123, Екатеринбург')}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl font-bold text-sm md:text-base transition-all duration-300 hover:scale-105"
                      >
                        Маршрут
                      </button>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => handleAction('route', 'ул. Примерная, д. 123, Екатеринбург')}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 md:py-5 rounded-xl md:rounded-2xl font-bold text-lg md:text-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-500 shadow-xl hover:shadow-blue-500/30 transform hover:scale-105"
                >
                  <div className="flex items-center justify-center gap-3">
                    <Navigation className="w-5 h-5 md:w-6 md:h-6" />
                    Построить маршрут
                  </div>
                </button>
              </div>

              {/* Статистика и дополнительная информация */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                <div className="text-center p-4 md:p-6 bg-black/20 backdrop-blur-md rounded-xl md:rounded-2xl border border-gray-700/30 hover:bg-black/30 transition-all duration-500">
                  <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-2 flex items-center justify-center gap-2">
                    <Car className="w-6 h-6 md:w-8 md:h-8" />
                    50+
                  </div>
                  <div className="text-gray-300 text-sm md:text-base font-semibold">парковочных мест</div>
                </div>
                <div className="text-center p-4 md:p-6 bg-black/20 backdrop-blur-md rounded-xl md:rounded-2xl border border-gray-700/30 hover:bg-black/30 transition-all duration-500">
                  <div className="text-2xl md:text-3xl font-bold text-green-400 mb-2 flex items-center justify-center gap-2">
                    <Zap className="w-6 h-6 md:w-8 md:h-8" />
                    2
                  </div>
                  <div className="text-gray-300 text-sm md:text-base font-semibold">минуты от метро</div>
                </div>
                <div className="bg-black/20 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-700/30">
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                    <span className="text-white font-bold text-sm md:text-base">Наша команда</span>
                  </div>
                  <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                    Более 15 сертифицированных специалистов BMW готовы помочь вам.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;