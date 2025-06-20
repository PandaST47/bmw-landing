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
  Zap,
  X
} from 'lucide-react';
import CallbackModal from './CallBackModal';

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [isCallbackModalOpen, setIsCallbackModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  useEffect(() => {
    const header = document.querySelector('header');
    if (header) {
      header.style.transition = 'opacity 0.3s ease, z-index 0.3s ease';
      if (isCallbackModalOpen) {
        header.style.opacity = '0';
        header.style.zIndex = '10';
      } else {
        header.style.opacity = '1';
        header.style.zIndex = '50';
      }
    }

    if (isCallbackModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      if (header) {
        header.style.opacity = '1';
        header.style.zIndex = '50';
        header.style.transition = '';
      }
      document.body.style.overflow = 'unset';
    };
  }, [isCallbackModalOpen]);

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  const handleConsultationClick = () => {
    closeModal();
    setIsCallbackModalOpen(true);
  };

  const services = [
    {
      id: 1,
      icon: Car,
      title: "Продажа новых автомобилей",
      description: "Полная линейка BMW в наличии с персональным подходом",
      features: ["Официальная гарантия BMW", "Широкий выбор комплектаций", "Быстрое оформление документов"],
      color: "from-blue-400 via-blue-500 to-blue-600",
      shadowColor: "shadow-blue-500/25",
      accentColor: "bg-blue-500",
      details: "Наш дилерский центр предлагает полный модельный ряд BMW, включая последние новинки и эксклюзивные комплектации. Мы гарантируем индивидуальный подход к каждому клиенту, помогая подобрать идеальный автомобиль, соответствующий вашим потребностям и стилю жизни. Наши специалисты проведут вас через весь процесс покупки, от выбора модели до оформления документов, обеспечивая максимальный комфорт и уверенность в вашем выборе."
    },
    {
      id: 2,
      icon: Award,
      title: "Сертифицированные б/у",
      description: "Программа BMW Premium Selection с гарантией качества",
      features: ["Многоэтапная проверка качества", "Полная история автомобиля", "Расширенная гарантия до 2 лет"],
      color: "from-emerald-400 via-emerald-500 to-emerald-600",
      shadowColor: "shadow-emerald-500/25",
      accentColor: "bg-emerald-500",
      details: "Программа BMW Premium Selection предлагает тщательно отобранные автомобили с пробегом, прошедшие строгую проверку по 72 пунктам. Каждый автомобиль сопровождается полной историей обслуживания и гарантией до 2 лет. Мы предлагаем только те автомобили, которые соответствуют высочайшим стандартам BMW, обеспечивая вам уверенность и спокойствие при покупке."
    },
    {
      id: 3,
      icon: Wrench,  
      title: "Сервисное обслуживание",
      description: "Профессиональный сервис с оригинальными запчастями BMW",
      features: ["Только оригинальные детали BMW", "Сертифицированные мастера", "Современная диагностика"],
      color: "from-orange-400 via-orange-500 to-orange-600",
      shadowColor: "shadow-orange-500/25",
      accentColor: "bg-orange-500",
      details: "Наш сервисный центр оснащен самым современным оборудованием и укомплектован сертифицированными мастерами BMW. Мы используем исключительно оригинальные запчасти и следуем строгим стандартам производителя, чтобы ваш автомобиль всегда был в идеальном состоянии. Регулярное обслуживание у нас гарантирует сохранение заводской гарантии и высокую остаточную стоимость вашего BMW."
    },
    {
      id: 4,
      icon: RefreshCw,
      title: "Trade-in программа",
      description: "Выгодный обмен вашего автомобиля на новый BMW",
      features: ["Честная рыночная оценка", "Моментальное оформление", "Максимальная выгода"],
      color: "from-purple-400 via-purple-500 to-purple-600",
      shadowColor: "shadow-purple-500/25",
      accentColor: "bg-purple-500",
      details: "Наша программа Trade-in позволяет вам легко и выгодно обменять ваш текущий автомобиль на новый BMW. Мы предлагаем честную рыночную оценку вашего автомобиля и быстрое оформление сделки. Наши специалисты помогут вам максимизировать выгоду от обмена, предлагая лучшие условия и специальные предложения."
    },
    {
      id: 5,
      icon: CreditCard,
      title: "Финансовые решения",
      description: "Кредитные и лизинговые программы на выгодных условиях",
      features: ["Ставка от 0.1% годовых", "Без первоначального взноса", "Решение за 15 минут"],
      color: "from-red-400 via-red-500 to-red-600",
      shadowColor: "shadow-red-500/25",
      accentColor: "bg-red-500",
      details: "Мы предлагаем широкий спектр финансовых решений, включая кредитные и лизинговые программы, разработанные специально для клиентов BMW. Наши программы предлагают конкурентные ставки, гибкие условия и быстрое одобрение. Наши финансовые консультанты помогут вам выбрать наилучший вариант, соответствующий вашим финансовым целям и возможностям."
    },
    {
      id: 6,
      icon: Shield,
      title: "Страховые услуги",
      description: "Комплексная защита вашего BMW от всех рисков",
      features: ["КАСКО и ОСАГО со скидками", "Защита от угона и ущерба", "Быстрое урегулирование"],
      color: "from-teal-400 via-teal-500 to-teal-600",
      shadowColor: "shadow-teal-500/25",
      accentColor: "bg-teal-500",
      details: "Наши страховые услуги обеспечивают полную защиту вашего BMW от всех возможных рисков. Мы предлагаем специальные условия на КАСКО и ОСАГО, а также дополнительные опции для защиты от угона и ущерба. Наши партнеры-страховщики гарантируют быстрое и справедливое урегулирование любых страховых случаев."
    }
  ];

  return (
    <section id="services" className="relative py-24 overflow-hidden">
      {/* Модальное окно с уменшенным размером */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm transition-opacity duration-300 p-4"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="relative bg-white/10 backdrop-blur-lg rounded-3xl max-w-2xl w-full max-h-[80vh] overflow-hidden border border-white/20 transform transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Кнопка закрытия */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:text-blue-200 transition-all duration-300 border border-white/20"
            >
              <X className="w-5 h-5" />
            </button>
            
            {/* Прокручиваемый контент */}
            <div className="overflow-y-auto max-h-[80vh] custom-scrollbar">
              <div className="p-6 sm:p-8">
                {selectedService && (
                  <div>
                    {/* Заголовок с иконкой */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                      <div className={`
                        w-16 h-16 bg-gradient-to-r ${selectedService.color} 
                        rounded-2xl flex items-center justify-center flex-shrink-0
                      `}>
                        <selectedService.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 break-words">
                          {selectedService.title}
                        </h2>
                        <p className="text-blue-100/90 text-base">
                          {selectedService.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Особенности */}
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                        <Star className="w-5 h-5 text-yellow-400" />
                        Особенности
                      </h3>
                      <div className="grid grid-cols-1 gap-3">
                        {selectedService.features.map((feature, index) => (
                          <div key={index} className="flex items-start space-x-3 p-3 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                            <div className={`
                              w-6 h-6 rounded-full bg-gradient-to-r ${selectedService.color} 
                              flex items-center justify-center flex-shrink-0 mt-0.5
                            `}>
                              <Check className="w-3.5 h-3.5 text-white" />
                            </div>
                            <span className="text-blue-100/90 text-sm leading-relaxed">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Подробная информация */}
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                        <Sparkles className="w-5 h-5 text-blue-400" />
                        Подробная информация
                      </h3>
                      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                        <p className="text-blue-100/90 text-sm leading-relaxed">
                          {selectedService.details}
                        </p>
                      </div>
                    </div>
                    
                    {/* Кнопки действий */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button 
                        onClick={handleConsultationClick}
                        className={`
                          flex-1 bg-gradient-to-r ${selectedService.color} 
                          hover:shadow-2xl hover:shadow-blue-500/25
                          rounded-2xl py-3 px-4 font-semibold text-white
                          transition-all duration-300 transform hover:scale-[1.02]
                          flex items-center justify-center gap-2
                        `}
                      >
                        <span className="text-sm">Записаться на консультацию</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={closeModal}
                        className="px-4 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 rounded-2xl text-white font-semibold transition-all duration-300 text-sm"
                      >
                        Закрыть
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

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
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Премиальные услуги
            <span className="block bg-gradient-to-r from-blue-400 via-blue-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
              BMW
            </span>
          </h2>
          
          <div className="relative max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl lg:text-2xl text-blue-100/90 leading-relaxed font-light">
              Полный спектр услуг премиум-класса от официального дилера BMW — 
              ваш путь к совершенству начинается здесь
            </p>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`
                  relative bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden h-full
                  border border-white/20 hover:border-white/30
                  transition-all duration-500 hover:shadow-2xl ${service.shadowColor}
                  ${isHovered ? 'bg-white/15 border-white/40' : ''}
                `}>
                  <div className={`h-1 bg-gradient-to-r ${service.color}`}></div>
                  <div className={`
                    absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 
                    transition-opacity duration-500 ${isHovered ? 'opacity-10' : ''}
                  `}></div>
                  
                  <div className="relative z-10 p-6 sm:p-8 flex flex-col h-full">
                    <div className="relative mb-6 sm:mb-8">
                      <div className={`
                        absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl blur-lg 
                        opacity-0 group-hover:opacity-40 transition-all duration-500
                        ${isHovered ? 'scale-110' : ''}
                      `}></div>
                      <div className={`
                        relative w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r ${service.color} rounded-2xl 
                        flex items-center justify-center transform transition-all duration-500
                        ${isHovered ? 'scale-110 rotate-3' : 'group-hover:scale-105'}
                      `}>
                        <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-blue-100 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-blue-100/80 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg">
                      {service.description}
                    </p>

                    <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-grow">
                      {service.features.map((feature, featureIndex) => (
                        <li 
                          key={featureIndex}
                          className={`
                            flex items-center space-x-3 sm:space-x-4 transform transition-all duration-500
                            ${isHovered ? 'translate-x-2' : ''}
                          `}
                          style={{ transitionDelay: `${featureIndex * 100 + 200}ms` }}
                        >
                          <div className={`
                            relative w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r ${service.color} 
                            flex items-center justify-center flex-shrink-0
                            ${isHovered ? 'scale-110 shadow-lg' : ''}
                            transition-all duration-300
                          `}>
                            <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
                            <div className={`
                              absolute inset-0 bg-gradient-to-r ${service.color} rounded-full 
                              blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-300
                            `}></div>
                          </div>
                          <span className="text-blue-100/90 font-medium text-sm sm:text-base">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <button 
                      onClick={() => openModal(service)}
                      className={`
                        group/btn relative w-full overflow-hidden
                        bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm
                        border border-white/20 hover:border-white/40
                        rounded-2xl py-3 sm:py-4 px-4 sm:px-6 font-semibold text-white
                        transition-all duration-500 transform hover:scale-105
                        ${isHovered ? 'shadow-2xl shadow-white/20' : ''}
                        mt-auto
                      `}
                    >
                      <div className={`
                        absolute inset-0 bg-gradient-to-r ${service.color} 
                        transform scale-x-0 group-hover/btn:scale-x-100 
                        transition-transform duration-500 origin-left
                      `}></div>
                      <div className="relative flex items-center justify-center space-x-3">
                        <span className="text-base sm:text-lg">Узнать подробнее</span>
                        <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 transform transition-all duration-300 group-hover/btn:translate-x-2 group-hover/btn:scale-110" />
                      </div>
                    </button>
                  </div>

                  <div className="absolute top-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                    <IconComponent className="w-24 h-24 sm:w-32 sm:h-32 text-white" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <CallbackModal 
        isOpen={isCallbackModalOpen} 
        onClose={() => setIsCallbackModalOpen(false)} 
      />

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </section>
  );
};

export default Services;