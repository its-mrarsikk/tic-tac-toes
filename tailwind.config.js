/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx,html}",];
export const theme = {
    extend: {
        animation: {
            marquee1: 'marquee1 20s linear infinite',
            marquee2: 'marquee2 20s linear infinite'
        },
        keyframes: {
            marquee1: {
                '0%': { transform: 'translateX(0%)' },
                '100%': { transform: 'translateX(-100%)' }
            },
            marquee2: {
                '0%': { transform: 'translateX(100%)' },
                '100%': { transform: 'translateX(0%)' }
            }
        }
    }
};
export const plugins = [];

