document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

const menuButton = document.querySelector("#menu");
const navMenu = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
    if (navMenu.classList.contains("open")) {
        menuButton.textContent = "X";
    } else {
        menuButton.textContent = "☰"
    }
});