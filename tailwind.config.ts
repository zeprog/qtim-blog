import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['TT Commons', 'sans-serif']
      },
      colors: {
        dark: '#101010',
        'dark-gray': '#232323',
        gray: '#868686',
        'gray-dark-light': "#E8E8E8",
        'gray-light': '#F3F3F3',
        'black-100': 'rgba(0,0,0,0.1)',
        purple: '#E2BEFF'
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}

export default config