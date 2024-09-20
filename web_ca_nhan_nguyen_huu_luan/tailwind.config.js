/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '0px', // Điểm gãy nhỏ (sm) thường được đặt ở 640px
        md: '768px', // Điểm gãy trung bình (md) thường được đặt ở 768px
        lg: '900px', // Điểm gãy lớn (lg) tùy chỉnh ở 900px
        lgluan: '1100px', // Điểm gãy lớn (lg) tùy chỉnh ở 900px
        xl: '1280px', // Điểm gãy rất lớn (xl)
        '2xl': '1536px', // Điểm gãy cực lớn (2xl)
      },
      height: {
        custom: '70%', // Example custom height
        '100vh': '100%',
      },
      width: {
        custom: '70%', // Example custom width
        '100vw': '100%',
      },
    },
  },
  plugins: [],
}
