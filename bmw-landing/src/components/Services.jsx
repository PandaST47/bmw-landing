import React, { useState } from 'react';
import { 
  Car, 
  Award, 
  Wrench, 
  RefreshCw, 
  CreditCard, 
  Shield,
  ArrowRight,
  Check,
  Star
} from 'lucide-react';

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 1,
      icon: Car,
      title: "Продажа новых автомобилей",
      description: "Полная линейка BMW в наличии",
      features: ["Официальная гарантия", "Выбор комплектаций", "Быстрое оформление"],
      color: "from-blue-500 to-blue-600",
      bgPattern: "bg-gradient-to-br from-blue-50 to-blue-100"
    },
    {
      id: 2,
      icon: Award,
      title: "Сертифицированные б/у",
      description: "Программа BMW Premium Selection",
      features: ["Проверка качества", "История автомобиля", "Гарантия до 2 лет"],
      color: "from-emerald-500 to-emerald-600",
      bgPattern: "bg-gradient-to-br from-emerald-50 to-emerald-100"
    },
    {
      id: 3,
      icon: Wrench,
      title: "Сервисное обслуживание",
      description: "Оригинальные запчасти и BMW сервис",
      features: ["Оригинальные детали", "Сертифицированные мастера", "Диагностика BMW"],
      color: "from-orange-500 to-orange-600",
      bgPattern: "bg-gradient-to-br from-orange-50 to-orange-100"
    },
    {
      id: 4,
      icon: RefreshCw,
      title: "Trade-in оценка",
      description: "Выгодный обмен вашего автомобиля",
      features: ["Честная оценка", "Быстрое оформление", "Доплата или скидка"],
      color: "from-purple-500 to-purple-600",
      bgPattern: "bg-gradient-to-br from-purple-50 to-purple-100"
    },
    {
      id: 5,
      icon: CreditCard,
      title: "Финансовые услуги",
      description: "Кредит и лизинг на выгодных условиях",
      features: ["От 0.1% годовых", "Без первого взноса", "Решение за 15 минут"],
      color: "from-red-500 to-red-600",
      bgPattern: "bg-gradient-to-br from-red-50 to-red-100"
    },
    {
      id: 6,
      icon: Shield,
      title: "Страхование",
      description: "Комплексная защита BMW",
      features: ["КАСКО и ОСАГО", "Защита от угона", "Быстрое урегулирование"],
      color: "from-teal-500 to-teal-600",
      bgPattern: "bg-gradient-to-br from-teal-50 to-teal-100"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Декоративные элементы фона */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mb-6">
            <Wrench className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Полный спектр услуг
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              BMW
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            От покупки автомобиля до полного сервисного обслуживания — 
            мы предоставляем все услуги премиум-класса в одном месте
          </p>
        </div>

        {/* Сетка услуг */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isHovered = hoveredService === service.id;
            
            return (
              <div
                key={service.id}
                className={`relative group cursor-pointer transform transition-all duration-500 hover:scale-105 ${
                  isHovered ? 'z-10' : 'z-0'
                }`}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Карточка услуги */}
                <div className={`
                  relative bg-white rounded-2xl shadow-lg hover:shadow-2xl 
                  transition-all duration-500 overflow-hidden h-full
                  ${isHovered ? 'shadow-2xl transform -translate-y-2' : ''}
                `}>
                  
                  {/* Градиентный фон */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${service.bgPattern}`}></div>
                  
                  {/* Декоративный элемент сверху */}
                  <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                  
                  <div className="relative z-10 p-8">
                    {/* Иконка */}
                    <div className={`
                      inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6
                      bg-gradient-to-r ${service.color} transform transition-all duration-500
                      ${isHovered ? 'scale-110 rotate-6' : ''}
                    `}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    {/* Заголовок и описание */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Особенности */}
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li 
                          key={featureIndex}
                          className="flex items-center space-x-3 transform transition-all duration-300"
                          style={{
                            transitionDelay: `${featureIndex * 100}ms`
                          }}
                        >
                          <div className={`
                            w-5 h-5 rounded-full bg-gradient-to-r ${service.color} 
                            flex items-center justify-center flex-shrink-0
                            ${isHovered ? 'scale-110' : ''}
                            transition-transform duration-300
                          `}>
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-gray-700 text-sm font-medium">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Кнопка действия */}
                    <button className={`
                      group/btn w-full flex items-center justify-center space-x-2 
                      py-4 px-6 rounded-xl font-semibold transition-all duration-300
                      bg-gray-900 hover:bg-black text-white
                      transform hover:scale-105 hover:shadow-lg
                    `}>
                      <span>Узнать подробнее</span>
                      <ArrowRight className="w-5 h-5 transform transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </button>
                  </div>

                  {/* Декоративные элементы */}
                  <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                    <IconComponent className="w-24 h-24 text-gray-900" />
                  </div>
                  
                  {/* Эффект свечения при hover */}
                  <div className={`
                    absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                    bg-gradient-to-r ${service.color} mix-blend-multiply
                  `} style={{ opacity: isHovered ? 0.05 : 0 }}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA секция */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-12 relative overflow-hidden">
            {/* Декоративные элементы */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
              <div className="absolute top-10 left-10 w-32 h-32 border border-white/10 rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-24 h-24 border border-white/10 rounded-full"></div>
            </div>

            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-4">
                Готовы обслуживать ваш BMW на высшем уровне?
              </h3>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Доверьте свой автомобиль профессионалам. Записывайтесь на консультацию 
                и узнайте обо всех наших услугах подробнее.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Записаться на консультацию
                </button>
                <button className="border-2 border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                  Позвонить сейчас
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;