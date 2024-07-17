/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "move-down": "moveDown 1s ease-in-out infinite",
        bounce: "bounce 2s infinite",
        'fade-in': 'fadeIn 1s ease-in 1s forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        moveDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },

  plugins: [],
};

// tailwind.config.js
// module.exports = {
//   content: [
//     './src/**/*.{js,jsx,ts,tsx}',
//   ],
//   theme: {
//     extend: {
//       animation: {
//         'fade-in': 'fadeIn 1s ease-in 1s forwards',
//       },
//       keyframes: {
//         fadeIn: {
//           '0%': { opacity: 0, transform: 'translateY(20px)' },
//           '100%': { opacity: 1, transform: 'translateY(0)' },
//         },
//       },
//     },
//   },
//   plugins: [],
// }


// module.exports = {
//   content: [
//     './src/**/*.{js,jsx,ts,tsx}',
//   ],
//   theme: {
//     extend: {
//       animation: {
//         'move-down': 'moveDown 1s ease-in-out infinite',
//       },
//       keyframes: {
//         moveDown: {
//           '0%': { transform: 'translateY(-100%)' },
//           '100%': { transform: 'translateY(0)' },
//         },
//       },
//     },
//   },
//   plugins: [],
// }

// tailwind.config.js
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
//   theme: {
//     extend: {
//       keyframes: {
//         bounce: {
//           "0%, 100%": { transform: "translateY(0)" },
//           "50%": { transform: "translateY(-20px)" },
//         },
//       },
//       animation: {
//         bounce: "bounce 2s infinite",
//       },
//     },
//   },
//   plugins: [],
// };
