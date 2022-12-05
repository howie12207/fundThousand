/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'blue-700': '#005598',
                'blue-800': '#004790',
            },
            listStyleType: {
                circle: 'circle',
            },
        },
    },
    plugins: [],
};

// blue-700
// blue-800
// blue-900
// gray-300 disabled
// gray-700
// red-400
// red-500 error
// red-800
// yellow-50
// yellow-300
// yellow-600
// orange-50
// green-700
