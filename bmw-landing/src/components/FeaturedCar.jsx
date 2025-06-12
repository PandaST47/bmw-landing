import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Zap, Gauge, Settings, Calendar, Award, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

// Предзагрузка изображений
const preloadImages = (imageUrls) => {
  imageUrls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
};

const FeaturedCar = () => {
  const [activeImage, setActiveImage] = useState(0);

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

  const imageLabels = [
    'Передний план',
    'Боковой вид',
    'Руль и панель',
    'Салон',
    'Коробка передач',
    'Во время езды',
    'Руль',
    'BMW M4 Competition',
  ];

  // Предзагрузка изображений при монтировании
  useEffect(() => {
    preloadImages(carImages);
  }, []);

  const specifications = [
    {
      icon: Zap,
      label: 'Двигатель',
      value: '3.0L Twin Turbo',
      detail: '510 л.с.',
      color: 'text-red-400',
      bgColor: 'from-red-500/20 to-red-600/20',
    },
    {
      icon: Gauge,
      label: 'Разгон 0-100',
      value: '3.9 сек',
      detail: 'М режим',
      color: 'text-blue-400',
      bgColor: 'from-blue-500/20 to-blue-600/20',
    },
    {
      icon: Settings,
      label: 'Коробка передач',
      value: '8-ступенчатая',
      detail: 'M Steptronic',
      color: 'text-blue-400',
      bgColor: 'from-blue-500/20 to-blue-600/20',
    },
    {
      icon: Gauge,
      label: 'Макс. скорость',
      value: '250 км/ч',
      detail: 'ограничена',
      color: 'text-purple-400',
      bgColor: 'from-purple-500/20 to-purple-600/20',
    },
  ];

  const basePrice = 10890000;

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % carImages.length);
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + carImages.length) % carImages.length);
  };

  const goToImage = (index) => {
    setActiveImage(index);
  };

  return (
    <section className="relative min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 backdrop-blur-lg border border-white/20 text-white px-6 sm:px-8 py-3 rounded-full text-sm font-semibold mb-6 sm:mb-8 shadow-2xl"
          >
            <Award className="w-5 h-5 text-blue-400" />
            ФЛАГМАНСКАЯ МОДЕЛЬ
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5 text-yellow-400" />
            </motion.div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
              BMW M4 Competition
            </span>
            <br />
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 bg-clip-text text-transparent">
              Воплощение совершенства
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
          >
            Испытайте невероятную мощь и изысканность легендарного спортивного купе BMW M4.
            Максимальная производительность встречается с безупречным стилем.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-black/50 backdrop-blur-lg border border-white/20 aspect-[16/9] w-full">
              <motion.img
                key={activeImage}
                src={carImages[activeImage]}
                alt={`BMW M4 ${imageLabels[activeImage]}`}
                className="absolute w-full h-full object-cover top-0 left-0"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />

              <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 bg-gradient-to-r from-black/70 to-black/50 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-2xl text-xs sm:text-sm font-medium backdrop-blur-lg border border-white/20 shadow-xl">
                {activeImage + 1} / {carImages.length}
              </div>

              <motion.div
                key={`label-${activeImage}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 bg-gradient-to-r from-blue-600/80 to-purple-600/80 text-white px-4 py-2 rounded-2xl text-sm font-medium backdrop-blur-lg border border-white/20 shadow-xl"
              >
                {imageLabels[activeImage]}
              </motion.div>

              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-transparent to-lime-500/20 opacity-50 pointer-events-none"></div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 sm:mt-8 bg-gradient-to-r from-black/40 via-black/60 to-black/40 backdrop-blur-xl rounded-3xl p-4 sm:p-6 border border-white/20 shadow-2xl"
            >
              <div className="relative mb-6">
                <div className="h-2 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full overflow-hidden shadow-inner">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-400 via-blue-500 to-lime-400 rounded-full shadow-lg"
                    initial={{ width: 0 }}
                    animate={{ width: `${((activeImage + 1) / carImages.length) * 100}%` }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                  <motion.div
                    className="absolute top-0 h-full bg-gradient-to-r from-white/40 to-transparent rounded-full"
                    animate={{ width: `${((activeImage + 1) / carImages.length) * 100}%`, opacity: [0.3, 0.6, 0.3] }}
                    transition={{ width: { duration: 0.5, ease: "easeOut" }, opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
                  />
                </div>
                <motion.div
                  className="absolute top-1/2 transform -translate-y-1/2 w-6 h-6 bg-gradient-to-r from-blue-400 to-lime-400 rounded-full shadow-xl border-2 border-white/50 cursor-pointer"
                  animate={{ left: `${((activeImage + 1) / carImages.length) * 100}%`, x: '-50%' }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/60 to-white/30 rounded-full"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.div>
              </div>

              <div className="flex justify-center items-center space-x-3 mb-4">
                {carImages.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => goToImage(index)}
                    className="relative group"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <motion.div
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === activeImage
                          ? 'bg-gradient-to-r from-blue-400 to-lime-400 shadow-lg'
                          : 'bg-white/30 hover:bg-white/50'
                      }`}
                      animate={{ scale: index === activeImage ? 1.2 : 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    {index === activeImage && (
                      <motion.div
                        className="absolute inset-0 w-5 h-5 -m-1 border-2 border-blue-400/50 rounded-full"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    <motion.div
                      className="absolute inset-0 w-5 h-5 -m-1 border-2 border-white/30 rounded-full opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.2 }}
                    />
                  </motion.button>
                ))}
              </div>

              <div className="text-center">
                <motion.p
                  key={activeImage}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-white/90 text-sm font-medium"
                >
                  {imageLabels[activeImage]}
                </motion.p>
                <motion.p
                  className="text-blue-300/80 text-xs mt-1"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  Изображение {activeImage + 1} из {carImages.length}
                </motion.p>
              </div>

              <div className="flex justify-between items-center mt-4 space-x-4">
                <motion.button
                  onClick={prevImage}
                  whileHover={{ scale: 1.05, x: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 text-white rounded-xl transition-all duration-300 border border-white/20 backdrop-blur-lg text-sm"
                >
                  <ChevronLeft size={16} />
                  <span>Назад</span>
                </motion.button>

                <motion.div
                  className="flex space-x-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 h-1 bg-blue-400/60 rounded-full"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
                    />
                  ))}
                </motion.div>

                <motion.button
                  onClick={nextImage}
                  whileHover={{ scale: 1.05, x: 2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 text-white rounded-xl transition-all duration-300 border border-white/20 backdrop-blur-lg text-sm"
                >
                  <span>Далее</span>
                  <ChevronRight size={16} />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6 flex flex-col min-h-full"
          >
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-4 sm:mb-6">
                Технические характеристики
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                {specifications.map((spec, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-3 sm:p-4 hover:shadow-2xl transition-all duration-300 border border-white/20 hover:border-white/40 overflow-hidden"
                  >
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${spec.bgColor} opacity-0 group-hover:opacity-100`}
                      transition={{ duration: 0.3 }}
                    />
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white/40 rounded-full opacity-0 group-hover:opacity-100"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{ scale: [0, 1, 0], opacity: [0, 0.6, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                      />
                    ))}
                    <div className="relative z-10">
                      <motion.div
                        whileHover={{ rotate: 12, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br ${spec.bgColor} rounded-xl flex items-center justify-center mb-2 sm:mb-3 shadow-lg`}
                      >
                        <spec.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${spec.color}`} />
                      </motion.div>
                      <div className="text-xs text-blue-200 mb-1">{spec.label}</div>
                      <div className="font-bold text-white text-sm sm:text-base">{spec.value}</div>
                      <div className="text-xs text-blue-300">{spec.detail}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-lime-500/20 via-green-500/20 to-lime-500/20 backdrop-blur-lg rounded-2xl p-3 sm:p-4 border border-lime-400/30 shadow-xl"
            >
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 flex items-center gap-2">
                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-lime-400 rounded-full shadow-lg"></div>
                Цвет автомобиля
              </h3>
              <p className="text-blue-100 text-sm sm:text-base mb-1 sm:mb-2">
                <span className="font-semibold text-lime-300">Лаймовый металлик</span> — яркий и динамичный цвет
              </p>
              <p className="text-blue-200 text-xs">
                * Другие цвета по запросу
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-3xl p-4 sm:p-6 text-white shadow-2xl"
            >
              <motion.div
                className="absolute inset-0 opacity-30"
                animate={{
                  background: [
                    'radial-gradient(circle at 0% 0%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                    'radial-gradient(circle at 100% 100%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row items-center justify-between mb-2 sm:mb-4 gap-2">
                  <div>
                    <p className="text-xs opacity-90 mb-1">Цена</p>
                    <motion.p
                      initial={{ scale: 1.1, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-2xl sm:text-3xl md:text-4xl font-bold"
                    >
                      {basePrice.toLocaleString()} ₽
                    </motion.p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-white to-blue-50 text-blue-700 px-4 sm:px-6 py-2 sm:py-3 rounded-2xl font-bold transition-all duration-200 shadow-xl hover:shadow-2xl text-xs sm:text-sm"
                  >
                    Рассчитать кредит
                  </motion.button>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-2xl font-bold transition-all duration-200 flex items-center justify-center space-x-1 sm:space-x-2 shadow-xl text-xs sm:text-sm"
                  >
                    <Calendar size={16} className="sm:w-5 sm:h-5" />
                    <span>Тест-драйв</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 border-2 border-white text-white hover:bg-white hover:text-blue-700 px-4 sm:px-6 py-2 sm:py-3 rounded-2xl font-bold transition-all duration-200 shadow-xl text-xs sm:text-sm"
                  >
                    Подробнее
                  </motion.button>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-white/20 to-white/5 rounded-full"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCar;