// utils.ts
const darkMode = (): void => {
    document.querySelector("body")?.setAttribute("data-bs-theme", "dark");
    document.querySelector("#dm-icon")?.setAttribute("class", "bi bi-sun-fill");
};

const lightMode = (): void => {
    document.querySelector("body")?.setAttribute("data-bs-theme", "light");
    document.querySelector("#dm-icon")?.setAttribute("class", "bi bi-moon-fill");
};

const changeMode = (): void => {
    const currentTheme = document.querySelector("body")?.getAttribute("data-bs-theme");
    if (currentTheme === "dark") {
        lightMode();
    } else {
        darkMode();
    }
};

export { darkMode, lightMode, changeMode };
