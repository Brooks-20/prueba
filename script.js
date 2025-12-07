// =============================
// MENÚ RESPONSIVE
// =============================
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});

// =============================
// FORMULARIO
// =============================
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`¡Gracias por tu mensaje, ${name}!`);
        document.getElementById('contact-form').reset();
    } else {
        alert('Por favor completa todos los campos.');
    }
});

// =============================
// ANIMACIONES CON SCROLL
// =============================
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll("[data-animate]").forEach(el => observer.observe(el));
