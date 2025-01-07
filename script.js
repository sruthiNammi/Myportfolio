// Dynamic text rotation for the About section
const roles = ["Web Developer", "Competitive Programmer"];
let index = 0;

const dynamicText = document.getElementById("dynamic-text");

setInterval(() => {
    index = (index + 1) % roles.length;
    dynamicText.textContent = roles[index];
}, 2000); // Change text every 2 seconds

// Set skill percentages dynamically
document.querySelectorAll('.skill-circle').forEach(circle => {
    const skill = circle.getAttribute('data-skill');
    circle.style.setProperty('--percentage', skill);
});
// Skill circles percentage
document.querySelectorAll('.skill-circle').forEach(circle => {
    const skill = circle.getAttribute('data-skill');
    circle.style.setProperty('--percentage', skill);
});
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

// Toggle menu visibility on button click
menuToggle.addEventListener("click", () => {
    menu.classList.toggle("expanded");
});

// Optional: Close menu when a link is clicked
menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("expanded");
    });
});

