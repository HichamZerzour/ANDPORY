
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            primary: ["Chivo", "sans-serif"],
            secondary: ["Alegreya Sans SC", "sans-serif"],
        },
        container: {
            padding: {
                DEFAULT: "15px",
            },
        },
        screens: {
            sm: "640px",
            md: "768px",
            lg: "960px",
            xl: "1200px",
        },
        extend: {
            colors: {
                primary: "#833471",
                secondary: "#1289A7",
            },
            backgroundImage: {
                hero: "url('./src/assets/imgs/hero1.png')",
                about: "url('./src/assets/imgs/about.jpeg')",
                services:"url('./src/assets/imgs/services.png')",
                myimg: "url('./assets/myimg.png')",
            },
        },
    },
    plugins: [],
};

