/* eslint-disable no-undef */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            height: {
                'full-nav': 'calc(100vh - 64px)',
            }
        },
    },
    plugins: [],
};
