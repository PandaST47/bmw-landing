import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Play, Award, Users, Heart } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Александр Петров",
      position: "Предприниматель",
      car: "BMW M4 Competition",
      rating: 5,
      text: "Невероятный автомобиль и сервис на высшем уровне! Команда BMW Екатеринбург превзошла все мои ожидания. M4 - это не просто машина, это эмоция на каждый день.",
      image: "/api/placeholder/80/80",
      verified: true,
      purchaseYear: "2024"
    },
    {
      id: 2,
      name: "Елена Смирнова",
      position: "Врач",
      car: "BMW X5 xDrive40i",
      rating: 5,
      text: "Покупала X5 для семьи - в восторге от комфорта и безопасности. Менеджеры очень внимательные, все объяснили, помогли с выбором комплектации. Рекомендую!",
      image: "/api/placeholder/80/80",
      verified: true,
      purchaseYear: "2024"
    },
    {
      id: 3,
      name: "Максим Королев",
      position: "IT-директор",
      car: "BMW 3 Series",
      rating: 5,
      text: "Отличный дилер! Быстро оформили trade-in, доплатил немного и получил новую 3-ку. Сервис работает четко, всегда записывают вовремя. Очень доволен покупкой.",
      image: "/api/placeholder/80/80",
      verified: true,
      purchaseYear: "2023"
    },
    {
      id: 4,
      name: "Ирина Волкова",
      position: "Дизайнер",
      car: "BMW iX",
      rating: 5,
      text: "Решила попробовать электрический BMW - и не пожалела! Невероятно тихий, мощный и технологичный. Команда салона помогла разобраться с зарядкой и всеми нюансами.",
      image: "/api/placeholder/80/80",
      verified: true,
      purchaseYear: "2024"
    },
    {
      id: 5,
      name: "Дмитрий Козлов",
      position: "Адвокат",
      car: "BMW M2",
      rating: 5,
      text: "M2 - мечта любого автолюбителя! Спасибо команде за терпение и профессионализм. Оформили все документы быстро, даже помогли с доставкой в офис. Высший класс!",
      image: "/api/placeholder/80/80",
      verified: true,
      purchaseYear: "2024"
    }
  ];

  const achievements = [
    {
      icon: Users,
      number: "2000+",
      label: "Довольных клиентов",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Award,
      number: "15+",
      label: "Лет на рынке",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Heart,
      number: "98%",
      label: "Рекомендуют друзьям",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Star,
      number: "4.9",
      label: "Средний рейтинг",
      color: "from-yellow-500 to-yellow-600"
    }
  ];

  // Автопрокрутка
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

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
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Декоративные элементы фона */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute bottom-32 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
            <Quote className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Почему клиенты
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              доверяют нам BMW
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Более 2000 довольных клиентов выбрали нас. Читайте реальные отзывы 
            владельцев BMW о нашем сервисе и качестве обслуживания
          </p>
        </div>

        {/* Достижения */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${achievement.color} mb-4`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{achievement.number}</div>
                <div className="text-gray-600 text-sm font-medium">{achievement.label}</div>
              </div>
            );
          })}
        </div>

        {/* Слайдер отзывов */}
        <div className="relative">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="relative">
              {/* Индикатор прогресса */}
              <div className="absolute top-0 left-0 h-1 bg-gray-200 w-full z-20">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 ease-out"
                  style={{ width: `${((currentSlide + 1) / testimonials.length) * 100}%` }}
                ></div>
              </div>

              {/* Контент слайда */}
              <div className="p-12 lg:p-16">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                  {/* Фото клиента */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden shadow-2xl">
                        <img 
                          src={testimonials[currentSlide].image} 
                          alt={testimonials[currentSlide].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {testimonials[currentSlide].verified && (
                        <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Контент отзыва */}
                  <div className="flex-1 text-center lg:text-left">
                    {/* Кавычки */}
                    <div className="flex justify-center lg:justify-start mb-6">
                      <Quote className="w-16 h-16 text-blue-500 opacity-20" />
                    </div>

                    {/* Рейтинг */}
                    <div className="flex justify-center lg:justify-start space-x-1 mb-6">
                      {renderStars(testimonials[currentSlide].rating)}
                    </div>

                    {/* Текст отзыва */}
                    <blockquote className="text-xl lg:text-2xl text-gray-800 font-medium leading-relaxed mb-8 italic">
                      "{testimonials[currentSlide].text}"
                    </blockquote>

                    {/* Информация о клиенте */}
                    <div className="space-y-2">
                      <div className="font-bold text-xl text-gray-900">
                        {testimonials[currentSlide].name}
                      </div>
                      <div className="text-gray-600">
                        {testimonials[currentSlide].position}
                      </div>
                      <div className="flex items-center justify-center lg:justify-start space-x-4 text-sm">
                        <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full font-medium">
                          {testimonials[currentSlide].car}
                        </span>
                        <span className="text-gray-500">
                          Покупка {testimonials[currentSlide].purchaseYear}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Кнопки навигации */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-all duration-300 hover:scale-110 z-10"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-all duration-300 hover:scale-110 z-10"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Точки навигации */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Кнопка автопрокрутки */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                isAutoPlaying 
                  ? 'bg-blue-500 text-white border-blue-500' 
                  : 'bg-white text-gray-600 border-gray-300 hover:border-gray-400'
              }`}
            >
              <Play className={`w-4 h-4 ${isAutoPlaying ? '' : 'opacity-50'}`} />
              <span className="text-sm font-medium">
                {isAutoPlaying ? 'Автопрокрутка включена' : 'Включить автопрокрутку'}
              </span>
            </button>
          </div>
        </div>

        {/* Призыв к действию */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-12 relative overflow-hidden">
            {/* Декоративные элементы */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
            <div className="absolute top-0 right-0 w-64 h-64 border border-white/5 rounded-full transform translate-x-32 -translate-y-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 border border-white/5 rounded-full transform -translate-x-24 translate-y-24"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">
                Станьте частью семьи довольных клиентов BMW
              </h3>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Присоединяйтесь к тысячам клиентов, которые уже оценили наш 
                премиальный сервис и качество обслуживания
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Записаться на тест-драйв
                </button>
                <button className="border-2 border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                  Оставить отзыв
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Кастомные стили для анимаций */}
      <style jsx="true">{`
        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
            animation: float 6s ease-in-out infinite;
        }
        `}</style>
    </section>
  );
};

export default Testimonials;