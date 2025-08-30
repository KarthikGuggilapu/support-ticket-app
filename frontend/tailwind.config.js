/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        priority: {
          high: '#DC2626',
          medium: '#F59E0B',
          low: '#10B981'
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}
