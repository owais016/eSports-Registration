// ELEMENT REFERENCES

const navbar = document.querySelector(".navbar");
const revealElements = document.querySelectorAll(".game-card, .event-details, .process, .sponsors");
const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");


// SCROLL REVEAL ANIMATION

function revealOnScroll() {

    const triggerPoint = window.innerHeight * 0.85;

    revealElements.forEach(el => {

        const cardTop = el.getBoundingClientRect().top;

        if (cardTop < triggerPoint) {
            el.classList.add("show");
        } else {
            el.classList.remove("show");
        }

    });
}


// NAVBAR SCROLL EFFECT

function navbarEffect() {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(10,15,30,0.95)";
        navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.6)";

    } else {

        navbar.style.background = "rgba(10,15,30,0.7)";
        navbar.style.boxShadow = "none";

    }

}


// MOBILE MENU TOGGLE

toggle.addEventListener("click", (e) => {

    e.stopPropagation();
    navLinks.classList.toggle("active");

});


// CLOSE MENU WHEN CLICK OUTSIDE

document.addEventListener("click", (e) => {

    if (!navLinks.contains(e.target) && !toggle.contains(e.target)) {
        navLinks.classList.remove("active");
    }

});


// CLOSE MENU WHEN LINK CLICKED

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});


// SCROLL EVENT LISTENER

window.addEventListener("scroll", () => {

    revealOnScroll();
    navbarEffect();

});


// INITIAL LOAD

window.addEventListener("load", () => {

    revealOnScroll();
    navbarEffect();

});
