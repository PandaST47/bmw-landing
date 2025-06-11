import { useState, useEffect } from 'react';
import { Award, Shield, Clock, Wrench, TrendingUp, Users, Phone, Star } from 'lucide-react';

const StatCounter = ({ end, duration = 2000, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          
          let start = 0;
          const increment = end / (duration / 16);
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById(`counter-${end}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [end, duration, isVisible]);

  return (
    <span id={`counter-${end}`} className="font-bold text-4xl md:text-5xl bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

const About = () => {
  const statistics = [
    {
      number: 15,
      label: 'лет на рынке',
      suffix: '+',
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      description: 'Проверенный временем опыт'
    },
    {
      number: 2000,
      label: 'довольных клиентов',
      suffix: '+',
      icon: <Users className="w-8 h-8 text-blue-600" />,
      description: 'Доверие тысяч автовладельцев'
    },
    {
      number: 24,
      label: 'техподдержка',
      suffix: '/7',
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      description: 'Круглосуточная поддержка'
    },
    {
      number: 100,
      label: 'оригинальные запчасти',
      suffix: '%',
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      description: 'Только подлинные компоненты BMW'
    }
  ];

  const advantages = [
    {
      icon: <Shield className="w-12 h-12 text-white" />,
      title: 'Официальная гарантия BMW',
      description: 'Полная гарантия производителя на все автомобили и услуги. Ваша уверенность в качестве.',
      gradient: 'from-blue-600 to-blue-700'
    },
    {
      icon: <Wrench className="w-12 h-12 text-white" />,
      title: 'Профессиональный сервисный центр',
      description: 'Современное оборудование и сертифицированные мастера BMW для идеального обслуживания.',
      gradient: 'from-blue-700 to-blue-800'
    },
    {
      icon: <Award className="w-12 h-12 text-white" />,
      title: 'Trade-in программа',
      description: 'Выгодный обмен вашего автомобиля на новый BMW. Максимальная стоимость вашего авто.',
      gradient: 'from-blue-800 to-blue-900'
    },
    {
      icon: <Star className="w-12 h-12 text-white" />,
      title: 'Кредитование от 0.1%',
      description: 'Специальные предложения по финансированию. Получите BMW уже сегодня на выгодных условиях.',
      gradient: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section id="about" className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
            <Award className="w-4 h-4" />
            О ДИЛЕРЕ
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Премиальный автомобильный
            <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              опыт в Екатеринбурге
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Мы создаем исключительный опыт владения BMW уже более 15 лет. 
            Каждый клиент получает индивидуальный подход и премиальное обслуживание.
          </p>
        </div>

        {/* Статистика */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {statistics.map((stat, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Градиентный фон при ховере */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl mb-6 group-hover:bg-white/20 transition-colors duration-500">
                  <div className="group-hover:text-white transition-colors duration-500">
                    {stat.icon}
                  </div>
                </div>
                
                <div className="text-center">
                  <StatCounter 
                    end={stat.number} 
                    suffix={stat.suffix}
                  />
                  <div className="text-lg font-semibold text-gray-700 mt-2 group-hover:text-white transition-colors duration-500">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-500 mt-1 group-hover:text-blue-100 transition-colors duration-500">
                    {stat.description}
                  </div>
                </div>
              </div>

              {/* BMW логотип декор */}
              <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Ключевые преимущества */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:scale-105"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${advantage.gradient}`}></div>
              
              {/* Анимированный фон */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-white rounded-full group-hover:scale-150 transition-transform duration-1000"></div>
                <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-white/30 rounded-full group-hover:scale-125 transition-transform duration-1000"></div>
              </div>
              
              <div className="relative z-10 p-8 lg:p-10">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center group-hover:bg-white/30 transition-colors duration-500 group-hover:rotate-12 transition-transform">
                    {advantage.icon}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-100 transition-colors duration-300">
                      {advantage.title}
                    </h3>
                    <p className="text-blue-100 leading-relaxed text-lg">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Декоративная линия */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></div>
            </div>
          ))}
        </div>

        {/* Призыв к действию */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4">
            <button className="group relative bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
              <span className="relative z-10 flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Связаться с нами
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;