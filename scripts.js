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


//! Mapa Section 3 con Leaflet
document.addEventListener("DOMContentLoaded", () => {
  const casitaAnem = [-41.074722, -71.152583];

  const map = L.map("map").setView(casitaAnem, 14); 

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  L.marker(casitaAnem).addTo(map).bindPopup("Casita Anem").openPopup();

  const puntosInteres = [
    { nombre: "Cerro Leones", coords: [-41.079361, -71.143472] },
    { nombre: "Costa del Lago Nahuel Huapi", coords: [-41.068722, -71.165833] },
    { nombre: "Aeropuerto", coords: [-41.145806, -71.161389] },
    { nombre: "Centro Cívico de Bariloche", coords: [-41.133500, -71.310111] },
  ];

  let rutaActual = null;

  let itemSeleccionado = null;

  const listaItems = document.querySelectorAll(".ul-s3 li");
  listaItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      const punto = puntosInteres[index];

      map.setView(punto.coords, 14);

      L.marker(punto.coords).addTo(map).bindPopup(punto.nombre).openPopup();

      if (rutaActual) {
        map.removeLayer(rutaActual);
      }

      rutaActual = L.polyline([casitaAnem, punto.coords], { color: "blue" }).addTo(map);

      if (itemSeleccionado) {
        itemSeleccionado.classList.remove("seleccionado");
      }

      item.classList.add("seleccionado");

      itemSeleccionado = item;
    });
  });
});

//! Comentarios Section 4/5 con Firebase
// Inicialización de Firebase y Firestore
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC7dhE0OF2Y_cSiNVp2aRCovQDJDHB-UMM",
  authDomain: "casita-anem.firebaseapp.com",
  projectId: "casita-anem",
  storageBucket: "casita-anem.firebasestorage.app",
  messagingSenderId: "494050866177",
  appId: "1:494050866177:web:3805efbb7e75624e48bc00",
  measurementId: "G-N9BCM46VN5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Definimos la colección en la que se almacenarán los comentarios
const comentariosCollection = collection(db, "comentarios");
function loadComentarios() {
  onSnapshot(comentariosCollection, (snapshot) => {
    let htmlDesktop = "";
    let htmlMobile = "";
    let first = true; // para marcar el primer slide como activo

    snapshot.forEach(doc => {
      const data = doc.data();

      // Generamos HTML para la versión desktop (lista)
      htmlDesktop += `
        <li class="mb-3">
          <div class="card p-3">
            <strong>${data.nombre}</strong>
            <p>${data.comentario}</p>
          </div>
        </li>
      `;

      // Generamos HTML para la versión mobile (carrusel)
      htmlMobile += `
        <div class="carousel-item ${first ? "active" : ""}">
          <div class="card p-3">
            <strong>${data.nombre}</strong>
            <p>${data.comentario}</p>
          </div>
        </div>
      `;
      first = false;
    });

    // Actualizamos los contenedores desktop
    const contenedorSec4 = document.getElementById("comentarios-lista-section4");
    const contenedorSec5 = document.getElementById("comentarios-lista-section5");
    if (contenedorSec4) contenedorSec4.innerHTML = htmlDesktop;
    if (contenedorSec5) contenedorSec5.innerHTML = htmlDesktop;

    // Actualizamos el carrusel en mobile
    const carouselInner = document.querySelector("#carouselComentarios .carousel-inner");
    if (carouselInner) {
      carouselInner.innerHTML = htmlMobile;
      // Si es necesario, podrías reinicializar el carrusel o forzar la actualización,
      // pero en muchos casos solo actualizar el innerHTML es suficiente.
    }
  });
}

/* // Función para actualizar los comentarios en ambas secciones - MODIFICACION PARA VERSION MOBILE
function loadComentarios() {
  onSnapshot(comentariosCollection, (snapshot) => {
    let html = "";
    snapshot.forEach(doc => {
      const data = doc.data();
      html += `
        <li class="mb-3">
          <div class="card p-3">
            <strong>${data.nombre}</strong>
            <p>${data.comentario}</p>
          </div>
        </li>
      `;
    });
    // Actualizamos los contenedores de comentarios en sección 4 y 5
    const contenedorSec4 = document.getElementById("comentarios-lista-section4");
    const contenedorSec5 = document.getElementById("comentarios-lista-section5");
    if (contenedorSec4) contenedorSec4.innerHTML = html;
    if (contenedorSec5) contenedorSec5.innerHTML = html;
  });
}
*/ 


// Llamamos a la función para empezar a escuchar los cambios
loadComentarios();

// Función para enviar un comentario a Firestore
async function submitComentario(nombre, comentario) {
  try {
    await addDoc(comentariosCollection, {
      nombre: nombre,
      comentario: comentario,
      timestamp: Date.now()
    });
    console.log("Comentario agregado");
  } catch (error) {
    console.error("Error al agregar comentario:", error);
  }
}

// Agregar listener al formulario de desktop
const formDesktop = document.getElementById("form-comentario-desktop");
if (formDesktop) {
  formDesktop.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre-apellido-huesped-desktop").value;
    const comentario = document.getElementById("comentario-huesped-desktop").value;
    submitComentario(nombre, comentario);
    formDesktop.reset();
  });
}

// Agregar listener al formulario de mobile (si lo usas)
const formMobile = document.getElementById("form-comentario-mobile");
if (formMobile) {
  formMobile.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre-apellido-huesped-mobile").value;
    const comentario = document.getElementById("comentario-huesped-mobile").value;
    submitComentario(nombre, comentario);
    formMobile.reset();
  });
}
