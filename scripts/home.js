// me.js

/** ================================
 *  Kenya Safari Adventures - JS
 *  Author: Newton Hinga
 *  Description: Handles dynamic UI updates, accessibility enhancements,
 *               and utility features across the website.
 *  Last updated: 2025-08-08
 * =================================*/

/** ---------- Global Utility Functions ---------- **/

/**
 * Sets the current year in the footer dynamically.
 */
function setCurrentYear() {
  const yearElement = document.getElementById("year");
  if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
  }
}

/**
 * Smoothly scrolls to a section if an anchor link is clicked.
 */
function enableSmoothScroll() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

/**
 * Highlights the active navigation link based on current URL.
 */
function highlightActiveNavLink() {
  const links = document.querySelectorAll(".nav-links a");
  const path = window.location.pathname.split("/").pop();

  links.forEach((link) => {
    if (link.getAttribute("href") === path) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

/**
 * Toggle mobile menu if used in future updates.
 */
function initMobileMenuToggle() {
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-links");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
      navToggle.classList.toggle("open");
    });
  }
}

/**
 * Enhance accessibility: keyboard support for nav menus, skip links.
 */
function improveAccessibility() {
  document.addEventListener("keydown", function (e) {
    if (e.key === "Tab") {
      document.body.classList.add("user-is-tabbing");
    }
  });
}

/**
 * Show a scroll-to-top button when user scrolls down.
 */
function enableScrollToTop() {
  const scrollBtn = document.createElement("button");
  scrollBtn.innerText = "↑ Top";
  scrollBtn.className = "scroll-to-top";
  scrollBtn.setAttribute("aria-label", "Scroll to top");

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  document.body.appendChild(scrollBtn);

  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });
}

/**
 * Lazy-load images for better performance.
 */
function initLazyLoading() {
  const lazyImages = document.querySelectorAll("img[loading='lazy']");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute("data-src");
          obs.unobserve(img);
        }
      });
    });

    lazyImages.forEach((img) => observer.observe(img));
  }
}

/** ---------- Init All Functions When DOM is Ready ---------- **/

document.addEventListener("DOMContentLoaded", () => {
  setCurrentYear();
  enableSmoothScroll();
  highlightActiveNavLink();
  improveAccessibility();
  initMobileMenuToggle();
  enableScrollToTop();
  initLazyLoading();
});
