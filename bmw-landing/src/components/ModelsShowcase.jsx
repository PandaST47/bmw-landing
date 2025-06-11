import React, { useState } from 'react';
import { ArrowRight, Zap, Fuel, Users, Luggage } from 'lucide-react';
import { motion } from 'framer-motion';

const ModelsShowcase = () => {
  const [hoveredModel, setHoveredModel] = useState(null);

  const models = [
    {
      id: 1,
      name: 'BMW 3 Series',
      category: 'Седан',
      image: '/images/models/bmw-3-series.jpg',
      priceFrom: 2890000,
      features: ['Спортивная динамика', 'Премиальный комфорт', 'Интеллектуальные системы', 'Экономичность'],
      specs: {
        power: '184-374 л.с.',
        fuel: '6.1-8.5 л/100км',
        seats: 5,
        trunk: 480
      },
      highlight: 'Бестселлер',
      color: 'bg-blue-500'
    },
    {
      id: 2,
      name: 'BMW 5 Series',
      category: 'Бизнес-седан',
      image: '/images/models/bmw-5-series.jpg',
      priceFrom: 4290000,
      features: ['Исполнительный класс', 'Передовые технологии', 'Максимальный комфорт', 'Престиж'],
      specs: {
        power: '184-530 л.с.',
        fuel: '5.8-9.2 л/100км',
        seats: 5,
        trunk: 530
      },
      highlight: 'Премиум',
      color: 'bg-purple-500'
    },
    {
      id: 3,
      name: 'BMW X3',
      category: 'Компактный SAV',
      image: '/images/models/bmw-x3.jpg',
      priceFrom: 4590000,
      features: ['Универсальность', 'Полный привод xDrive', 'Высокая посадка', 'Активный отдых'],
      specs: {
        power: '184-510 л.с.',
        fuel: '7.1-10.3 л/100км',
        seats: 5,
        trunk: 550
      },
      highlight: 'Популярный',
      color: 'bg-green-500'
    },
    {
      id: 4,
      name: 'BMW X5',
      category: 'Премиальный SAV',
      image: '/images/models/bmw-x5.jpg',
      priceFrom: 6790000,
      features: ['Роскошь и мощь', 'Пневмоподвеска', 'Панорамная крыша', 'Бездорожье'],
      specs: {
        power: '249-530 л.с.',
        fuel: '7.9-11.1 л/100км',
        seats: 7,
        trunk: 650
      },
      highlight: 'Флагман',
      color: 'bg-bmw-blue'
    },
    {
      id: 5,
      name: 'BMW iX',
      category: 'Электрический SAV',
      image: '/images/models/bmw-ix.jpg',
      priceFrom: 7890000,
      features: ['Будущее сегодня', 'Запас хода 630 км', 'Быстрая зарядка', 'Экологичность'],
      specs: {
        power: '326-523 л.с.',
        fuel: '19.8-21.4 кВт⋅ч/100км',
        seats: 5,
        trunk: 500
      },
      highlight: 'Инновация',
      color: 'bg-emerald-500'
    },
    {
      id: 6,
      name: 'BMW M2',
      category: 'Спортивное купе',
      image: '/images/models/bmw-m2.jpg',
      priceFrom: 5690000,
      features: ['Чистый драйв', 'Задний привод', 'M Performance', 'Трек-фокус'],
      specs: {
        power: '460 л.с.',
        fuel: '10.1 л/100км',
        seats: 4,
        trunk: 390
      },
      highlight: 'Спорт',
      color: 'bg-red-500'
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

  return (
    <section id="models" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Полная линейка BMW
            <span className="block text-bmw-blue">в наличии</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Найдите свой идеальный BMW среди широкого ассортимента 
            седанов, кроссоверов и спортивных автомобилей
          </p>
        </motion.div>

        {/* Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              onHoverStart={() => setHoveredModel(model.id)}
              onHoverEnd={() => setHoveredModel(null)}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Highlight Badge */}
                <div className={`absolute top-4 left-4 ${model.color} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                  {model.highlight}
                </div>

                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                  от {(model.priceFrom / 1000000).toFixed(1)} млн ₽
                </div>

                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredModel === model.id ? 1 : 0 }}
                  className="absolute inset-0 bg-black/40 flex items-center justify-center"
                >
                  <motion.button
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ 
                      scale: hoveredModel === model.id ? 1 : 0.8,
                      opacity: hoveredModel === model.id ? 1 : 0
                    }}
                    className="bg-bmw-blue text-white px-6 py-3 rounded-lg font-medium flex items-center space-x-2 hover:bg-bmw-blue/90 transition-colors"
                  >
                    <span>Подробнее</span>
                    <ArrowRight size={20} />
                  </motion.button>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{model.name}</h3>
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {model.category}
                  </span>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {model.features.slice(0, 2).map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Specifications */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {Object.entries(model.specs).map(([key, value]) => {
                    const IconComponent = getIcon(key);
                    const labels = {
                      power: 'Мощность',
                      fuel: key === 'fuel' && model.name.includes('iX') ? 'Расход' : 'Расход',
                      seats: 'Места',
                      trunk: 'Багажник'
                    };
                    
                    return (
                      <div key={key} className="flex items-center space-x-2">
                        <IconComponent size={16} className="text-gray-400" />
                        <div>
                          <div className="text-xs text-gray-500">{labels[key]}</div>
                          <div className="text-sm font-medium text-gray-900">
                            {key === 'trunk' ? `${value}л` : value}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gray-100 hover:bg-bmw-blue hover:text-white text-gray-800 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Узнать цену</span>
                  <ArrowRight size={18} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Не нашли подходящую модель? Мы поможем подобрать идеальный BMW для вас
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0, 102, 204, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-bmw-blue hover:bg-bmw-blue/90 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200"
            >
              Получить консультацию
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-bmw-blue text-bmw-blue hover:bg-bmw-blue hover:text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200"
            >
              Каталог BMW
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ModelsShowcase;