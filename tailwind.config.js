const config = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust the paths according to your project structure
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#7CB705',
        'green':'#3F9C39',
        'blue':'#00618A',
        'yellow':'#FFFF00',
        'html':'#E44C21',
        'css':'#1472B5', // Définir la couleur personnalisée
      },
    },
  },
  plugins: [],
};

export default config;