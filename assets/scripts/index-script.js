document.addEventListener("DOMContentLoaded", () => {
    // Only apply parallax on screens wider than 1200px
    if (window.innerWidth > 1200) {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            document.querySelectorAll('.banner-desktop .parallax-image img').forEach(img => {
                const speed = parseFloat(img.parentElement.getAttribute('data-speed'));
                const offset = scrollY * -speed * 0.5;
                img.style.transform = `translateY(${offset}px)`;
            });
        });
    }
});

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        nav.classList.add("shrink");
    } else {
        nav.classList.remove("shrink");
    }
});

const burger = document.querySelector("#burger-menu");
const burgerIcon = burger.querySelector("ion-icon");
const ul = document.querySelector("nav ul");

burger.addEventListener("click", () => {
    ul.classList.toggle("show");

    const isOpen = ul.classList.contains("show");
    burger.classList.toggle("open");
    burgerIcon.setAttribute("name", isOpen ? "close-outline" : "menu-outline");
});

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
    link.addEventListener("click", () => {
        ul.classList.remove("show");
        burger.classList.toggle("open");
        burgerIcon.setAttribute("name", "menu-outline");
    })
);

document.addEventListener("click", (e) => {
    if (!nav.contains(e.target)) {
        ul.classList.remove("show");
        burger.classList.toggle("open");
        burgerIcon.setAttribute("name", "menu-outline");
    }
});