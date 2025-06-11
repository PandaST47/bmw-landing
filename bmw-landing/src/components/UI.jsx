import React, { useState, useEffect } from 'react';
import { ChevronDown, Phone, Mail, MapPin, Clock, Star, ArrowRight, Play, X, Check, Car, Shield, Award, Users, Wrench, CreditCard } from 'lucide-react';

// Button Component
export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick,
  disabled = false,
  icon,
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl focus:ring-blue-500',
    secondary: 'bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white shadow-lg hover:shadow-xl focus:ring-gray-500',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent focus:ring-blue-500',
    accent: 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg hover:shadow-xl focus:ring-orange-500',
    ghost: 'text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:ring-blue-500'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-xl',
    lg: 'px-8 py-4 text-lg rounded-xl',
    xl: 'px-10 py-5 text-xl rounded-2xl'
  };
  
  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

// Card Component
export const Card = ({ children, className = '', hover = false, gradient = false }) => {
  const baseClasses = 'bg-white rounded-2xl shadow-lg transition-all duration-300';
  const hoverClasses = hover ? 'hover:shadow-2xl hover:-translate-y-2 cursor-pointer' : '';
  const gradientClasses = gradient ? 'bg-gradient-to-br from-white to-gray-50' : '';
  
  return (
    <div className={`${baseClasses} ${hoverClasses} ${gradientClasses} ${className}`}>
      {children}
    </div>
  );
};

