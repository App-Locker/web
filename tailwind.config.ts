import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      animation: {
        'slide-down': 'slideDown 0.5s ease-in-out forwards',
        'slide-up': 'slideUp 0.5s ease-in-out forwards',
      },
      keyframes: {
        slideDown: {
          '0%': { maxHeight: '0', opacity: '0' },
          '100%': { maxHeight: '250px', opacity: '1' },
        },
        slideUp: {
          '100%': { maxHeight: '0', opacity: '0' },
          '0%': { maxHeight: '250px', opacity: '1' },
        },
      },
    },
  },

  plugins: []
} as Config;