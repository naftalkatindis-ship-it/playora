
// PLAYORA - WEBSITE INTERACTIONS

// 1. Automatically update the copyright year
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// 2. Smoothly scroll to sections when navigation links are clicked
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (event) {
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            event.preventDefault();
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// 3. Welcome message in the browser console
console.log("Welcome to Playora! Imagination Starts Here.");

// PLAYORA - WEBSITE INTERACTIONS

// 1. Automatically update the copyright year
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// 2. Smoothly scroll to sections when navigation links are clicked
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (event) {
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            event.preventDefault();
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// 3. Welcome message in the browser console
console.log("Welcome to Playora! Imagination Starts Here.");
