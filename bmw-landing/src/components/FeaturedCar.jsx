import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Zap, Gauge, Settings, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FeaturedCar = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState('Midnight Black');

  const carImages = [
    '/images/bmw-m4-gallery/front.jpg',
    '/images/bmw-m4-gallery/side.jpg',
    '/images/bmw-m4-gallery/rear.jpg',
    '/images/bmw-m4-gallery/interior.jpg',
    '/images/bmw-m4-gallery/engine.jpg',
    '/images/bmw-m4-gallery/wheel.jpg',
    '/images/bmw-m4-gallery/dashboard.jpg',
    '/images/bmw-m4-gallery/seats.jpg',
  ];

  const specifications = [
    {
      icon: Zap,
      label: 'Двигатель',
      value: '3.0L Twin Turbo',
      detail: '510 л.с.',
      color: 'text-red-600',
      bgColor: 'bg-red-100',
    },
    {
      icon: Gauge,
      label: 'Разгон 0-100',
      value: '3.9 сек',
      detail: 'М режим',
      color: 'text-bmw-blue',
      bgColor: 'bg-blue-100',
    },
    {
      icon: Settings,
      label: 'Коробка передач',
      value: '8-ступенчатая',
      detail: 'M Steptronic',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      icon: Gauge,
      label: 'Макс. скорость',
      value: '250 км/ч',
      detail: 'ограничена',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
  ];

  const colorOptions = [
    { name: 'Midnight Black', hex: '#0C0C0C', price: 0 },
    { name: 'Alpine White', hex: '#F8F8FF', price: 45000 },
    { name: 'Storm Bay', hex: '#4A5568', price: 65000 },
    { name: 'Barcelona Blue', hex: '#1E3A8A', price: 65000 },
    { name: 'Fire Red', hex: '#DC2626', price: 85000 },
  ];

  const basePrice = 6890000;

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % carImages.length);
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + carImages.length) % carImages.length);
  };

  const getCurrentPrice = () => {
    const colorPrice = colorOptions.find(c => c.name === selectedColor)?.price || 0;
    return basePrice + colorPrice;
  };

  return (
    <section className="py-20 bg-white">
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
            BMW M4 Competition
            <span className="block text-bmw-blue">Воплощение совершенства</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Испытайте невероятную мощь и изысканность легендарного спортивного купе BMW M4
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImage}
                  src={carImages[activeImage]}
                  alt={`BMW M4 ${activeImage + 1}`}
                  className="w-full h-80 md:h-96 object-cover"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200"
              >
                <ChevronRight size={24} />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                {activeImage + 1} / {carImages.length}
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex space-x-2 mt-4 overflow-x-auto pb-2">
              {carImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    index === activeImage
                      ? 'border-bmw-blue shadow-lg'
                      : 'border-gray-200 hover:border-gray-400'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Car Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Specifications */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Технические характеристики
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {specifications.map((spec, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-gray-50 rounded-xl p-4 hover:shadow-lg transition-all duration-300"
                  >
                    <div className={`w-10 h-10 ${spec.bgColor} rounded-lg flex items-center justify-center mb-3`}>
                      <spec.icon className={`w-5 h-5 ${spec.color}`} />
                    </div>
                    <div className="text-sm text-gray-600 mb-1">{spec.label}</div>
                    <div className="font-bold text-gray-900">{spec.value}</div>
                    <div className="text-xs text-gray-500">{spec.detail}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Color Configurator */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Выберите цвет
              </h3>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  {colorOptions.map((color) => (
                    <motion.button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`relative w-12 h-12 rounded-full border-4 transition-all duration-200 ${
                        selectedColor === color.name
                          ? 'border-bmw-blue shadow-lg'
                          : 'border-gray-300'
                      }`}
                      style={{ backgroundColor: color.hex }}
                    >
                      {selectedColor === color.name && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute inset-2 bg-white rounded-full flex items-center justify-center"
                        >
                          <div className="w-2 h-2 bg-bmw-blue rounded-full" />
                        </motion.div>
                      )}
                    </motion.button>
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  Выбран: <span className="font-medium">{selectedColor}</span>
                  {colorOptions.find(c => c.name === selectedColor)?.price > 0 && (
                    <span className="text-bmw-blue ml-2">
                      +{colorOptions.find(c => c.name === selectedColor)?.price.toLocaleString()} ₽
                    </span>
                  )}
                </p>
              </div>
            </div>

            {/* Price & CTA */}
            <div className="bg-gradient-to-r from-bmw-blue to-blue-600 rounded-2xl p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm opacity-90">Цена от</p>
                  <motion.p
                    key={getCurrentPrice()}
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-3xl font-bold"
                  >
                    {getCurrentPrice().toLocaleString()} ₽
                  </motion.p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-bmw-blue px-6 py-3 rounded-lg font-bold transition-all duration-200"
                >
                  Рассчитать кредит
                </motion.button>
              </div>
              <div className="flex space-x-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-bmw-accent hover:bg-bmw-accent/90 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <Calendar size={20} />
                  <span>Тест-драйв</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 border border-white text-white hover:bg-white hover:text-bmw-blue px-6 py-3 rounded-lg font-medium transition-all duration-200"
                >
                  Узнать больше
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCar;