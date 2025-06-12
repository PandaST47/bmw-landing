import React, { useState, useEffect } from 'react';
import { 
  Car, 
  Award, 
  Wrench, 
  RefreshCw, 
  CreditCard, 
  Shield,
  ArrowRight,
  Check,
  Star,
  Sparkles,
  Zap
} from 'lucide-react';

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      id: 1,
      icon: Car,
      title: "Продажа новых автомобилей",
      description: "Полная линейка BMW в наличии с персональным подходом",
      features: ["Официальная гарантия BMW", "Широкий выбор комплектаций", "Быстрое оформление документов"],
      color: "from-blue-400 via-blue-500 to-blue-600",
      shadowColor: "shadow-blue-500/25",
      accentColor: "bg-blue-500"
    },
    {
      id: 2,
      icon: Award,
      title: "Сертифицированные б/у",
      description: "Программа BMW Premium Selection с гарантией качества",
      features: ["Многоэтапная проверка качества", "Полная история автомобиля", "Расширенная гарантия до 2 лет"],
      color: "from-emerald-400 via-emerald-500 to-emerald-600",
      shadowColor: "shadow-emerald-500/25",
      accentColor: "bg-emerald-500"
    },
    {
      id: 3,
      icon: Wrench,  
      title: "Сервисное обслуживание",
      description: "Профессиональный сервис с оригинальными запчастями BMW",
      features: ["Только оригинальные детали BMW", "Сертифицированные мастера", "Современная диагностика"],
      color: "from-orange-400 via-orange-500 to-orange-600",
      shadowColor: "shadow-orange-500/25",
      accentColor: "bg-orange-500"
    },
    {
      id: 4,
      icon: RefreshCw,
      title: "Trade-in программа",
      description: "Выгодный обмен вашего автомобиля на новый BMW",
      features: ["Честная рыночная оценка", "Моментальное оформление", "Максимальная выгода"],
      color: "from-purple-400 via-purple-500 to-purple-600",
      shadowColor: "shadow-purple-500/25",
      accentColor: "bg-purple-500"
    },
    {
      id: 5,
      icon: CreditCard,
      title: "Финансовые решения",
      description: "Кредитные и лизинговые программы на выгодных условиях",
      features: ["Ставка от 0.1% годовых", "Без первоначального взноса", "Решение за 15 минут"],
      color: "from-red-400 via-red-500 to-red-600",
      shadowColor: "shadow-red-500/25",
      accentColor: "bg-red-500"
    },
    {
      id: 6,
      icon: Shield,
      title: "Страховые услуги",
      description: "Комплексная защита вашего BMW от всех рисков",
      features: ["КАСКО и ОСАГО со скидками", "Защита от угона и ущерба", "Быстрое урегулирование"],
      color: "from-teal-400 via-teal-500 to-teal-600",
      shadowColor: "shadow-teal-500/25",
      accentColor: "bg-teal-500"
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Заголовок секции */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-20 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-30 animate-pulse"></div>
            <div className="relative w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
              <Sparkles className="w-10 h-10 text-white animate-pulse" />
            </div>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Премиальные услуги
            <span className="block bg-gradient-to-r from-blue-400 via-blue-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
              BMW
            </span>
          </h2>
          
          <div className="relative max-w-4xl mx-auto">
            <p className="text-xl lg:text-2xl text-blue-100/90 leading-relaxed font-light">
              Полный спектр услуг премиум-класса от официального дилера BMW — 
              ваш путь к совершенству начинается здесь
            </p>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full"></div>
          </div>
        </div>

        {/* Сетка услуг */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isHovered = hoveredService === service.id;
            
            return (
              <div
                key={service.id}
                className={`group cursor-pointer transform transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
                } ${
                  isHovered ? 'scale-105 z-20' : 'hover:scale-102 z-10'
                }`}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                style={{
                  transitionDelay: `${index * 150}ms`
                }}
              >
                <div className={`
                  relative bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden h-full
                  border border-white/20 hover:border-white/30
                  transition-all duration-500 hover:shadow-2xl ${service.shadowColor}
                  ${isHovered ? 'bg-white/15 border-white/40' : ''}
                `}>
                  
                  {/* Градиентный акцент сверху */}
                  <div className={`h-1 bg-gradient-to-r ${service.color}`}></div>
                  
                  {/* Светящийся эффект при наведении */}
                  <div className={`
                    absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 
                    transition-opacity duration-500 ${isHovered ? 'opacity-10' : ''}
                  `}></div>
                  
                  <div className="relative z-10 p-8">
                    {/* Иконка с анимацией */}
                    <div className="relative mb-8">
                      <div className={`
                        absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl blur-lg 
                        opacity-0 group-hover:opacity-40 transition-all duration-500
                        ${isHovered ? 'scale-110' : ''}
                      `}></div>
                      <div className={`
                        relative w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl 
                        flex items-center justify-center transform transition-all duration-500
                        ${isHovered ? 'scale-110 rotate-3' : 'group-hover:scale-105'}
                      `}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Контент */}
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-100 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-blue-100/80 mb-8 leading-relaxed text-lg">
                      {service.description}
                    </p>

                    {/* Особенности с анимацией */}
                    <ul className="space-y-4 mb-10">
                      {service.features.map((feature, featureIndex) => (
                        <li 
                          key={featureIndex}
                          className={`
                            flex items-center space-x-4 transform transition-all duration-500
                            ${isHovered ? 'translate-x-2' : ''}
                          `}
                          style={{
                            transitionDelay: `${featureIndex * 100 + 200}ms`
                          }}
                        >
                          <div className={`
                            relative w-6 h-6 rounded-full bg-gradient-to-r ${service.color} 
                            flex items-center justify-center flex-shrink-0
                            ${isHovered ? 'scale-110 shadow-lg' : ''}
                            transition-all duration-300
                          `}>
                            <Check className="w-3.5 h-3.5 text-white" />
                            <div className={`
                              absolute inset-0 bg-gradient-to-r ${service.color} rounded-full 
                              blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-300
                            `}></div>
                          </div>
                          <span className="text-blue-100/90 font-medium">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Кнопка с продвинутой анимацией */}
                    <button className={`
                      group/btn relative w-full overflow-hidden
                      bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm
                      border border-white/20 hover:border-white/40
                      rounded-2xl py-4 px-6 font-semibold text-white
                      transition-all duration-500 transform hover:scale-105
                      ${isHovered ? 'shadow-2xl shadow-white/20' : ''}
                    `}>
                      <div className={`
                        absolute inset-0 bg-gradient-to-r ${service.color} 
                        transform scale-x-0 group-hover/btn:scale-x-100 
                        transition-transform duration-500 origin-left
                      `}></div>
                      
                      <div className="relative flex items-center justify-center space-x-3">
                        <span className="text-lg">Узнать подробнее</span>
                        <ArrowRight className="w-6 h-6 transform transition-all duration-300 group-hover/btn:translate-x-2 group-hover/btn:scale-110" />
                      </div>
                    </button>
                  </div>

                  {/* Декоративный элемент */}
                  <div className="absolute top-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                    <IconComponent className="w-32 h-32 text-white" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA секция с улучшенным дизайном */}
        <div className={`mt-24 transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <div className="relative bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20 overflow-hidden">
            {/* Анимированный фон */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-blue-500/20 to-blue-600/20 animate-pulse"></div>
              <div className="absolute top-0 left-0 w-full h-full">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full border border-white/10 animate-pulse"
                    style={{
                      width: `${120 + i * 40}px`,
                      height: `${120 + i * 40}px`,
                      top: `${20 + i * 15}%`,
                      left: `${10 + i * 15}%`,
                      animationDelay: `${i * 0.5}s`,
                      animationDuration: `${3 + i * 0.5}s`
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="relative z-10 text-center">
              {/* Звезды рейтинга */}
              <div className="flex justify-center mb-8">
                <div className="flex space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-8 h-8 text-yellow-400 fill-current animate-pulse" 
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
              </div>
              
              <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Готовы к премиальному
                <span className="block pb-1 bg-gradient-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent">
                  обслуживанию BMW?
                </span>
              </h3>
              
              <p className="text-xl lg:text-2xl text-blue-100/90 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                Доверьте свой BMW профессионалам высшего класса. 
                Запишитесь на персональную консультацию и откройте мир безграничных возможностей.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/40">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span className="relative flex items-center space-x-3">
                    <Zap className="w-6 h-6" />
                    <span>Записаться на консультацию</span>
                  </span>
                </button>
                
                <button className="group relative overflow-hidden border-2 border-white/30 hover:border-white/60 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-105 backdrop-blur-sm hover:bg-white/10">
                  <span className="relative flex items-center space-x-3">
                    <span>Позвонить сейчас</span>
                    <ArrowRight className="w-6 h-6 transform transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
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