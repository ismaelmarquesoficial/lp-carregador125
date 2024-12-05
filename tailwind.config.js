/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1s ease-in',
        'pulse-slow': 'pulse 3s infinite',
        'bounce-slow': 'bounce-slow 3s infinite',
        'spin-slow': 'spin-slow 8s linear infinite',
        'text-glow': 'text-glow 2s infinite',
        'power-surge': 'power-surge 3s linear infinite',
        'speed-line': 'speed-line 3s linear infinite',
        'lightning': 'lightning 2s infinite',
        'charging': 'charging 1.5s infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'spin-slow': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
        'text-glow': {
          '0%, 100%': { textShadow: '0 0 10px rgba(255, 255, 0, 0.5)' },
          '50%': { textShadow: '0 0 20px rgba(255, 255, 0, 0.8)' },
        },
        'power-surge': {
          '0%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'speed-line': {
          '0%': { transform: 'translateX(100%) scaleX(1)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateX(-200%) scaleX(0)', opacity: '0' },
        },
        'lightning': {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '0.3' },
        },
        'charging': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
        'float': {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0px)' },
        },
      },
    },
  },
  plugins: [],
};