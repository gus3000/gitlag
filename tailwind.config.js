import flowbite from 'flowbite/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  purge: [],
  darkMode: 'media',
  content: [
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite
  ],
}
