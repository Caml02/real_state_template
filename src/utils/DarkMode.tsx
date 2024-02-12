const darkMode = (): void => {
    document.querySelector("body")?.setAttribute("data-bs-theme", "dark");
    document.querySelector("#dm-icon")?.setAttribute("class", "theme-toggle-dark btn bi bi-moon-fill rounded-pill");
};

const lightMode = (): void => {
    document.querySelector("body")?.setAttribute("data-bs-theme", "light");
    document.querySelector("#dm-icon")?.setAttribute("class", "theme-toggle-light btn bi bi-sun-fill rounded-pill");
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
