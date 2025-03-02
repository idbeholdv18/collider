/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./public/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "foreground-contranst": "var(--foreground-contranst)",
      "foreground-primary": "var(--foreground-primary)",
      "background-contranst": "var(--background-contranst)",
      "background-primary": "var(--background-primary)",
      "border-primary": "var(--border-primary)",
      "link-primary": "var(--link-primary)",
    },
  },
  plugins: [],
};
