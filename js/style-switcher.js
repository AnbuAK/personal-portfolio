/*=========================toggler style switcher================*/
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
const styleSwitcher = document.querySelector(".style-switcher");
const alternateStyles = document.querySelectorAll(".alternate-style");

styleSwitcherToggle.addEventListener("click", () => {
    console.log("Clicked on style switcher toggle"); // Debugging
    styleSwitcher.classList.toggle("open");
});

window.addEventListener("scroll", () => {
    console.log("Scrolled"); // Debugging
    if (styleSwitcher.classList.contains("open")) {
        styleSwitcher.classList.remove("open");
    }
});

function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            console.log("Activating style:", color); // Debugging
            style.removeAttribute("disabled");
        } else {
            console.log("Disabling style:", style.getAttribute("title")); // Debugging
            style.setAttribute("disabled", "true");
        }
    });
}

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    console.log("Clicked on day/night mode"); // Debugging
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
});

window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        console.log("Dark mode enabled on page load"); // Debugging
        dayNight.querySelector("i").classList.add("fa-sun");
    } else {
        console.log("Dark mode disabled on page load"); // Debugging
        dayNight.querySelector("i").classList.add("fa-moon");
    }
});
