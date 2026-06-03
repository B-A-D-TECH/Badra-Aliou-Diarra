export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 24px 80px rgba(15, 23, 42, 0.12)'
      },
      backgroundImage: {
        hero: 'radial-gradient(circle at top left, rgba(59,130,246,0.18), transparent 24%), radial-gradient(circle at bottom right, rgba(16,185,129,0.12), transparent 28%)'
      }
    }
  },
  plugins: []
};
