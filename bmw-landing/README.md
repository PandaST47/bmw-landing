# 🚗 BMW M4 Landing - Инструкция по установке и запуску

## 📋 Предварительные требования

- Node.js версии 16.0 или выше
- npm или yarn
- Git (для клонирования проекта)

## 🚀 Пошаговая установка

### 1. Создание проекта

```bash
# Создаем новый Vite проект с React
npm create vite@latest bmw-landing -- --template react
cd bmw-landing
```

### 2. Установка основных зависимостей

```bash
# Основные зависимости
npm install

# Устанавливаем Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Дополнительные библиотеки из ТЗ
npm install framer-motion react-hook-form lucide-react swiper aos
```

### 3. Настройка Tailwind CSS

Отредактируйте `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bmw-blue': '#0066CC',
        'bmw-accent': '#FF6B35',
      },
      fontFamily: {
        'bmw': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

### 4. Настройка CSS

Замените содержимое `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', sans-serif;
  line-height: 1.6;
}

/* AOS animations */
@import 'aos/dist/aos.css';

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #0066CC;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #0052A3;
}
```

### 5. Создание структуры папок

```bash
# Создаем структуру папок согласно ТЗ
mkdir -p src/components/Header
mkdir -p src/components/Hero
mkdir -p src/components/About
mkdir -p src/components/FeaturedCar
mkdir -p src/components/ModelsShowcase
mkdir -p src/components/Services
mkdir -p src/components/Testimonials
mkdir -p src/components/Contact
mkdir -p src/components/CTASection
mkdir -p src/components/Footer
mkdir -p src/components/UI
mkdir -p src/hooks
mkdir -p src/utils
mkdir -p src/assets/images
mkdir -p public/images
```

### 6. Запуск проекта

```bash
# Запуск в режиме разработки
npm run dev

# Проект будет доступен по адресу: http://localhost:5173
```

### 7. Сборка для продакшена

```bash
# Создание production build
npm run build

# Предварительный просмотр production build
npm run preview
```

## 📁 Финальная структура проекта

```
bmw-landing/
├── public/
│   ├── images/          # Изображения BMW
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── FeaturedCar/
│   │   ├── ModelsShowcase/
│   │   ├── Services/
│   │   ├── Testimonials/
│   │   ├── Contact/
│   │   ├── CTASection/
│   │   ├── Footer/
│   │   └── UI/
│   ├── hooks/
│   ├── utils/
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── package.json
├── tailwind.config.js
└── vite.config.js
```

### SEO настройки
Обновите `index.html` в папке `public`:

```html
<title>BMW M4 и другие модели - Официальный дилер в Екатеринбурге</title>
<meta name="description" content="Купить BMW M4, X5, 3-Series в Екатеринбурге. Официальный дилер BMW. Тест-драйв, Trade-in, сервис. ☎ +7 (343) 123-45-67">
```

## 🚀 Готово к запуску!

После выполнения всех шагов вы получите полностью настроенный проект BMW лендинга с современным стеком технологий, готовый к разработке и развертыванию.