import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, Car, Star, Calendar } from 'lucide-react';

const Contact = () => {
  const [activeTab, setActiveTab] = useState('info');

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Адрес',
      value: 'ул. Примерная, д. 123, Екатеринбург',
      description: 'Центр города, возле плотинки',
      action: 'Построить маршрут'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Телефон',
      value: '+7 (343) 123-45-67',
      description: 'Звоните в любое время',
      action: 'Позвонить'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'info@bmw-ekb.ru',
      description: 'Ответим в течение часа',
      action: 'Написать'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      label: 'Режим работы',
      value: 'Пн-Пт: 9:00-20:00',
      description: 'Сб-Вс: 10:00-18:00',
      action: 'Записаться'
    }
  ];

  const workingHours = [
    { day: 'Понедельник', hours: '9:00 - 20:00', isToday: false },
    { day: 'Вторник', hours: '9:00 - 20:00', isToday: false },
    { day: 'Среда', hours: '9:00 - 20:00', isToday: true },
    { day: 'Четверг', hours: '9:00 - 20:00', isToday: false },
    { day: 'Пятница', hours: '9:00 - 20:00', isToday: false },
    { day: 'Суббота', hours: '10:00 - 18:00', isToday: false },
    { day: 'Воскресенье', hours: '10:00 - 18:00', isToday: false }
  ];

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl"></div>
      </div>

      {/* BMW лого паттерн */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-24 h-24 border-2 border-blue-600 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
            <MapPin className="w-4 h-4" />
            КОНТАКТЫ
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Найдите нас в самом
            <span className="block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              сердце Екатеринбурга
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Мы расположены в центре города для вашего удобства. 
            Приезжайте на тест-драйв или консультацию в любое удобное время.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Левая колонка - Контактная информация */}
          <div className="space-y-8">
            {/* Табы */}
            <div className="flex gap-2 bg-gray-800/50 p-2 rounded-2xl backdrop-blur-sm">
              <button
                onClick={() => setActiveTab('info')}
                className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === 'info'
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                Контакты
              </button>
              <button
                onClick={() => setActiveTab('hours')}
                className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === 'hours'
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                Режим работы
              </button>
            </div>

            {/* Контент табов */}
            {activeTab === 'info' && (
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-r from-gray-800/80 to-gray-700/80 backdrop-blur-sm rounded-3xl p-6 hover:from-gray-700/80 hover:to-gray-600/80 transition-all duration-500 border border-gray-700/50 hover:border-blue-500/50"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      
                      <div className="flex-1">
                        <div className="text-sm text-blue-400 font-semibold mb-1">
                          {item.label}
                        </div>
                        <div className="text-xl font-bold text-white mb-1">
                          {item.value}
                        </div>
                        <div className="text-gray-400 text-sm mb-3">
                          {item.description}
                        </div>
                        <button className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                          {item.action}
                          <Navigation className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Градиентная линия */}
                    <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'hours' && (
              <div className="bg-gradient-to-r from-gray-800/80 to-gray-700/80 backdrop-blur-sm rounded-3xl p-6 border border-gray-700/50">
                <div className="space-y-4">
                  {workingHours.map((schedule, index) => (
                    <div
                      key={index}
                      className={`flex justify-between items-center py-3 px-4 rounded-xl transition-all duration-300 ${
                        schedule.isToday
                          ? 'bg-gradient-to-r from-blue-600/20 to-blue-700/20 border border-blue-500/30'
                          : 'hover:bg-gray-700/50'
                      }`}
                    >
                      <span className={`font-semibold ${schedule.isToday ? 'text-blue-400' : 'text-white'}`}>
                        {schedule.day}
                        {schedule.isToday && (
                          <span className="ml-2 px-2 py-1 bg-blue-600 text-white text-xs rounded-full">
                            Сегодня
                          </span>
                        )}
                      </span>
                      <span className={`font-mono ${schedule.isToday ? 'text-blue-300' : 'text-gray-300'}`}>
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-600/50">
                  <div className="flex items-center gap-3 text-green-400">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="font-semibold">Сейчас открыто</span>
                  </div>
                  <p className="text-gray-400 text-sm mt-1">
                    Закрываемся в 20:00
                  </p>
                </div>
              </div>
            )}

            {/* Быстрые действия */}
            <div className="grid grid-cols-2 gap-4">
              <button className="group relative bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
                <div className="flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  Позвонить
                </div>
              </button>
              <button className="group relative bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-2xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
                <div className="flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  Записаться
                </div>
              </button>
            </div>
          </div>

          {/* Правая колонка - Интерактивная карта */}
          <div className="relative">
            <div className="sticky top-24">
              <div className="bg-gradient-to-r from-gray-800/80 to-gray-700/80 backdrop-blur-sm rounded-3xl p-6 border border-gray-700/50">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">Наше местоположение</h3>
                  <div className="flex items-center gap-2 text-green-400">
                    <Star className="w-5 h-5 fill-current" />
                    <span className="font-semibold">4.9</span>
                  </div>
                </div>

                {/* Симуляция карты */}
                <div className="relative h-80 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl overflow-hidden mb-6">
                  {/* Карта-заглушка с стилизацией */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-green-900/20">
                    <div className="absolute inset-0 opacity-30">
                      {/* Симуляция дорог */}
                      <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-400"></div>
                      <div className="absolute top-0 left-1/2 w-1 h-full bg-gray-400"></div>
                      <div className="absolute top-1/4 left-0 w-full h-px bg-gray-500"></div>
                      <div className="absolute top-3/4 left-0 w-full h-px bg-gray-500"></div>
                    </div>
                    
                    {/* Маркер BMW салона */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="relative">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                          <Car className="w-4 h-4 text-white" />
                        </div>
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-3 py-1 rounded-lg text-sm font-semibold whitespace-nowrap">
                          BMW Екатеринбург
                        </div>
                      </div>
                    </div>

                    {/* Декоративные точки */}
                    {[...Array(10)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-white/30 rounded-full"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`
                        }}
                      />
                    ))}
                  </div>

                  {/* Оверлей с информацией */}
                  <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-white font-semibold">Центр города</div>
                        <div className="text-blue-400 text-sm">5 мин от плотинки</div>
                      </div>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-300">
                        Маршрут
                      </button>
                    </div>
                  </div>
                </div>

                {/* Дополнительная информация */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-700/50 rounded-xl">
                    <div className="text-2xl font-bold text-blue-400 mb-1">50+</div>
                    <div className="text-gray-300 text-sm">парковочных мест</div>
                  </div>
                  <div className="text-center p-4 bg-gray-700/50 rounded-xl">
                    <div className="text-2xl font-bold text-green-400 mb-1">2</div>
                    <div className="text-gray-300 text-sm">минуты от метро</div>
                  </div>
                </div>

                {/* Кнопка построения маршрута */}
                <button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
                  <div className="flex items-center justify-center gap-2">
                    <Navigation className="w-5 h-5" />
                    Построить маршрут
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;