/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute(
        "aria-expanded",
        isOpen
    );

});


/* Close mobile menu when a link is clicked */

const navigationLinks =
    document.querySelectorAll(".nav-links a");

navigationLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});


/* =========================================
   NAVBAR SCROLL EFFECT
========================================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =========================================
   ACTIVE NAVIGATION LINK
========================================= */

const sections =
    document.querySelectorAll("section[id]");

const navItems =
    document.querySelectorAll(".nav-links a");

const updateActiveNavigation = () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 180;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navItems.forEach((item) => {

        item.classList.remove("active");

        const href =
            item.getAttribute("href");

        if (href === `#${currentSection}`) {

            item.classList.add("active");

        }

    });

};

window.addEventListener(
    "scroll",
    updateActiveNavigation
);

updateActiveNavigation();


/* =========================================
   SCROLL REVEAL ANIMATION
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =========================================
   CURRENT YEAR
========================================= */

const yearElement =
    document.getElementById("year");

yearElement.textContent =
    new Date().getFullYear();


/* =========================================
   SMOOTH SCROLL
========================================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach((anchor) => {

    anchor.addEventListener(
        "click",
        function (event) {

            const targetId =
                this.getAttribute("href");

            if (
                targetId === "#" ||
                !targetId
            ) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }
    );

});


/* =========================================
   PROJECT CARD INTERACTION
========================================= */

const projectCards =
    document.querySelectorAll(".project-card");

projectCards.forEach((card) => {

    card.addEventListener(
        "mouseenter",
        () => {

            card.style.setProperty(
                "--card-scale",
                "1.01"
            );

        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.setProperty(
                "--card-scale",
                "1"
            );

        }
    );

});