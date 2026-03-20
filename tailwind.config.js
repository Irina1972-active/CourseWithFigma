/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8b5cf6',      // Фиолетовый
        secondary: '#ec4899',    // Розовый
        accent: '#fbbf24',       // Золотой
        'neon-blue': '#06b6d4',  // Неоновый голубой
        'hot-pink': '#f472b6',   // Ярко-розовый
        'sunset': '#f97316',     // Оранжевый закат
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        'rainbow-gradient': 'linear-gradient(90deg, #ff6b6b, #f9ca24, #6c5ce7, #00cec9, #fd79a8)',
        'aurora-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #ff6b6b 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'gradient': 'gradient 8s linear infinite',
      },
    },
  },
  plugins: [],
}
