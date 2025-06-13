import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Play, Award, Users, Heart, CheckCircle, Car } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const testimonials = [
    {
      id: 1,
      name: "Александр Петров",
      position: "Предприниматель",
      car: "BMW M4 Competition",
      rating: 5,
      text: "Невероятный автомобиль и сервис на высшем уровне! Команда BMW Екатеринбург превзошла все мои ожидания. M4 - это не просто машина, это эмоция на каждый день.",
      image: "images/people/alex.jpg",
      verified: true,
      purchaseYear: "2024",
      gradient: "from-red-500 to-red-600"
    },
    {
      id: 2,
      name: "Елена Смирнова",
      position: "Врач",
      car: "BMW X5 xDrive40i",
      rating: 5,
      text: "Покупала X5 для семьи - в восторге от комфорта и безопасности. Менеджеры очень внимательные, все объяснили, помогли с выбором комплектации. Рекомендую!",
      image: "images/people/elena.jpg",
      verified: true,
      purchaseYear: "2024",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      id: 3,
      name: "Максим Королев",
      position: "IT-директор",
      car: "BMW 3 Series",
      rating: 5,
      text: "Отличный дилер! Быстро оформили trade-in, доплатил немного и получил новую 3-ку. Сервис работает четко, всегда записывают вовремя. Очень доволен покупкой.",
      image: "images/people/max.jpg",
      verified: true,
      purchaseYear: "2023",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      id: 4,
      name: "Ирина Волкова",
      position: "Дизайнер",
      car: "BMW iX",
      rating: 5,
      text: "Решила попробовать электрический BMW - и не пожалела! Невероятно тихий, мощный и технологичный. Команда салона помогла разобраться с зарядкой и всеми нюансами.",
      image: "images/people/irina.jpg",
      verified: true,
      purchaseYear: "2024",
      gradient: "from-green-500 to-green-600"
    },
    {
      id: 5,
      name: "Дмитрий Козлов",
      position: "Адвокат",
      car: "BMW 5 Series",
      rating: 5,
      text: "5 серия - идеальный баланс роскоши и динамики! Спасибо команде за терпение и профессионализм. Оформили все документы быстро, даже помогли с доставкой в офис. Высший класс!",
      image: "images/people/dmitriy.jpeg",
      verified: true,
      purchaseYear: "2024",
      gradient: "from-purple-500 to-purple-600"
    }
  ];

  const achievements = [
    {
      icon: Users,
      number: "2000+",
      label: "Довольных клиентов",
      color: "from-blue-500 to-blue-600",
      delay: "0"
    },
    {
      icon: Award,
      number: "15+",
      label: "Лет на рынке",
      color: "from-purple-500 to-purple-600",
      delay: "100"
    },
    {
      icon: Heart,
      number: "98%",
      label: "Рекомендуют друзьям",
      color: "from-red-500 to-red-600",
      delay: "200"
    },
    {
      icon: Star,
      number: "4.9",
      label: "Средний рейтинг",
      color: "from-orange-500 to-orange-600",
      delay: "300"
    }
  ];

  // Отслеживание движения мыши для параллакс эффекта
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Автопрокрутка
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 transition-all duration-300 ${
          i < rating 
            ? 'text-amber-400 fill-current drop-shadow-sm' 
            : 'text-white/20'
        }`}
      />
    ));
  };

  const currentTestimonial = testimonials[currentSlide];

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Параллакс фон */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          transform: `translateX(${mousePosition.x * 0.02}px) translateY(${mousePosition.y * 0.02}px)`
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-green-500/15 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Заголовок секции */}
        <div className="text-center mb-20" data-aos="fade-up">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl mb-8 shadow-2xl">
            <Quote className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight">
            Истории успеха
            <span className="block bg-gradient-to-r from-blue-400 via-blue-400 to-green-300 bg-clip-text text-transparent mt-2">
              наших клиентов
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Более 2000 довольных владельцев BMW доверили нам свою мечту. 
            Каждая история уникальна, каждый клиент особенный
          </p>
        </div>

        {/* Достижения в новом стиле */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20" data-aos="fade-up" data-aos-delay="200">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div 
                key={index}
                className="group relative"
                data-aos="zoom-in"
                data-aos-delay={achievement.delay}
              >
                {/* Стеклянный эффект */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl group-hover:from-white/20 group-hover:to-white/10 transition-all duration-500"></div>
                
                <div className="relative p-8 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${achievement.color} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2 group-hover:scale-105 transition-transform duration-300">
                    {achievement.number}
                  </div>
                  <div className="text-white/70 font-medium">{achievement.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Главный слайдер отзывов */}
        <div className="relative max-w-6xl mx-auto" data-aos="fade-up" data-aos-delay="400">
          {/* Стеклянный контейнер */}
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
            
            {/* Анимированная полоса прогресса */}
            <div className="absolute top-0 left-0 h-2 bg-gradient-to-r from-white/20 to-white/10 w-full z-20">
              <div 
                className={`h-full bg-gradient-to-r ${currentTestimonial.gradient} transition-all duration-1000 ease-out shadow-lg`}
                style={{ width: `${((currentSlide + 1) / testimonials.length) * 100}%` }}
              >
                <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
              </div>
            </div>

            {/* Основной контент */}
            <div className="p-8 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                
                {/* Левая часть - информация о клиенте */}
                <div className="text-center lg:text-left space-y-8">
                  {/* Фото клиента с эффектами */}
                  <div className="relative inline-block">
                    <div className="relative group">
                      <div className={`absolute inset-0 bg-gradient-to-r ${currentTestimonial.gradient} rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500`}></div>
                      <div className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
                        <img 
                          src={currentTestimonial.image} 
                          alt={currentTestimonial.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      {/* Значок верификации */}
                      <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg border-4 border-white/30">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Информация о клиенте */}
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-white">
                      {currentTestimonial.name}
                    </h3>
                    <p className="text-white/70 text-lg">
                      {currentTestimonial.position}
                    </p>
                    
                    {/* Автомобиль */}
                    <div className="flex items-center justify-center lg:justify-start space-x-3">
                      <Car className="w-5 h-5 text-white/60" />
                      <span className={`bg-gradient-to-r ${currentTestimonial.gradient} text-white px-4 py-2 rounded-full font-semibold shadow-lg`}>
                        {currentTestimonial.car}
                      </span>
                      <span className="text-white/50 text-sm">
                        {currentTestimonial.purchaseYear}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Правая часть - отзыв */}
                <div className="space-y-8 relative">
                  {/* Рейтинг */}
                  <div className="flex justify-center lg:justify-start space-x-2">
                    {renderStars(currentTestimonial.rating)}
                  </div>

                  {/* Текст отзыва с красивыми кавычками */}
                  <div className="relative">
                    {/* Кавычка слева */}
                    <div className={`absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-r ${currentTestimonial.gradient} rounded-full flex items-center justify-center shadow-lg opacity-80`}>
                      <Quote className="w-6 h-6 text-white" />
                    </div>
                    
                    <blockquote className="text-xl lg:text-2xl text-white font-medium leading-relaxed pl-8 pr-8 relative z-10">
                      {currentTestimonial.text}
                    </blockquote>

                    {/* Кавычка справа (закрывающая) */}
                    <div className={`absolute -bottom-4 -right-4 w-10 h-10 bg-gradient-to-r ${currentTestimonial.gradient} rounded-full flex items-center justify-center shadow-lg opacity-80 rotate-180`}>
                      <Quote className="w-6 h-6 text-white" />
                    </div>

                    {/* Декоративный фон */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${currentTestimonial.gradient} opacity-5 rounded-2xl -m-4`}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Кнопки навигации вынесены за пределы контейнера */}
          <button
            onClick={prevSlide}
            className="absolute -left-6 lg:-left-20 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 shadow-xl z-10"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute -right-6 lg:-right-20 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 shadow-xl z-10"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Индикаторы слайдов */}
          <div className="flex justify-center space-x-4 mt-12">
            {testimonials.map((testimonial, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative overflow-hidden rounded-full transition-all duration-500 ${
                  index === currentSlide 
                    ? 'w-12 h-4' 
                    : 'w-4 h-4 hover:w-6'
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${
                  index === currentSlide 
                    ? testimonial.gradient
                    : 'from-white/30 to-white/20'
                } transition-all duration-500`}></div>
                {index === currentSlide && (
                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                )}
              </button>
            ))}
          </div>

          {/* Кнопка автопрокрутки */}
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-full backdrop-blur-md border transition-all duration-300 hover:scale-105 shadow-lg ${
                isAutoPlaying 
                  ? 'bg-blue-500/20 text-white border-blue-400/50 hover:bg-blue-500/30' 
                  : 'bg-white/10 text-white/70 border-white/20 hover:bg-white/20'
              }`}
            >
              <Play className={`w-5 h-5 ${isAutoPlaying ? 'animate-pulse' : ''}`} />
              <span className="font-medium">
                {isAutoPlaying ? 'Автопрокрутка активна' : 'Включить автопрокрутку'}
              </span>
            </button>
          </div>
        </div>

        {/* CTA секция */}
        <div className="mt-20" data-aos="fade-up" data-aos-delay="600">
          <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-12 lg:p-16 overflow-hidden">
            {/* Декоративные элементы */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl -translate-y-36 translate-x-36"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full blur-3xl translate-y-36 -translate-x-36"></div>

            <div className="relative z-10 text-center">
              <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Ваша история с BMW
                <span className="block bg-gradient-to-r from-blue-400 via-blue-400 to-green-300 bg-clip-text text-transparent mt-2">
                  начинается сегодня
                </span>
              </h3>
              <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
                Присоединяйтесь к семье довольных владельцев BMW. Мы поможем найти 
                автомобиль вашей мечты и сделаем процесс покупки незабываемым
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl font-semibold text-white shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 overflow-hidden">
                  <span className="relative z-10">Записаться на тест-драйв</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue- opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button className="group px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 rounded-xl font-semibold text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  Оставить отзыв
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;