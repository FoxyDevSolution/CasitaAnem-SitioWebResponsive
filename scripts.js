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

/////TODO: - El código del navbar podría simplificarse usando `IntersectionObserver` en lugar de calcular manualmente las posiciones.


//!Navbar 

const header = document.getElementById('header-anem');
const navbar = document.getElementById('navbar');

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1 
};

const observerCallback = (entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      navbar.classList.add('navbar-visible');
      navbar.classList.remove('navbar-hidden');
    } else {
      navbar.classList.remove('navbar-visible');
      navbar.classList.add('navbar-hidden');
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
observer.observe(header);

//! Cerrar navbar al hacer clic en un enlace 
document.querySelectorAll('#navbarNavAltMarkup .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const navbarCollapse = document.getElementById('navbarNavAltMarkup');
      
      // Cierra el menú colapsado usando Bootstrap
      if (navbarCollapse.classList.contains('show')) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
        bsCollapse.hide();
      }
    });
  });

/*
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
*/

//! Modal Section 2 desktop
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".clickable-img");
    const modalImage = document.getElementById("modalImage");
    const modalTitle = document.getElementById("imageModalLabel");
    const modalEl = document.getElementById("imageModal");
  
    images.forEach(img => {
      img.addEventListener("click", function () {
        modalImage.src = this.src;
        modalTitle.textContent = this.alt;
        // Mostrar el modal usando Bootstrap
        new bootstrap.Modal(modalEl).show();
      });
    });
  });
  
  