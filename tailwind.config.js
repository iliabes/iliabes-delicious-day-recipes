export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        my:{
          primary:'#C3E2C2',
          second: '#EAECCC',
          accent: '#DBCC95',
          accentdark: '#CD8D7A',
          primarydark:'#a5c0a4'
        }
      }
    },
  },
  plugins:  
    [
      require('@tailwindcss/forms'),
    ],
} 