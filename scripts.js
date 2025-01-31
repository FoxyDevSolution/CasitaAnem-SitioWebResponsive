/*
document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
    const header = document.getElementById("header-anem");
    const headerHeight = header.offsetHeight;

    // Función para actualizar la visibilidad del navbar
    const updateNavbarVisibility = () => {
        const scrollPosition = window.scrollY;

        if (scrollPosition >= headerHeight) {
            navbar.classList.remove("navbar-hidden"); // Mostrar el navbar
        } else {
            navbar.classList.add("navbar-hidden"); // Ocultar el navbar
        }
    };

    // Actualizar navbar inmediatamente al cargar la página
    updateNavbarVisibility();

    // Escuchar el evento scroll para seguir actualizando la visibilidad
    window.addEventListener("scroll", updateNavbarVisibility);
});
*/

document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
    const sections = document.querySelectorAll("section"); // Todas las secciones

    const updateNavbarVisibility = () => {
        let navbarVisible = false;

        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                navbarVisible = true;
            }
        });

        if (navbarVisible) {
            navbar.classList.remove("navbar-hidden"); // Mostrar navbar
        } else {
            navbar.classList.add("navbar-hidden"); // Ocultar navbar
        }
    };

    window.addEventListener("scroll", updateNavbarVisibility);
    updateNavbarVisibility(); // Ejecutar al inicio
});
