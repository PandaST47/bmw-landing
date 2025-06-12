import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, Clock, Wrench, TrendingUp, Users, Phone, Star, Zap, Target, Crown, Sparkles } from 'lucide-react';

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
    <span id={`counter-${end}`} className="font-bold text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-blue-400 via-white to-blue-200 bg-clip-text text-transparent">
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
      icon: <TrendingUp className="w-8 h-8" />,
      description: 'Проверенный временем опыт',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      number: 2000,
      label: 'довольных клиентов',
      suffix: '+',
      icon: <Users className="w-8 h-8" />,
      description: 'Доверие тысяч автовладельцев',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      number: 24,
      label: 'техподдержка',
      suffix: '/7',
      icon: <Clock className="w-8 h-8" />,
      description: 'Круглосуточная поддержка',
      color: 'from-violet-500 to-purple-500'
    },
    {
      number: 100,
      label: 'оригинальные запчасти',
      suffix: '%',
      icon: <Shield className="w-8 h-8" />,
      description: 'Только подлинные компоненты BMW',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const advantages = [
    {
      icon: <Crown className="w-12 h-12 text-white" />,
      title: 'Официальная гарантия BMW',
      description: 'Полная гарантия производителя на все автомобили и услуги. Ваша уверенность в качестве премиум-класса.',
      gradient: 'from-blue-600 via-blue-700 to-blue-800',
      accentColor: 'from-yellow-400 to-amber-500'
    },
    {
      icon: <Zap className="w-12 h-12 text-white" />,
      title: 'Профессиональный сервисный центр',
      description: 'Современное оборудование и сертифицированные мастера BMW для идеального обслуживания вашего автомобиля.',
      gradient: 'from-emerald-600 via-teal-700 to-cyan-800',
      accentColor: 'from-emerald-400 to-teal-500'
    },
    {
      icon: <Target className="w-12 h-12 text-white" />,
      title: 'Trade-in программа',
      description: 'Выгодный обмен вашего автомобиля на новый BMW. Максимальная стоимость оценки и честные условия.',
      gradient: 'from-violet-600 via-purple-700 to-indigo-800',
      accentColor: 'from-violet-400 to-purple-500'
    },
    {
      icon: <Sparkles className="w-12 h-12 text-white" />,
      title: 'Кредитование от 0.1%',
      description: 'Специальные предложения по финансированию. Получите BMW уже сегодня на самых выгодных условиях.',
      gradient: 'from-orange-600 via-red-700 to-pink-800',
      accentColor: 'from-orange-400 to-red-500'
    }
  ];

  return (
    <section id="about" className="relative min-h-screen py-20">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 backdrop-blur-lg border border-white/20 text-white px-8 py-3 rounded-full text-sm font-semibold mb-8 shadow-2xl"
          >
            <Award className="w-5 h-5 text-blue-400" />
            ПРЕМИАЛЬНЫЙ ДИЛЕР BMW
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
            className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
              Премиальный
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              автомобильный опыт
            </span>
            <br />
            <span className="text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
              в Екатеринбурге
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed"
          >
            Мы создаем исключительный опыт владения BMW уже более 15 лет. 
            Каждый клиент получает индивидуальный подход и премиальное обслуживание мирового класса.
          </motion.p>
        </motion.div>

        {/* Enhanced Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-24">
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              className="group relative bg-white/10 backdrop-blur-lg rounded-3xl p-6 lg:p-8 shadow-2xl hover:shadow-3xl border border-white/20 hover:border-white/40 overflow-hidden"
            >
              {/* Animated background gradient */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20`}
                whileHover={{ opacity: 0.2 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Floating particles inside cards */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white/40 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 2 + Math.random(),
                    repeat: Infinity,
                    delay: Math.random() * 2
                  }}
                />
              ))}
              
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${stat.color} rounded-2xl mb-6 shadow-xl`}
                >
                  <div className="text-white">
                    {stat.icon}
                  </div>
                </motion.div>
                
                <div className="text-center">
                  <StatCounter 
                    end={stat.number} 
                    suffix={stat.suffix}
                  />
                  <div className="text-lg lg:text-xl font-semibold text-white mt-3 mb-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-blue-200 leading-relaxed">
                    {stat.description}
                  </div>
                </div>
              </div>

              {/* Corner decoration */}
              <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-white/20 to-white/5 rounded-full"></div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Advantages */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-4xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${advantage.gradient}`}></div>
              
              {/* Enhanced animated background */}
              <motion.div
                className="absolute inset-0 opacity-30"
                animate={{
                  background: [
                    'radial-gradient(circle at 0% 0%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                    'radial-gradient(circle at 100% 100%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                    'radial-gradient(circle at 0% 100%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                    'radial-gradient(circle at 100% 0%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                  ]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Floating elements */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white/20 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [-10, -30, -10],
                      opacity: [0, 0.6, 0],
                      scale: [0, 1, 0]
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2
                    }}
                  />
                ))}
              </div>
              
              <div className="relative z-10 p-8 lg:p-10">
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <motion.div
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`flex-shrink-0 w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br ${advantage.accentColor} rounded-2xl flex items-center justify-center shadow-2xl`}
                  >
                    {advantage.icon}
                  </motion.div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">
                      {advantage.title}
                    </h3>
                    <p className="text-blue-100 leading-relaxed text-lg">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Bottom accent line */}
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: index * 0.2 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block relative group"
          >
            <motion.button
              className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl overflow-hidden"
              whileHover={{
                background: "linear-gradient(45deg, #1E40AF, #3B82F6, #1E40AF)"
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10 flex items-center gap-3">
                <Phone className="w-6 h-6" />
                Связаться с нами прямо сейчас
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="w-6 h-6 text-yellow-400" />
                </motion.div>
              </span>
            </motion.button>
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300 -z-10"></div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-blue-200 mt-6 text-lg"
          >
            Получите персональное предложение уже сегодня
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;