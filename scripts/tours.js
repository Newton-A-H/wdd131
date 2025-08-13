(() => {
    "use strict";

    const qs = (selector) => document.querySelector(selector);
    const qsa = (selector) => document.querySelectorAll(selector);

    const updateYear = () => {
        const yearSpan = qs("#year");
        if (yearSpan) {
            yearSpan.textContent = new Date().getFullYear();
        }
    };

    const enableSmoothScroll = () => {
        qsa('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener("click", function (e) {
                e.preventDefault();
                const targetId = this.getAttribute("href");
                const targetElement = qs(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: "smooth"
                    });
                }
            });
        });
    };

    const enableMobileMenu = () => {
        const menuToggle = qs(".menu-toggle");
        const navLinks = qs(".nav-links");
        if (menuToggle && navLinks) {
            menuToggle.addEventListener("click", () => {
                navLinks.classList.toggle("active");
                menuToggle.classList.toggle("open");
            });
        }
    };

    const enableTourSearch = () => {
        const searchInput = qs("#tourSearch");
        const tourCards = qsa(".tour-card");

        if (searchInput) {
            searchInput.addEventListener("input", () => {
                const searchTerm = searchInput.value.toLowerCase();
                tourCards.forEach(card => {
                    const title = card.querySelector("h3")?.textContent.toLowerCase() || "";
                    const description = card.querySelector("p")?.textContent.toLowerCase() || "";
                    card.style.display = (title.includes(searchTerm) || description.includes(searchTerm)) 
                        ? "block" 
                        : "none";
                });
            });
        }
    };

    const enableScrollAnimations = () => {
        const cards = qsa(".tour-card");

        const revealOnScroll = () => {
            const windowBottom = window.innerHeight + window.scrollY;
            cards.forEach(card => {
                const cardTop = card.getBoundingClientRect().top + window.scrollY;
                if (windowBottom > cardTop + 100) {
                    card.classList.add("visible");
                }
            });
        };

        window.addEventListener("scroll", revealOnScroll);
        revealOnScroll();
    };

    const init = () => {
        updateYear();
        enableSmoothScroll();
        enableMobileMenu();
        enableTourSearch();
        enableScrollAnimations();
    };

    document.addEventListener("DOMContentLoaded", init);

})();

document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
