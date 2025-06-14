import React, { useState, useEffect } from 'react';
import { Phone, Calendar, ChevronDown, Car, Clock, User, Mail, Star, Award, Shield, Zap } from 'lucide-react';
import { IMaskInput } from 'react-imask';

const CTASection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    model: '',
    date: '',
    time: '',
    comment: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const bmwModels = [
    'BMW M4 Competition',
    'BMW 3 Series',
    'BMW 5 Series', 
    'BMW X3',
    'BMW X5',
    'BMW iX',
    'BMW M2'
  ];

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00', '18:00'
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePhoneChange = (value) => {
    setFormData(prev => ({
      ...prev,
      phone: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Имитация отправки
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setShowSuccess(true);
    setFormData({
      name: '',
      phone: '',
      email: '',
      model: '',
      date: '',
      time: '',
      comment: ''
    });

    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <section id = "test-drive" className="relative min-h-screen">
      {/* Контент без собственного фона - использует фон из App.jsx */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-7xl mx-auto">
          
          {/* Заголовок секции */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-2 mb-6">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-blue-200 text-sm font-medium">Эксклюзивное предложение</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent leading-tight">
              Испытай мощь<br />
              <span className="text-blue-400">BMW M4 Competition</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Запишись на эксклюзивный тест-драйв и ощути всю мощь немецкой инженерии
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Левая часть - информация */}
            <div className={`lg:col-span-7 space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              
              {/* Основная информация о BMW M4 */}
              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center">
                    <Car className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">BMW M4 Competition</h3>
                    <p className="text-blue-200">Купе высокой производительности</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  {[
                    { label: "Мощность", value: "510 л.с.", icon: Zap },
                    { label: "0-100 км/ч", value: "3.9 сек", icon: Clock },
                    { label: "Макс. скорость", value: "250 км/ч", icon: Award },
                    { label: "Гарантия", value: "3 года", icon: Shield }
                  ].map((spec, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <spec.icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <div className="text-2xl font-bold text-white mb-1">{spec.value}</div>
                      <div className="text-sm text-blue-200">{spec.label}</div>
                    </div>
                  ))}
                </div>

                <div className="text-center py-6 border-t border-white/10">
                  <div className="text-4xl font-bold text-blue-400 mb-1">от 10 990 000 ₽</div>
                  <div className="text-blue-200">Стартовая цена BMW M4 Competition</div>
                </div>
              </div>

              {/* Преимущества */}
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: Phone, title: "Бесплатная консультация", desc: "Эксперт ответит на все вопросы" },
                  { icon: Calendar, title: "Удобное время", desc: "Выберите подходящий слот" },
                  { icon: Car, title: "Полный тест-драйв", desc: "30+ минут за рулем" },
                  { icon: Award, title: "Особые условия", desc: "Эксклюзивные предложения" }
                ].map((benefit, index) => (
                  <div key={index} className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-blue-400/30 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-700/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <benefit.icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{benefit.title}</h4>
                        <p className="text-sm text-blue-200">{benefit.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Правая часть - форма */}
            <div className={`lg:col-span-5 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="sticky top-8">
                <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                  
                  {/* Декоративные элементы */}
                  <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-red-400/20 rounded-full blur-xl"></div>

                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-6 text-center">
                      Записаться на тест-драйв
                    </h3>

                    {showSuccess ? (
                      <div className="text-center py-12">
                        <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-3">Заявка отправлена!</h4>
                        <p className="text-blue-200 leading-relaxed">
                          Наш менеджер свяжется с вами в течение 15 минут для подтверждения записи
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 gap-4">
                          <div className="relative group">
                            <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-300 group-focus-within:text-blue-400 transition-colors" />
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              placeholder="Ваше имя"
                              required
                              className="w-full pl-14 pr-4 py-4 bg-white/10 border border-white/30 rounded-2xl text-white placeholder-blue-200 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 focus:bg-white/15 transition-all duration-300"
                            />
                          </div>

                          <div className="relative group">
                            <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-300 group-focus-within:text-blue-400 transition-colors" />
                            <IMaskInput
                              mask="+7 (000) 000-00-00"
                              value={formData.phone}
                              onAccept={handlePhoneChange}
                              name="phone"
                              required
                              className="w-full pl-14 pr-4 py-4 bg-white/10 border border-white/30 rounded-2xl text-white placeholder-blue-200 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 focus:bg-white/15 transition-all duration-300"
                              placeholder="+7 (___) ___-__-__"
                            />
                          </div>

                          <div className="relative group">
                            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-300 group-focus-within:text-blue-400 transition-colors" />
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="Email"
                              className="w-full pl-14 pr-4 py-4 bg-white/10 border border-white/30 rounded-2xl text-white placeholder-blue-200 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 focus:bg-white/15 transition-all duration-300"
                            />
                          </div>

                          <div className="relative group">
                            <Car className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-300 group-focus-within:text-blue-400 transition-colors" />
                            <select
                              name="model"
                              value={formData.model}
                              onChange={handleInputChange}
                              required
                              className="w-full pl-14 pr-4 py-4 bg-white/10 border border-white/30 rounded-2xl text-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 focus:bg-white/15 transition-all duration-300 appearance-none"
                            >
                              <option value="" className="bg-slate-800 text-gray-300">Выберите модель</option>
                              {bmwModels.map((model, index) => (
                                <option key={index} value={model} className="bg-slate-800 text-white">{model}</option>
                              ))}
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-300 pointer-events-none group-focus-within:text-blue-400 transition-colors" />
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="relative group">
                              <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-300 group-focus-within:text-blue-400 transition-colors" />
                              <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleInputChange}
                                required
                                min={new Date().toISOString().split('T')[0]}
                                className="w-full pl-14 pr-4 py-4 bg-white/10 border border-white/30 rounded-2xl text-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 focus:bg-white/15 transition-all duration-300"
                              />
                            </div>

                            <div className="relative group">
                              <Clock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-300 group-focus-within:text-blue-400 transition-colors" />
                              <select
                                name="time"
                                value={formData.time}
                                onChange={handleInputChange}
                                required
                                className="w-full pl-14 pr-4 py-4 bg-white/10 border border-white/30 rounded-2xl text-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 focus:bg-white/15 transition-all duration-300 appearance-none"
                              >
                                <option value="" className="bg-slate-800 text-gray-300">Время</option>
                                {timeSlots.map((time, index) => (
                                  <option key={index} value={time} className="bg-slate-800 text-white">{time}</option>
                                ))}
                              </select>
                              <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-300 pointer-events-none group-focus-within:text-blue-400 transition-colors" />
                            </div>
                          </div>

                          <textarea
                            name="comment"
                            value={formData.comment}
                            onChange={handleInputChange}
                            placeholder="Дополнительные пожелания (необязательно)"
                            rows={3}
                            className="w-full px-4 py-4 bg-white/10 border border-white/30 rounded-2xl text-white placeholder-blue-200 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 focus:bg-white/15 transition-all duration-300 resize-none"
                          />
                        </div>

                        <button
                          onClick={handleSubmit}
                          disabled={isSubmitting}
                          className="group relative w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 disabled:opacity-70 overflow-hidden"
                        >
                          {isSubmitting ? (
                            <div className="flex items-center justify-center space-x-3">
                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              <span>Отправляем заявку...</span>
                            </div>
                          ) : (
                            <>
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                              <span className="relative flex items-center justify-center gap-2">
                                <Calendar className="w-5 h-5" />
                                Записаться на тест-драйв
                              </span>
                            </>
                          )}
                        </button>

                        <p className="text-center text-xs text-blue-200/80 leading-relaxed">
                          Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности<br />
                          и обработкой персональных данных
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Дополнительная информация внизу */}
          <div className={`mt-20 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { number: "15 мин", text: "Время ответа менеджера" },
                { number: "30+", text: "Минут тест-драйва" },
                { number: "100%", text: "Персональный подход" }
              ].map((stat, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="text-3xl font-bold text-blue-400 mb-2">{stat.number}</div>
                  <div className="text-blue-200">{stat.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;