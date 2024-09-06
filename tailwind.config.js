module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Scan all necessary files
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#3B5987', // Example custom blue color
        customGray: '#64748b', // Example custom gray color
        customOrange: '#fb923c', // Example custom orange color
      },
      screens: {
        sm: '640px',   // Small screens
        md: '768px',   // Medium screens
        lg: '1024px',  // Large screens
        xl: '1280px',  // Extra large screens
      },
      width: {
        'custom-small': '100%',    // Full width for small screens
        'custom-medium': '50%',    // Medium width for larger screens
        'custom-large': '30%',     // Smaller width for large screens
      },
    },
  },
  plugins: [],
}
