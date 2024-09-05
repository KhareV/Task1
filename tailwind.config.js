module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Add this line to scan your files
  ],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
        customBlue: '#3B5987', // Example custom blue color
        customGray: '#64748b', // Example custom gray color
        customOrange: '#fb923c', // Example custom orange color
      },
    },
  },
  plugins: [],
}
