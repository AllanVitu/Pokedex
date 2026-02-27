/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                page: 'rgb(var(--bg-page) / <alpha-value>)',
                surface: 'rgb(var(--bg-surface) / <alpha-value>)',
                primary: 'rgb(var(--primary) / <alpha-value>)',
                'text-primary': 'rgb(var(--text-primary) / <alpha-value>)',
                'text-muted': 'rgb(var(--text-muted) / <alpha-value>)',
                'border-color': 'rgb(var(--border-color) / <alpha-value>)',
            },
            borderRadius: {
                '2xl': '1rem',
                '3xl': '1.5rem',
                '4xl': '2rem',
            },
            boxShadow: {
                'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
                'soft-dark': '0 4px 20px -2px rgba(0, 0, 0, 0.3)',
            }
        },
    },
    plugins: [],
}
