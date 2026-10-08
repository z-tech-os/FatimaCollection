/* =========================================================
   FatimaCollection — MAIN JAVASCRIPT
   Simple, beginner-friendly JavaScript
   ========================================================= */


/* =========================================================
   1. MOBILE MENU
   ========================================================= */

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuToggle && nav) {

    menuToggle.addEventListener("click", function () {

        nav.classList.toggle("open");

        const isOpen = nav.classList.contains("open");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

    });

}


/* =========================================================
   2. CLOSE MOBILE MENU AFTER CLICKING A LINK
   ========================================================= */

document.querySelectorAll(".nav a").forEach(function (link) {

    link.addEventListener("click", function () {

        if (nav) {
            nav.classList.remove("open");
        }

        if (menuToggle) {
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );
        }

    });

});


/* =========================================================
   3. DARK / LIGHT MODE
   ========================================================= */

const themeToggle = document.querySelector(".theme-toggle");

const savedTheme = localStorage.getItem("fatima-theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
}

function updateThemeIcon() {

    if (!themeToggle) {
        return;
    }

    const icon = themeToggle.querySelector("i");

    if (!icon) {
        return;
    }

    if (document.body.classList.contains("dark-mode")) {

        icon.className = "fas fa-sun";

        themeToggle.setAttribute(
            "aria-label",
            "Switch to light mode"
        );

    } else {

        icon.className = "fas fa-moon";

        themeToggle.setAttribute(
            "aria-label",
            "Switch to dark mode"
        );

    }

}

updateThemeIcon();

if (themeToggle) {

    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        const isDark = document.body.classList.contains("dark-mode");

        localStorage.setItem(
            "fatima-theme",
            isDark ? "dark" : "light"
        );

        updateThemeIcon();

    });

}


/* =========================================================
   4. CURRENT YEAR
   ========================================================= */

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


/* =========================================================
   5. SCROLL REVEAL ANIMATION
   ========================================================= */

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach(function (element) {

        revealObserver.observe(element);

    });

} else {

    revealElements.forEach(function (element) {

        element.classList.add("visible");

    });

}


/* =========================================================
   6. BACK TO TOP BUTTON
   ========================================================= */

const backTop = document.querySelector(".back-top");

if (backTop) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 500) {

            backTop.classList.add("show");

        } else {

            backTop.classList.remove("show");

        }

    });

    backTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}
