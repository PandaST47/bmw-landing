import React, { useState } from 'react';
import { ArrowRight, Zap, Fuel, Users, Luggage, ChevronRight, Star, Heart, Sparkles, Trophy, Gem } from 'lucide-react';

const ModelsShowcase = () => {
  const [hoveredModel, setHoveredModel] = useState(null);
  const [favoriteModels, setFavoriteModels] = useState(new Set());

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
      accentColor: 'blue'
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
      accentColor: 'purple'
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
      accentColor: 'emerald'
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
      accentColor: 'orange'
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
      accentColor: 'green'
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
      accentColor: 'red'
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

  const toggleFavorite = (modelId) => {
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
      case 'Спорт': return Zap;
      default: return Star;
    }
  };

  const Crown = ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 6L13.13 9.09L16.5 6.5L15.28 10.09L19 9L16.91 12.09L20 13L16.91 15.91L19 17L15.28 15.91L16.5 19.5L13.13 16.91L12 20L10.87 16.91L7.5 19.5L8.72 15.91L5 17L8.09 15.91L4 13L8.09 12.09L5 9L8.72 10.09L7.5 6.5L10.87 9.09L12 6Z"/>
    </svg>
  );

  return (
    <section id="models" className="relative py-20">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-white/20 via-blue-500/30 to-white/20 backdrop-blur-xl border border-white/30 text-white px-8 py-4 rounded-full text-sm font-semibold mb-8 shadow-2xl">
            <Star className="w-5 h-5 text-yellow-400" />
            ПРЕМИАЛЬНАЯ КОЛЛЕКЦИЯ
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
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
        </div>

        {/* Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {models.map((model, index) => {
            const HighlightIcon = getHighlightIcon(model.highlight);
            
            return (
              <div
                key={model.id}
                className="group relative cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                onMouseEnter={() => setHoveredModel(model.id)}
                onMouseLeave={() => setHoveredModel(null)}
              >
                <div className="relative bg-gradient-to-br from-white/15 via-white/8 to-white/5 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/20 hover:border-white/40 transition-all duration-500 hover:shadow-blue-500/20 hover:shadow-3xl">
                  
                  {/* Subtle hover glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${model.color}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  {/* Image Section */}
                  <div className="relative overflow-hidden h-56 group">
                    <img
                      src={model.image}
                      alt={model.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${model.color}/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                    {/* Highlight Badge */}
                    <div className={`absolute top-4 left-4 bg-gradient-to-r ${model.color} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2 backdrop-blur-sm`}>
                      <HighlightIcon size={14} />
                      {model.highlight}
                    </div>

                    {/* Price Badge */}
                    <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-lg text-white px-4 py-2 rounded-full text-sm font-bold border border-white/20 shadow-xl">
                      от {(model.priceFrom / 1000000).toFixed(1)} млн ₽
                    </div>
                    
                    {/* Hover Action Overlay */}
                    <div className={`absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
                      hoveredModel === model.id ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}>
                      <div className="flex gap-3">
                        <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-xl font-bold flex items-center space-x-3 shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 group/btn">
                          <span>Подробнее</span>
                          <ChevronRight size={20} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 space-y-5">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{model.name}</h3>
                        <span className="text-sm text-blue-200 bg-white/10 px-3 py-1 rounded-full border border-white/20">
                          {model.category}
                        </span>
                      </div>
                      <div className={`w-4 h-4 bg-gradient-to-r ${model.color} rounded-full shadow-lg animate-pulse`} />
                    </div>

                    {/* Features */}
                    <div className="space-y-3">
                      <p className="text-white/90 text-sm font-medium flex items-center gap-2">
                        <Sparkles size={16} className="text-blue-400" />
                        Ключевые особенности:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {model.features.slice(0, 3).map((feature, idx) => (
                          <span
                            key={idx}
                            className="text-xs text-blue-100 bg-white/10 px-3 py-1.5 rounded-full border border-white/20 backdrop-blur-lg hover:bg-white/20 transition-colors duration-300"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Specifications Grid */}
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
                            className="bg-white/8 backdrop-blur-lg rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10 group/spec"
                          >
                            <div className="flex items-center space-x-3">
                              <div className={`w-10 h-10 bg-gradient-to-r ${model.color}/30 rounded-lg flex items-center justify-center transition-all duration-300 group-hover/spec:scale-110`}>
                                <IconComponent size={18} className="text-white/90" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-xs text-blue-200 mb-1 font-medium">{labels[key]}</div>
                                <div className="text-sm font-bold text-white truncate">
                                  {key === 'trunk' ? `${value}л` : value}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Decorative corner accents */}
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-blue-400/40 to-transparent rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -bottom-1 -left-1 w-8 h-8 bg-gradient-to-tr from-blue-500/30 to-transparent rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-20">
          <div className="relative bg-gradient-to-r from-white/15 via-blue-500/25 to-white/15 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/30 shadow-2xl overflow-hidden">
            
            {/* Subtle background animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 animate-pulse" />

            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="flex items-center gap-2 text-blue-300">
                  <Gem size={24} />
                  <span className="text-sm font-medium">ЭКСКЛЮЗИВНОЕ ПРЕДЛОЖЕНИЕ</span>
                  <Gem size={24} />
                </div>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Не нашли идеальную модель?
              </h3>
              
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Наши эксперты помогут подобрать идеальный BMW под ваши потребности и предпочтения
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-blue-500/50 hover:scale-105 hover:-translate-y-1 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <span className="relative z-10 flex items-center gap-2">
                    Получить консультацию
                    <ChevronRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </button>
                
                <button className="border-2 border-blue-400/50 text-blue-400 hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 backdrop-blur-lg hover:bg-blue-400/20 hover:border-blue-400 hover:scale-105">
                  Полный каталог BMW
                </button>
              </div>
            </div>

            {/* Decorative corner elements */}
            <div className="absolute top-4 right-4 w-12 h-12 border border-white/20 rounded-full animate-pulse" />
            <div className="absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-r from-blue-400/50 to-blue-500/50 rounded-full animate-pulse" />
            <div className="absolute top-1/2 left-4 w-2 h-2 bg-blue-400 rounded-full animate-bounce" />
            <div className="absolute top-1/3 right-8 w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelsShowcase;