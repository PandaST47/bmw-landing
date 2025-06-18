import React, { useState, useEffect, useRef } from 'react';
import { Phone, X, Clock, User, CheckCircle, Sparkles, Heart, ChevronDown, Star } from 'lucide-react';
import { IMaskInput } from 'react-imask';

const CallbackModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', phone: '', time: '9:00' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [particles, setParticles] = useState([]);
  const modalRef = useRef(null);

  const timeSlots = [
    '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'
  ];

  // Управление ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  // Блокировка прокрутки страницы
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Блокируем прокрутку
      const newParticles = Array.from({ length: 10 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 1.5,
        duration: Math.random() * 2 + 1.5,
      }));
      setParticles(newParticles);
      setFormData({ name: '', phone: '', time: '9:00' });
      setIsSuccess(false);
    } else {
      document.body.style.overflow = ''; // Восстанавливаем прокрутку
    }

    // Очистка при размонтировании
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value) => {
    setFormData(prev => ({ ...prev, phone: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <div className={`fixed inset-0 z-[1000] transition-all duration-500 ${isOpen ? 'visible' : 'invisible'}`}>
      {/* Backdrop with particles */}
      <div 
        className={`absolute inset-0 backdrop-blur-2xl transition-all duration-500 ${
          isOpen ? 'bg-black/80 opacity-100' : 'bg-black/0 opacity-0'
        }`}
        onClick={onClose}
      >
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1.5 h-1.5 bg-gradient-to-r from-orange-400 to-blue-400 rounded-full opacity-50"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animation: `float ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`,
              transform: `scale(${particle.size / 3})`,
            }}
          />
        ))}
      </div>
      
      {/* Modal Content */}
      <div 
        ref={modalRef}
        className={`absolute inset-x-4 top-4 bottom-4 md:inset-auto md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-md transition-all duration-500 ease-out overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900 ${
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
      >
        <div className="min-h-full md:min-h-0 bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-xl rounded-2xl border border-slate-700/40 shadow-2xl overflow-hidden relative">
          {/* Glowing border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/15 via-blue-500/15 to-orange-500/15 rounded-2xl blur-lg -z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-blue-500/10 rounded-2xl animate-pulse opacity-50" />

          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-slate-700/40 relative">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center relative overflow-hidden">
                    <Phone className="w-5 h-5 text-white" />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse border border-white/80">
                    <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-50" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white bg-gradient-to-r from-white via-orange-400 to-white bg-clip-text text-transparent">
                    Заказать звонок
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm flex items-center space-x-1.5 mt-1">
                    <Clock className="w-3.5 h-3.5 text-orange-400" />
                    <span>Перезвоним в течение 5 минут</span>
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg bg-slate-800/60 text-white hover:bg-red-500/20 transition-all duration-300 hover:scale-110 border border-slate-700/40 hover:border-red-500/40 group"
              >
                <X size={18} className="group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Form Content */}
          <div className="p-4 sm:p-5">
            {!isSuccess ? (
              <div className="space-y-5">
                {/* Name Input */}
                <div className="relative group">
                  <label className="block text-xs sm:text-sm font-semibold text-slate-300 mb-1.5 flex items-center space-x-1.5">
                    <User className="w-3.5 h-3.5 text-orange-400" />
                    <span>Ваше имя</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3.5 py-3.5 bg-slate-800/50 border border-slate-600/40 rounded-xl text-white text-sm sm:text-base placeholder-slate-400 focus:outline-none focus:border-orange-500/40 transition-all duration-300 hover:bg-slate-800/70 focus:bg-slate-800/70 backdrop-blur-sm touch-manipulation"
                      placeholder="Введите ваше имя"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/10 to-blue-500/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none -z-10" />
                  </div>
                </div>

                {/* Phone Input */}
                <div className="relative group">
                  <label className="block text-xs sm:text-sm font-semibold text-slate-300 mb-1.5 flex items-center space-x-1.5">
                    <Phone className="w-3.5 h-3.5 text-orange-400" />
                    <span>Номер телефона</span>
                  </label>
                  <div className="relative">
                    <IMaskInput
                      mask="+7 (000) 000-00-00"
                      value={formData.phone}
                      onAccept={handlePhoneChange}
                      name="phone"
                      required
                      className="w-full px-3.5 py-3.5 bg-slate-800/50 border border-slate-600/40 rounded-xl text-white text-sm sm:text-base placeholder-slate-400 focus:outline-none focus:border-orange-500/40 transition-all duration-300 hover:bg-slate-800/70 focus:bg-slate-800/70 backdrop-blur-sm touch-manipulation"
                      placeholder="+7 (___) ___-__-__"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    </div>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/10 to-blue-500/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none -z-10" />
                  </div>
                </div>

                {/* Time Selection */}
                <div className="relative group">
                  <label className="block text-xs sm:text-sm font-semibold text-slate-300 mb-1.5 flex items-center space-x-1.5">
                    <Clock className="w-3.5 h-3.5 text-orange-400" />
                    <span>Удобное время для звонка</span>
                  </label>
                  <div className="relative">
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-3.5 bg-slate-800/50 border border-slate-600/40 rounded-xl text-white text-sm sm:text-base focus:outline-none focus:border-orange-500/40 transition-all duration-300 hover:bg-slate-800/70 focus:bg-slate-800/70 backdrop-blur-sm appearance-none cursor-pointer touch-manipulation"
                    >
                      {timeSlots.map(time => (
                        <option key={time} value={time} className="bg-slate-800 text-white text-sm">
                          {time}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/10 to-blue-500/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none -z-10" />
                  </div>
                </div>

                {/* Benefits */}
                <div className="bg-gradient-to-r from-slate-800/40 to-slate-700/40 rounded-xl p-3.5 sm:p-4 border border-slate-600/30">
                  <h4 className="text-white font-semibold text-sm sm:text-base mb-2.5 flex items-center space-x-1.5">
                    <Sparkles className="w-4 h-4 text-yellow-400" />
                    <span>Что вы получите:</span>
                  </h4>
                  <div className="space-y-2 text-xs sm:text-sm text-slate-300">
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                      <span>Персональная консультация специалиста</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
                      <span>Расчет стоимости с максимальной скидкой</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
                      <span>Бесплатная запись на тест-драйв</span>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting || !formData.name || !formData.phone}
                  className="w-full relative overflow-hidden bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 text-white font-bold py-3.5 px-4 rounded-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 group touch-manipulation"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-45deg from-transparent via-white/15 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
                  <div className="relative flex items-center justify-center space-x-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Отправляем заявку...</span>
                      </>
                    ) : (
                      <>
                        <Phone className="w-4 h-4" />
                        <span>Заказать звонок</span>
                        <Heart className="w-4 h-4 text-red-300 group-hover:text-red-200 group-hover:scale-110 transition-all duration-300" />
                      </>
                    )}
                  </div>
                </button>

                {/* Privacy note */}
                <p className="text-xs text-slate-400 text-center leading-relaxed">
                  Нажимая кнопку, вы соглашаетесь с{' '}
                  <a href="#" className="text-orange-400 hover:text-orange-300 transition-colors underline">
                    политикой конфиденциальности
                  </a>
                  {' '}и обработкой персональных данных
                </p>
              </div>
            ) : (
              /* Success State */
              <div className="text-center space-y-5 py-6 sm:py-8">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto relative overflow-hidden">
                    <CheckCircle className="w-8 h-8 text-white animate-bounce" />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent" />
                  </div>
                  <div className="absolute -inset-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-lg animate-pulse" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    Заявка отправлена! 🎉
                  </h3>
                  <div className="space-y-2 text-slate-300 text-sm sm:text-base">
                    <p>
                      Спасибо, <span className="text-orange-400 font-semibold">{formData.name}</span>!
                    </p>
                    <p className="text-blue-400 font-semibold">
                      {formData.phone}
                    </p>
                    <p>
                      Наш менеджер свяжется с вами в <span className="text-orange-400 font-semibold">{formData.time}</span>
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-slate-800/40 to-slate-700/40 rounded-xl p-3 sm:p-4 border border-slate-600/30">
                  <div className="flex items-center justify-center space-x-1.5 text-xs sm:text-sm text-slate-300">
                    <Clock className="w-3.5 h-3.5 text-green-400" />
                    <span>Среднее время ответа: 3 минуты</span>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-2 text-xs sm:text-sm text-slate-400">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span>Рейтинг сервиса: 4.9/5</span>
                </div>
                <button
                  onClick={onClose}
                  className="mt-4 w-full relative overflow-hidden bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 hover:scale-105 group touch-manipulation"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative">Закрыть</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(180deg);
          }
        }
        .scrollbar-thin {
          scrollbar-width: thin;
        }
        .scrollbar-thumb-slate-700 {
          scrollbar-color: #334155 #0f172a;
        }
        .touch-manipulation {
          touch-action: manipulation;
        }
      `}</style>
    </div>
  );
};

export default CallbackModal;