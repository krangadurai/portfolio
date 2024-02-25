/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')
export default {
    darkMode: ['class', '[data-mode="dark"]'],
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                mont: ['Montserrat', ...fontFamily.sans],
            },
            colors: {
                dark: "#1b1b1b",
                light: "#f5f5f5",
                primary: "#B63E96", // 240,86,199
                primaryDark: "#58E6D9", // 80,230,217
            },
            animation: {
                'spin-slow': 'spin 3s linear infinite',
            },
            backgroundImage: {
                radialCircle: `repeating-radial-gradient(circle at center, #333, #333 1%, #fff 1%, #fff 20%)`,
                radialCircledark: `repeating-radial-gradient(ellipse  at center, #333, #333 2px, #fff 2px, #fff 150px)`
            },
            screens: {
                sm: {  max: '320px',min:'0px'},
                md: { max: '640px', min: '321px' },
                lg: { max: '980px', min: '641px' },
                xl: { min: '980px' },
            },
            strokeWidth: {
                '2': '5px',
              }
        },
    },
    plugins: [],
}