// Modal Component
export const Modal = ({ isOpen, onClose, children, title, size = 'md' }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const sizes = {
    sm: 'max-w-md',
    md: 'max-w-2xl',
    lg: 'max-w-4xl',
    xl: 'max-w-6xl'
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black bg-opacity-75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      <div className={`relative bg-white rounded-3xl shadow-2xl ${sizes[size]} mx-4 max-h-[90vh] overflow-auto`}>
        <div className="flex items-center justify-between p-6 border-b">
          <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

// Input Component
export const Input = ({ 
  label, 
  error, 
  className = '', 
  type = 'text',
  placeholder,
  icon,
  ...props 
}) => {
  const [focused, setFocused] = useState(false);
  
  return (
    <div className="relative">
      {label && (
        <label className={`absolute left-4 transition-all duration-200 pointer-events-none ${
          focused || props.value ? 'top-2 text-xs text-blue-600' : 'top-4 text-base text-gray-500'
        }`}>
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
        <input
          type={type}
          className={`w-full px-4 ${icon ? 'pl-12' : ''} ${label ? 'pt-6 pb-2' : 'py-4'} border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors ${error ? 'border-red-500' : ''} ${className}`}
          placeholder={!label ? placeholder : ''}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...props}
        />
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

// Select Component
export const Select = ({ 
  label, 
  error, 
  className = '', 
  options = [],
  placeholder = "Выберите опцию",
  ...props 
}) => {
  return (
    <div className="relative">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          className={`w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors appearance-none bg-white ${error ? 'border-red-500' : ''} ${className}`}
          {...props}
        >
          <option value="">{placeholder}</option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

// Loading Spinner
export const LoadingSpinner = ({ size = 'md', className = '' }) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };
  
  return (
    <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-blue-600 ${sizes[size]} ${className}`} />
  );
};

// Badge Component
export const Badge = ({ children, variant = 'default', className = '' }) => {
  const variants = {
    default: 'bg-gray-100 text-gray-800',
    primary: 'bg-blue-100 text-blue-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800'
  };
  
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

// Stats Card Component
export const StatsCard = ({ icon, value, label, description, animated = false }) => {
  const [count, setCount] = useState(0);
  const finalValue = parseInt(value);
  
  useEffect(() => {
    if (animated && finalValue) {
      let start = 0;
      const increment = finalValue / 100;
      const timer = setInterval(() => {
        start += increment;
        if (start >= finalValue) {
          setCount(finalValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 20);
      
      return () => clearInterval(timer);
    } else {
      setCount(finalValue);
    }
  }, [finalValue, animated]);
  
  return (
    <Card className="p-6 text-center" hover>
      <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
        <div className="text-blue-600">
          {icon}
        </div>
      </div>
      <div className="text-3xl font-bold text-gray-900 mb-2">
        {animated ? count : value}
        {value.includes('+') && '+'}
      </div>
      <div className="text-lg font-semibold text-gray-700 mb-1">{label}</div>
      {description && (
        <div className="text-sm text-gray-500">{description}</div>
      )}
    </Card>
  );
};

// Testimonial Card Component
export const TestimonialCard = ({ name, model, rating, review, avatar }) => {
  return (
    <Card className="p-6" hover>
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-4">
          {avatar ? (
            <img src={avatar} alt={name} className="w-12 h-12 rounded-full object-cover" />
          ) : (
            <span className="text-xl font-bold text-gray-600">{name.charAt(0)}</span>
          )}
        </div>
        <div>
          <div className="font-semibold text-gray-900">{name}</div>
          <div className="text-sm text-gray-500">{model}</div>
        </div>
      </div>
      
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      
      <p className="text-gray-700 leading-relaxed">{review}</p>
    </Card>
  );
};

// Car Card Component
export const CarCard = ({ 
  name, 
  price, 
  image, 
  features = [], 
  onLearnMore,
  badge,
  priceLabel = "от"
}) => {
  return (
    <Card className="overflow-hidden group" hover>
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {badge && (
          <div className="absolute top-4 left-4">
            <Badge variant="primary">{badge}</Badge>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
        
        <div className="text-2xl font-bold text-blue-600 mb-4">
          {priceLabel} {price}
        </div>
        
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600">
              <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        
        <Button 
          variant="outline" 
          className="w-full"
          onClick={onLearnMore}
          icon={<ArrowRight className="w-4 h-4" />}
        >
          Подробнее
        </Button>
      </div>
    </Card>
  );
};

// Service Card Component
export const ServiceCard = ({ icon, title, description, features = [] }) => {
  return (
    <Card className="p-6 h-full" hover>
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
          <div className="text-blue-600">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      
      {features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600">
              <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
};

// Contact Info Component
export const ContactInfo = ({ icon, title, value, description }) => {
  return (
    <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
        <div className="text-blue-600">
          {icon}
        </div>
      </div>
      <div>
        <h4 className="font-semibold text-gray-900 mb-1">{title}</h4>
        <p className="text-lg text-gray-900 mb-1">{value}</p>
        {description && (
          <p className="text-sm text-gray-500">{description}</p>
        )}
      </div>
    </div>
  );
};

// Demo Component showcasing all UI elements
const UIDemo = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    model: ''
  });

  const carModels = [
    { value: 'bmw-m4', label: 'BMW M4 Competition' },
    { value: 'bmw-3-series', label: 'BMW 3 Series' },
    { value: 'bmw-5-series', label: 'BMW 5 Series' },
    { value: 'bmw-x3', label: 'BMW X3' },
    { value: 'bmw-x5', label: 'BMW X5' }
  ];

  const features = [
    'Двигатель 3.0L Twin Turbo',
    'Мощность 510 л.с.',
    'Разгон 0-100 за 3.9 сек',
    'Полный привод xDrive'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            BMW UI Components
          </h1>
          <p className="text-xl text-gray-600">
            Премиальные компоненты для автосалона BMW
          </p>
        </div>

        {/* Buttons */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Кнопки</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Записаться на тест-драйв</Button>
            <Button variant="secondary">Узнать цену</Button>
            <Button variant="outline">Подробнее</Button>
            <Button variant="accent">Специальное предложение</Button>
            <Button variant="ghost">Отмена</Button>
            <Button variant="primary" icon={<Phone className="w-4 h-4" />}>
              Заказать звонок
            </Button>
          </div>
        </section>

        {/* Stats Cards */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Статистика</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard
              icon={<Award className="w-8 h-8" />}
              value="15+"
              label="лет на рынке"
              description="Проверенный опыт"
              animated
            />
            <StatsCard
              icon={<Users className="w-8 h-8" />}
              value="2000+"
              label="довольных клиентов"
              description="Наше доверие"
              animated
            />
            <StatsCard
              icon={<Clock className="w-8 h-8" />}
              value="24/7"
              label="техподдержка"
              description="Всегда на связи"
            />
            <StatsCard
              icon={<Shield className="w-8 h-8" />}
              value="100%"
              label="оригинальные запчасти"
              description="Гарантия качества"
            />
          </div>
        </section>

        {/* Car Card */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Карточка автомобиля</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <CarCard
              name="BMW M4 Competition"
              price="7 500 000 ₽"
              image="https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              features={features}
              badge="Новинка"
              onLearnMore={() => setModalOpen(true)}
            />
            <CarCard
              name="BMW X5 xDrive40i"
              price="6 200 000 ₽"
              image="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              features={['Просторный салон', 'Полный привод', 'Премиум комплектация']}
              onLearnMore={() => setModalOpen(true)}
            />
            <CarCard
              name="BMW 3 Series"
              price="3 800 000 ₽"
              image="https://images.unsplash.com/photo-1617531653332-bd46c24f2068?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              features={['Спортивный дизайн', 'Экономичный двигатель', 'Современные технологии']}
              onLearnMore={() => setModalOpen(true)}
            />
          </div>
        </section>

        {/* Service Cards */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={<Car className="w-6 h-6" />}
              title="Продажа новых автомобилей"
              description="Полная линейка BMW в наличии с официальной гарантией"
              features={['Все модели BMW', 'Официальная гарантия', 'Выгодные условия']}
            />
            <ServiceCard
              icon={<Wrench className="w-6 h-6" />}
              title="Сервисное обслуживание"
              description="Профессиональный сервис с использованием оригинальных запчастей"
              features={['Оригинальные запчасти', 'Сертифицированные мастера', 'Быстрое обслуживание']}
            />
            <ServiceCard
              icon={<CreditCard className="w-6 h-6" />}
              title="Финансовые услуги"
              description="Кредитование и лизинг на выгодных условиях"
              features={['Кредит от 0.1%', 'Лизинг для юрлиц', 'Trade-in программа']}
            />
          </div>
        </section>

        {/* Testimonial */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Отзывы клиентов</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialCard
              name="Александр Петров"
              model="BMW M4 Competition"
              rating={5}
              review="Невероятные эмоции от вождения! Профессиональный сервис и отличное обслуживание в салоне."
            />
            <TestimonialCard
              name="Мария Смирнова"
              model="BMW X5"
              rating={5}
              review="Идеальный автомобиль для семьи. Комфорт, безопасность и престиж в одном."
            />
            <TestimonialCard
              name="Дмитрий Козлов"
              model="BMW 3 Series"
              rating={4}
              review="Отличное соотношение цены и качества. Рекомендую этот автосалон!"
            />
          </div>
        </section>

        {/* Contact Info */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Контактная информация</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Свяжитесь с нами</h3>
              <div className="space-y-4">
                <ContactInfo
                  icon={<Phone className="w-5 h-5" />}
                  title="Телефон"
                  value="+7 (343) 123-45-67"
                  description="Ежедневно с 9:00 до 20:00"
                />
                <ContactInfo
                  icon={<Mail className="w-5 h-5" />}
                  title="Email"
                  value="info@bmw-ekb.ru"
                  description="Ответим в течение часа"
                />
                <ContactInfo
                  icon={<MapPin className="w-5 h-5" />}
                  title="Адрес"
                  value="ул. Примерная, д. 123"
                  description="Екатеринбург, центр города"
                />
              </div>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Записаться на тест-драйв</h3>
              <div className="space-y-4">
                <Input
                  label="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  icon={<Users className="w-5 h-5" />}
                />
                <Input
                  label="Телефон"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  icon={<Phone className="w-5 h-5" />}
                />
                <Select
                  label="Модель автомобиля"
                  options={carModels}
                  value={formData.model}
                  onChange={(e) => setFormData({...formData, model: e.target.value})}
                />
                <Button variant="primary" className="w-full">
                  Записаться на тест-драйв
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Modal Demo Button */}
        <div className="text-center">
          <Button 
            variant="accent" 
            size="lg"
            onClick={() => setModalOpen(true)}
            icon={<Play className="w-5 h-5" />}
          >
            Открыть модальное окно
          </Button>
        </div>

        {/* Modal */}
        <Modal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          title="BMW M4 Competition - Детали"
          size="lg"
        >
          <div className="space-y-6">
            <img 
              src="https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="BMW M4"
              className="w-full h-64 object-cover rounded-xl"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Технические характеристики</h4>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Двигатель:</span>
                    <span className="font-medium">3.0L Twin Turbo</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Мощность:</span>
                    <span className="font-medium">510 л.с.</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Разгон 0-100:</span>
                    <span className="font-medium">3.9 сек</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Макс. скорость:</span>
                    <span className="font-medium">250 км/ч</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Цена и условия</h4>
                <div className="text-3xl font-bold text-blue-600 mb-4">
                  от 7 500 000 ₽
                </div>
                <div className="space-y-3">
                  <Button variant="primary" className="w-full">
                    Записаться на тест-драйв
                  </Button>
                  <Button variant="outline" className="w-full">
                    Рассчитать кредит
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default UIDemo;