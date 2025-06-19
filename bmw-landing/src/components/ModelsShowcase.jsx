import React, { useState, useEffect } from 'react';
import { ArrowRight, Zap, Fuel, Users, Luggage, ChevronRight, Star, Heart, Sparkles, Trophy, Gem, Play, Clock, Award, Shield, Flame } from 'lucide-react';
import CallbackModal from './CallBackModal';

const ModelsShowcase = () => {
  const [hoveredModel, setHoveredModel] = useState(null);
  const [favoriteModels, setFavoriteModels] = useState(new Set());
  const [animateCards, setAnimateCards] = useState(false);
  const [selectedModel, setSelectedModel] = useState(null);
  const [isCallbackModalOpen, setIsCallbackModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateCards(true), 100);
    return () => clearTimeout(timer);
  }, []);

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

  const models = [
    {
      id: 1,
      name: 'BMW 3 Series',
      category: 'Седан',
      image: 'images/models/bmw-3-series.jpg',
      priceFrom: 2890000,
      features: ['Спортивная динамика', 'Премиальный комфорт', 'Интеллектуальные системы', 'Экономичность'],
      specs: {
        power: '184-374 л.с.',
        fuel: '6.1-8.5 л/100км',
        seats: 5,
        trunk: 480
      },
      highlight: 'Бестселлер',
      color: 'from-blue-500 to-blue-600',
      accentColor: 'blue',
      badge: 'ХИТ ПРОДАЖ',
      acceleration: '5.8 сек',
      maxSpeed: '250 км/ч'
    },
    {
      id: 2,
      name: 'BMW 5 Series',
      category: 'Бизнес-седан',
      image: 'images/models/bmw-5-series.jpg',
      priceFrom: 4290000,
      features: ['Исполнительный класс', 'Передовые технологии', 'Максимальный комфорт', 'Престиж'],
      specs: {
        power: '184-530 л.с.',
        fuel: '5.8-9.2 л/100км',
        seats: 5,
        trunk: 530
      },
      highlight: 'Премиум',
      color: 'from-purple-500 to-purple-600',
      accentColor: 'purple',
      badge: 'ПРЕМИУМ',
      acceleration: '4.4 сек',
      maxSpeed: '250 км/ч'
    },
    {
      id: 3,
      name: 'BMW X3',
      category: 'Компактный SAV',
      image: 'images/models/bmw-x3.jpg',
      priceFrom: 4590000,
      features: ['Универсальность', 'Полный привод xDrive', 'Высокая посадка', 'Активный отдых'],
      specs: {
        power: '184-510 л.с.',
        fuel: '7.1-10.3 л/100км',
        seats: 5,
        trunk: 550
      },
      highlight: 'Популярный',
      color: 'from-emerald-500 to-emerald-600',
      accentColor: 'emerald',
      badge: 'ВЫБОР СЕМЬИ',
      acceleration: '6.3 сек',
      maxSpeed: '230 км/ч'
    },
    {
      id: 4,
      name: 'BMW X5',
      category: 'Премиальный SAV',
      image: 'images/models/bmw-x5.jpg',
      priceFrom: 6790000,
      features: ['Роскошь и мощь', 'Пневмоподвеска', 'Панорамная крыша', 'Бездорожье'],
      specs: {
        power: '249-530 л.с.',
        fuel: '7.9-11.1 л/100км',
        seats: 7,
        trunk: 650
      },
      highlight: 'Флагман',
      color: 'from-orange-500 to-orange-600',
      accentColor: 'orange',
      badge: 'ФЛАГМАН',
      acceleration: '4.8 сек',
      maxSpeed: '250 км/ч'
    },
    {
      id: 5,
      name: 'BMW iX',
      category: 'Электрический SAV',
      image: 'images/models/bmw-ix.jpg',
      priceFrom: 7890000,
      features: ['Будущее сегодня', 'Запас хода 630 км', 'Быстрая зарядка', 'Экологичность'],
      specs: {
        power: '326-523 л.с.',
        fuel: '19.8-21.4 кВт⋅ч/100км',
        seats: 5,
        trunk: 500
      },
      highlight: 'Инновация',
      color: 'from-green-500 to-green-600',
      accentColor: 'green',
      badge: 'БУДУЩЕЕ',
      acceleration: '4.6 сек',
      maxSpeed: '200 км/ч'
    },
    {
      id: 6,
      name: 'BMW M2',
      category: 'Спортивное купе',
      image: 'images/models/bmw-m2.jpg',
      priceFrom: 5690000,
      features: ['Чистый драйв', 'Задний привод', 'M Performance', 'Трек-фокус'],
      specs: {
        power: '460 л.с.',
        fuel: '10.1 л/100км',
        seats: 4,
        trunk: 390
      },
      highlight: 'Спорт',
      color: 'from-red-500 to-red-600',
      accentColor: 'red',
      badge: 'PURE SPORT',
      acceleration: '4.1 сек',
      maxSpeed: '250 км/ч'
    },
  ];

  const getIcon = (type) => {
    switch (type) {
      case 'power': return Zap;
      case 'fuel': return Fuel;
      case 'seats': return Users;
      case 'trunk': return Luggage;
      default: return Zap;
    }
  };

  const toggleFavorite = (modelId, e) => {
    e.stopPropagation();
    setFavoriteModels(prev => {
      const newSet = new Set(prev);
      if (newSet.has(modelId)) {
        newSet.delete(modelId);
      } else {
        newSet.add(modelId);
      }
      return newSet;
    });
  };

  const getHighlightIcon = (highlight) => {
    switch (highlight) {
      case 'Бестселлер': return Trophy;
      case 'Премиум': return Gem;
      case 'Флагман': return Crown;
      case 'Инновация': return Sparkles;
      case 'Спорт': return Flame;
      default: return Star;
    }
  };

  const Crown = ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 6L13.13 9.09L16.5 6.5L15.28 10.09L19 9L16.91 12.09L20 13L16.91 15.91L19 17L15.28 15.91L16.5 19.5L13.13 16.91L12 20L10.87 16.91L7.5 19.5L8.72 15.91L5 17L8.09 15.91L4 13L8.09 12.09L5 9L8.72 10.09L7.5 6.5L10.87 9.09L12 6Z"/>
    </svg>
  );

  return (
    <section id="models" className="relative py-20 overflow-hidden">
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-white/20 via-blue-500/30 to-white/20 backdrop-blur-xl border border-white/30 text-white px-8 py-4 rounded-full text-sm font-semibold mb-8 shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <Star className="w-5 h-5 text-yellow-400 animate-spin" style={{ animationDuration: '3s' }} />
            ПРЕМИАЛЬНАЯ КОЛЛЕКЦИЯ
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent animate-pulse">
              Полная линейка
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 bg-clip-text text-transparent">
              BMW в наличии
            </span>
          </h2>
          
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Откройте для себя мир безграничных возможностей с нашей эксклюзивной коллекцией 
            седанов, кроссоверов и спортивных автомобилей BMW. Каждая модель — это воплощение 
            инноваций и совершенства.
          </p>

          {/* Stats counter */}
          <div className="flex justify-center gap-8 mt-12">
            {[
              { number: '6+', label: 'Моделей в наличии' },
              { number: '100%', label: 'Оригинальное качество' },
              { number: '24/7', label: 'Поддержка клиентов' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-sm text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {models.map((model, index) => {
            const HighlightIcon = getHighlightIcon(model.highlight);
            const isFavorite = favoriteModels.has(model.id);
            const isHovered = hoveredModel === model.id;
            
            return (
              <div
                key={model.id}
                className={`relative transform transition-all duration-700 ${
                  animateCards ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Background glow effect - only visible on hover */}
                <div className={`absolute inset-0 rounded-3xl transition-opacity duration-500 -z-10 ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${model.color} blur-xl scale-110 opacity-50`} />
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${model.color} blur-2xl scale-125 opacity-30`} />
                </div>

                <div 
                  className={`group relative cursor-pointer bg-gradient-to-br from-white/15 via-white/8 to-white/5 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/20 transition-all duration-500 hover:border-white/40 hover:shadow-blue-500/30 hover:shadow-3xl hover:scale-105 hover:-translate-y-4`}
                  onMouseEnter={() => setHoveredModel(model.id)}
                  onMouseLeave={() => setHoveredModel(null)}
                  onClick={() => setSelectedModel(model)}
                >
                  {/* Image Section */}
                  <div className="relative overflow-hidden h-56 group">
                    <img
                      src={model.image}
                      alt={model.name}
                      className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-120 group-hover:rotate-1"
                    />
                    
                    {/* Gradient overlays for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/40" />

                    {/* Enhanced badge with animation */}
                    <div className={`absolute top-4 left-4 bg-gradient-to-r ${model.color} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2 backdrop-blur-sm transform group-hover:scale-110 transition-transform duration-300 animate-pulse`}>
                      <HighlightIcon size={14} className="animate-bounce" />
                      {model.badge || model.highlight}
                    </div>

                    {/* Animated price badge */}
                    <div className="absolute top-4 right-4 bg-black/90 backdrop-blur-lg text-white px-4 py-2 rounded-full text-sm font-bold border border-white/30 shadow-xl transform group-hover:scale-110 transition-all duration-300 hover:bg-white/10">
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-400">₽</span>
                        <span>от {(model.priceFrom / 1000000).toFixed(1)} млн</span>
                      </div>
                    </div>

                    {/* Performance indicators */}
                    <div className="absolute bottom-4 left-4 flex gap-2">
                      <div className="bg-black/80 backdrop-blur-lg text-white px-3 py-1 rounded-full text-xs font-bold border border-white/20 flex items-center gap-1">
                        <Zap size={12} className="text-yellow-400" />
                        {model.acceleration}
                      </div>
                      <div className="bg-black/80 backdrop-blur-lg text-white px-3 py-1 rounded-full text-xs font-bold border border-white/20 flex items-center gap-1">
                        <Clock size={12} className="text-blue-400" />
                        {model.maxSpeed}
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Content Section */}
                  <div className="p-6 space-y-5">
                    {/* Header with status indicator */}
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                          {model.name}
                        </h3>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-blue-200 bg-white/10 px-3 py-1 rounded-full border border-white/20">
                            {model.category}
                          </span>
                          <div className="flex items-center gap-1 text-xs text-green-400">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                            В наличии
                          </div>
                        </div>
                      </div>
                      <div className={`w-4 h-4 bg-gradient-to-r ${model.color} rounded-full shadow-lg animate-pulse`} />
                    </div>

                    {/* Enhanced Features with icons */}
                    <div className="space-y-3">
                      <p className="text-white/90 text-sm font-medium flex items-center gap-2">
                        <Award size={16} className="text-blue-400" />
                        Ключевые особенности:
                      </p>
                      <div className="grid grid-cols-1 gap-2">
                        {model.features.slice(0, 3).map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 text-xs text-blue-100 bg-white/10 px-3 py-2 rounded-lg border border-white/20 backdrop-blur-lg hover:bg-white/20 transition-all duration-300 group/feature"
                          >
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover/feature:animate-pulse" />
                            <span className="group-hover/feature:text-white transition-colors duration-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Enhanced Specifications Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      {Object.entries(model.specs).map(([key, value]) => {
                        const IconComponent = getIcon(key);
                        const labels = {
                          power: 'Мощность',
                          fuel: 'Расход',
                          seats: 'Места',
                          trunk: 'Багажник'
                        };
                        
                        return (
                          <div 
                            key={key} 
                            className="bg-white/8 backdrop-blur-lg rounded-xl p-4 border border-white/10 hover:border-white/30 transition-all duration-300 hover:bg-white/15 group/spec hover:scale-105"
                          >
                            <div className="flex items-center space-x-3">
                              <div className={`w-10 h-10 bg-gradient-to-r ${model.color}/40 rounded-lg flex items-center justify-center transition-all duration-300 group-hover/spec:scale-110 group-hover/spec:rotate-12`}>
                                <IconComponent size={18} className="text-white/90" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-xs text-blue-200 mb-1 font-medium">{labels[key]}</div>
                                <div className="text-sm font-bold text-white truncate group-hover/spec:text-blue-300 transition-colors duration-300">
                                  {key === 'trunk' ? `${value}л` : value}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Enhanced decorative elements */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-blue-400/40 to-transparent rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                  <div className="absolute -bottom-2 -left-2 w-10 h-10 bg-gradient-to-tr from-blue-500/30 to-transparent rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse" />
                  <div className="absolute top-1/2 right-0 w-1 h-12 bg-gradient-to-b from-transparent via-blue-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Bottom CTA Section */}
        <div className="text-center mt-20">
          <div className="relative bg-gradient-to-r from-white/15 via-blue-500/25 to-white/15 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/30 shadow-2xl overflow-hidden">
            
            {/* Enhanced background animations */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 animate-pulse" />
            <div className="absolute inset-0 bg-gradient-conic from-blue-500/5 via-purple-500/5 to-blue-500/5 animate-spin" style={{ animationDuration: '20s' }} />

            {/* Floating geometric shapes */}
            <div className="absolute top-8 left-8 w-4 h-4 border-2 border-white/20 rotate-45 animate-pulse" />
            <div className="absolute bottom-8 right-8 w-6 h-6 border-2 border-blue-400/30 rounded-full animate-bounce" />
            <div className="absolute top-1/2 left-4 w-3 h-3 bg-blue-400/50 rounded-full animate-ping" />

            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="flex items-center gap-3 text-blue-300 bg-white/10 px-6 py-3 rounded-full border border-white/20 backdrop-blur-lg">
                  <Gem size={24} className="animate-pulse" />
                  <span className="text-sm font-medium tracking-wide">ЭКСКЛЮЗИВНОЕ ПРЕДЛОЖЕНИЕ</span>
                  <Gem size={24} className="animate-pulse" />
                </div>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-pulse">
                Не нашли идеальную модель?
              </h3>
              
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Наши эксперты помогут подобрать идеальный BMW под ваши потребности и предпочтения
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button 
                  onClick={() => setIsCallbackModalOpen(true)}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-blue-500/50 hover:scale-110 hover:-translate-y-2 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <span className="relative z-10 flex items-center gap-3">
                    <Heart className="w-5 h-5 group-hover:fill-current transition-all duration-300" />
                    Получить консультацию
                    <ChevronRight size={20} className="transition-transform duration-300 group-hover:translate-x-2" />
                  </span>
                </button>
              </div>

              {/* Additional benefits */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                {[
                  { icon: Shield, title: 'Гарантия качества', desc: 'Официальная гарантия BMW' },
                  { icon: Clock, title: 'Быстрая доставка', desc: 'Доставка по всей России' },
                  { icon: Award, title: 'Лучшие цены', desc: 'Без переплат и скрытых комиссий' }
                ].map((benefit, idx) => (
                  <div key={idx} className="text-center group/benefit">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover/benefit:scale-110 transition-transform duration-300">
                      <benefit.icon size={24} className="text-blue-400 group-hover/benefit:animate-pulse" />
                    </div>
                    <h4 className="text-white font-bold mb-2 group-hover/benefit:text-blue-300 transition-colors duration-300">{benefit.title}</h4>
                    <p className="text-blue-200 text-sm">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <CallbackModal 
        isOpen={isCallbackModalOpen} 
        onClose={() => setIsCallbackModalOpen(false)} 
      />
    </section>
  );
};

export default ModelsShowcase;