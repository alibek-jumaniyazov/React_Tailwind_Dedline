/** @type {import('tailwindcss').Config} */
export default {

    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                main: "#EC1026",
                mainTow: "#00B6BA",
                garyOne: "#222220",
                garyTow: "#9D9C98",
                garyThree: "#E1DFDA",
                garyFour: "#E5E5E5",
                garyFive: "#F7F7F7",
                doneBlue: "#0000B0",
                donePink: "#E94B67",
                doneYellow: "#F7CE46",
            },
            screens: {
                mobile: "410px",
            },
        },
    },
    plugins: [],
};
