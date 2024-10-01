/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,ts}"],
    theme: {
      extend: {
        colors: {
          "blue-500": "#0078A9",
          neutral50: '#F9FAFB',
          neutral200: '#E5E7EB',
          neutral300: '#D1D5DB',
          neutral500: '#6B7280',
          neutral900: '#111827',
          primary50: '#E5F8FF',
          primary200: '#83D7FB',
          primary500: '#0078A9',
          destructive50: '#FEF2F2'
        },
        fontFamily: {
          rig_sans: ['Rig Sans', 'sans-serif'],
          rig_medium: ['RigSansMedium', 'sans-serif'],
          rig_bold: ['RigSansBold', 'sans-serif'],
          rig_bold_italic: ['RigSansBoldItalic', 'sans-serif'],
          rig_light_italic: ['RigSansLightItalic', 'sans-serif']
        }
      },
    },
    plugins: [],
  };
  