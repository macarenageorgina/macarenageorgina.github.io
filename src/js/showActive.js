// Obtener todos los enlaces en el menú
const navLinks = document.querySelectorAll('.nav-list a');

// Obtener la URL actual de la página
const currentUrl = window.location.pathname;

// Recorrer todos los enlaces y verificar si la URL coincide
navLinks.forEach(link => {
    if (link.href.includes(currentUrl)) {
        link.classList.add('active'); // Agregar la clase "active"
    }
});
