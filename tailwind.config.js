/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', 'sans-serif'],
                logo: ['Comic Neue', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
