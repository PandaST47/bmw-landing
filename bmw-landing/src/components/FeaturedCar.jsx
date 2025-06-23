import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Zap, Gauge, Settings, Calendar, Award, Sparkles, X, Calculator } from 'lucide-react';
import CallbackModal from './CallBackModal';

// Предзагрузка изображений
const preloadImages = (imageUrls) => {
  imageUrls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
};

const FeaturedCar = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [showCreditModal, setShowCreditModal] = useState(false);
  const [isCallbackModalOpen, setIsCallbackModalOpen] = useState(false);
  const [creditData, setCreditData] = useState({
    loanAmount: 10890000,
    years: 5,
    interestRate: '22.5',
    monthlyPayment: 0,
    totalAmount: 0,
    overpayment: 0
  });

  const carImages = [
    'images/bmw-m4-gallery/front.jpg',
    'images/bmw-m4-gallery/side.jpg',
    'images/bmw-m4-gallery/rear.jpg',
    'images/bmw-m4-gallery/interior.jpg',
    'images/bmw-m4-gallery/engine.jpg',
    'images/bmw-m4-gallery/wheel.jpg',
    'images/bmw-m4-gallery/dashboard.jpg',
    'images/bmw-m4-gallery/seats.jpg',
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

  // Логика для плавного скрытия хедера при открытии модальных окон
  useEffect(() => {
    const header = document.querySelector('header');
    if (header) {
      header.style.transition = 'opacity 0.3s ease, z-index 0.3s ease';
      if (showCreditModal || isCallbackModalOpen) {
        header.style.opacity = '0';
        header.style.zIndex = '10';
      } else {
        header.style.opacity = '1';
        header.style.zIndex = '50';
      }
    }

    if (showCreditModal || isCallbackModalOpen) {
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
  }, [showCreditModal, isCallbackModalOpen]);

  // Расчет кредита
  const calculateCredit = () => {
    const P = creditData.loanAmount;
    const r = parseFloat(creditData.interestRate) / 100 / 12;
    const n = creditData.years * 12;
    
    const monthlyPayment = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalAmount = monthlyPayment * n;
    const overpayment = totalAmount - P;
    
    setCreditData(prev => ({
      ...prev,
      monthlyPayment: Math.round(monthlyPayment),
      totalAmount: Math.round(totalAmount),
      overpayment: Math.round(overpayment)
    }));
  };

  useEffect(() => {
    const rate = parseFloat(creditData.interestRate);
    if (!isNaN(rate) && rate > 0) {
      calculateCredit();
    }
  }, [creditData.loanAmount, creditData.years, creditData.interestRate]);

  // Функция для открытия модального окна обратного звонка
  const handleConsultationClick = () => {
    setShowCreditModal(false);
    setIsCallbackModalOpen(true);
  };

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

  const CreditModal = () => (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/20">
        <div className="p-6 sm:p-8">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Кредитный калькулятор</h3>
                <p className="text-blue-300 text-sm">BMW M4 Competition</p>
              </div>
            </div>
            <button
              onClick={() => setShowCreditModal(false)}
              className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Стоимость автомобиля
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={`${creditData.loanAmount.toLocaleString('ru-RU')} ₽`}
                    readOnly
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-400 cursor-not-allowed"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Срок кредита (лет)
                </label>
                <select
                  value={creditData.years}
                  onChange={(e) => setCreditData(prev => ({ ...prev, years: Number(e.target.value) }))}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-400"
                >
                  <option value={1} className="bg-gray-800">1 год</option>
                  <option value={2} className="bg-gray-800">2 года</option>
                  <option value={3} className="bg-gray-800">3 года</option>
                  <option value={4} className="bg-gray-800">4 года</option>
                  <option value={5} className="bg-gray-800">5 лет</option>
                  <option value={7} className="bg-gray-800">7 лет</option>
                </select>
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Процентная ставка (%)
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={creditData.interestRate === '' ? '' : creditData.interestRate.toString()}
                    onChange={(e) => {
                      const value = e.target.value;
                      // Разрешаем только цифры и одну точку
                      if (value === '' || /^\d*\.?\d*$/.test(value)) {
                        const numValue = value === '' ? '' : value;
                        setCreditData(prev => ({ ...prev, interestRate: numValue }));
                      }
                    }}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 pr-8 text-white placeholder-white/50 focus:outline-none focus:border-blue-400"
                    placeholder="22.5"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 pointer-events-none flex items-center pb-5">
                    %
                  </div>
                  <div className="mt-2 text-xs text-blue-300">
                    Средняя ставка в РФ: 20-25% годовых
                  </div>
                </div>
              </div>
            </div>

            <div
              className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-6 border border-white/20">
              <h4 className="text-xl font-bold text-white mb-4">Расчет платежей</h4>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-white/10 whitespace-nowrap">
                  <span className="text-blue-200">Ежемесячный <br />платеж:</span>
                  <span className="text-white font-bold text-lg">{creditData.monthlyPayment.toLocaleString()} ₽</span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-blue-200">Общая сумма:</span>
                  <span className="text-white font-semibold">{creditData.totalAmount.toLocaleString()} ₽</span>
                </div>
                
                <div className="flex justify-between items-center py-2">
                  <span className="text-blue-200">Переплата:</span>
                  <span className="text-red-300 font-semibold">{creditData.overpayment.toLocaleString()} ₽</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-xl border border-green-400/30">
                <div className="text-center">
                  <div className="text-green-300 text-sm font-medium mb-1">
                    Экономия при первоначальном взносе 30%
                  </div>
                  <div className="text-white font-bold text-lg">
                    {Math.round(creditData.overpayment * 0.3).toLocaleString()} ₽
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 md:col-span-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleConsultationClick}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-200 flex items-center justify-center gap-2 text-base sm:text-lg shadow-lg hover:shadow-xl"
              >
                <Calendar className="w-5 h-5" />
                Записаться на консультацию
              </button>
              <button
                onClick={() => setShowCreditModal(false)}
                className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-2xl font-medium transition-all duration-200"
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <section id="featured-car" className="relative min-h-screen py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className="text-center mb-12 sm:mb-16"
            style={{ opacity: 1, transform: 'translateY(0px)' }}
          >
            <div
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 backdrop-blur-lg border border-white/20 text-white px-6 sm:px-8 py-3 rounded-full text-sm font-semibold mb-6 sm:mb-8 shadow-2xl"
              style={{ opacity: 1, transform: 'scale(1)' }}
            >
              <Award className="w-5 h-5 text-blue-400" />
              ФЛАГМАНСКАЯ МОДЕЛЬ
              <div style={{ transform: 'rotate(0deg)' }}>
                <Sparkles className="w-5 h-5 text-yellow-400" />
              </div>
            </div>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight"
              style={{ opacity: 1, transform: 'translateY(0px)' }}
            >
              <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                BMW M4 Competition
              </span>
              <br />
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 bg-clip-text text-transparent">
                Воплощение совершенства
              </span>
            </h2>

            <p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
              style={{ opacity: 1, transform: 'translateY(0px)' }}
            >
              Испытайте невероятную мощь и изысканность легендарного спортивного купе BMW M4.
              Максимальная производительность встречается с безупречным стилем.
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-stretch">
            <div
              className="relative"
              style={{ opacity: 1, transform: 'translateX(0px)' }}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-black/50 backdrop-blur-lg border border-white/20 aspect-[16/9] w-full">
                <img
                  key={activeImage}
                  src={carImages[activeImage]}
                  alt={`BMW M4 ${imageLabels[activeImage]}`}
                  className="absolute w-full h-full object-cover top-0 left-0"
                  style={{ opacity: 1, transform: 'translateX(0px)' }}
                />

                <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 bg-gradient-to-r from-black/70 to-black/50 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-2xl text-xs sm:text-sm font-medium backdrop-blur-lg border border-white/20 shadow-xl">
                  {activeImage + 1} / {carImages.length}
                </div>

                <div
                  key={`label-${activeImage}`}
                  className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 bg-gradient-to-r from-blue-600/80 to-purple-600/80 text-white px-4 py-2 rounded-2xl text-sm font-medium backdrop-blur-lg border border-white/20 shadow-xl"
                  style={{ opacity: 1, transform: 'translateY(0px)' }}
                >
                  {imageLabels[activeImage]}
                </div>

                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-transparent to-lime-500/20 opacity-50 pointer-events-none"></div>
              </div>

              <div
                className="mt-6 sm:mt-8 bg-gradient-to-r from-black/40 via-black/60 to-black/40 backdrop-blur-xl rounded-3xl p-4 sm:p-6 border border-white/20 shadow-2xl"
                style={{ opacity: 1, transform: 'translateY(0px)' }}
              >
                <div className="relative mb-6">
                  <div className="h-2 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full overflow-hidden shadow-inner">
                    <div
                      className="h-full bg-gradient-to-r from-blue-400 via-blue-500 to-lime-400 rounded-full shadow-lg"
                      style={{ width: `${((activeImage + 1) / carImages.length) * 100}%` }}
                    />
                    <div
                      className="absolute top-0 h-full bg-gradient-to-r from-white/40 to-transparent rounded-full"
                      style={{ width: `${((activeImage + 1) / carImages.length) * 100}%`, opacity: 0.4 }}
                    />
                  </div>
                  <div
                    className="absolute top-1/2 transform -translate-y-1/2 w-6 h-6 bg-gradient-to-r from-blue-400 to-lime-400 rounded-full shadow-xl border-2 border-white/50 cursor-pointer"
                    style={{ left: `${((activeImage + 1) / carImages.length) * 100}%`, transform: 'translate(-50%, -50%)' }}
                  >
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-white/60 to-white/30 rounded-full"
                      style={{ transform: 'scale(1)', opacity: 0.6 }}
                    />
                  </div>
                </div>

                <div className="flex justify-center items-center space-x-3 mb-4">
                  {carImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className="relative group"
                    >
                      <div
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === activeImage
                            ? 'bg-gradient-to-r from-blue-400 to-lime-400 shadow-lg'
                            : 'bg-white/30 hover:bg-white/50'
                        }`}
                        style={{ transform: index === activeImage ? 'scale(1.2)' : 'scale(1)' }}
                      />
                      {index === activeImage && (
                        <div
                          className="absolute inset-0 w-5 h-5 -m-1 border-2 border-blue-400/50 rounded-full"
                          style={{ transform: 'scale(1)', opacity: 1 }}
                        />
                      )}
                      <div className="absolute inset-0 w-5 h-5 -m-1 border-2 border-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </button>
                  ))}
                </div>

                <div className="text-center">
                  <p
                    key={activeImage}
                    className="text-white/90 text-sm font-medium"
                    style={{ opacity: 1, transform: 'translateY(0px)' }}
                  >
                    {imageLabels[activeImage]}
                  </p>
                  <p
                    className="text-blue-300/80 text-xs mt-1"
                    style={{ opacity: 0.7 }}
                  >
                    Изображение {activeImage + 1} из {carImages.length}
                  </p>
                </div>

                <div className="flex justify-between items-center mt-4 space-x-4">
                  <button
                    onClick={prevImage}
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 text-white rounded-xl transition-all duration-300 border border-white/20 backdrop-blur-lg text-sm"
                  >
                    <ChevronLeft size={16} />
                    <span>Назад</span>
                  </button>

                  <button
                    onClick={nextImage}
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 text-white rounded-xl transition-all duration-300 border border-white/20 backdrop-blur-lg text-sm"
                  >
                    <span>Далее</span>
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>

            <div
              className="space-y-4 sm:space-y-6 flex flex-col min-h-full"
              style={{ opacity: 1, transform: 'translateX(0px)' }}
            >
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-4 sm:mb-6">
                  Технические характеристики
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                  {specifications.map((spec, index) => (
                    <div
                      key={index}
                      className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-3 sm:p-4 hover:shadow-2xl transition-all duration-300 border border-white/20 hover:border-white/40 overflow-hidden"
                      style={{ opacity: 1, transform: 'translateY(0px)' }}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${spec.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      />
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 bg-white/40 rounded-full opacity-0 group-hover:opacity-100"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                          }}
                        />
                      ))}
                      <div className="relative z-10">
                        <div
                          className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br ${spec.bgColor} rounded-xl flex items-center justify-center mb-2 sm:mb-3 shadow-lg`}
                        >
                          <spec.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${spec.color}`} />
                        </div>
                        <div className="text-xs text-blue-200 mb-1">{spec.label}</div>
                        <div className="font-bold text-white text-sm sm:text-base">{spec.value}</div>
                        <div className="text-xs text-blue-300">{spec.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="bg-gradient-to-r from-lime-500/20 via-green-500/20 to-lime-500/20 backdrop-blur-lg rounded-2xl p-3 sm:p-4 border border-lime-400/30 shadow-xl"
                style={{ opacity: 1, transform: 'translateY(0px)' }}
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
              </div>

              <div
                className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-3xl p-4 sm:p-6 text-white shadow-2xl"
                style={{ opacity: 1, transform: 'translateY(0px)' }}
              >
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    background: 'radial-gradient(circle at 0% 0%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                  }}
                />
                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row items-center justify-between mb-2 sm:mb-4 gap-2">
                    <div>
                      <p className="text-xs opacity-90 mb-1">Цена</p>
                      <p
                        className="text-2xl sm:text-3xl md:text-4xl font-bold"
                        style={{ transform: 'scale(1)', opacity: 1 }}
                      >
                        {basePrice.toLocaleString()} ₽
                      </p>
                    </div>
                    <button
                      onClick={() => setShowCreditModal(true)}
                      className="bg-gradient-to-r from-white to-blue-50 text-blue-700 px-4 sm:px-6 py-2 sm:py-3 rounded-2xl font-bold transition-all duration-200 shadow-xl hover:shadow-2xl text-xs sm:text-sm hover:scale-105"
                    >
                      Рассчитать кредит
                    </button>
                  </div>
                  <div className="flex justify-center">
                    <a
                      href="#test-drive"
                      className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-2xl font-bold transition-all duration-200 flex items-center justify-center space-x-2 shadow-xl hover:scale-105 hover:-translate-y-1"
                    >
                      <Calendar size={20} className="sm:w-6 sm:h-6" />
                      <span className="text-base sm:text-lg">Записаться на тест-драйв</span>
                    </a>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-white/20 to-white/5 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showCreditModal && <CreditModal />}
      <CallbackModal 
        isOpen={isCallbackModalOpen} 
        onClose={() => setIsCallbackModalOpen(false)} 
      />
    </>
  );
};

export default FeaturedCar;