/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './src/*/.{vue,js,ts,jsx,tsx}'],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            colors: {
                primary: {
                    50: '#eff8ff',
                    100: '#ccdde9',
                    200: '#99bbd3',
                    300: '#6698bc',
                    400: '#3376a6',
                    500: '#005490',
                    600: '#004373',
                    700: '#003256',
                    800: '#00223a',
                    900: '#00111d',
                },
                secondary: {
                    100: '#e9cddc',
                    200: '#d49bba',
                    300: '#be6a97',
                    400: '#a93875',
                    500: '#930652',
                    600: '#760542',
                    700: '#580431',
                    800: '#3b0221',
                    900: '#1d0110',
                },
                success: '#47B275',
                error: '#D63619',
                warning: '#F07641',
            },
        },
    },
    plugins: [import('tailwindcss-primeui'), import('@tailwindcss/forms'), import('@tailwindcss/typography')],
};
