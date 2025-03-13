

/////TODO: - El código del navbar podría simplificarse usando `IntersectionObserver` en lugar de calcular manualmente las posiciones.

// ============================
//!Navbar 
// ============================
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


// ============================
//! Modal Section 2 desktop
// ============================
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".clickable-img");
    const modalImage = document.getElementById("modalImage");
    const modalTitle = document.getElementById("imageModalLabel");
    const modalEl = document.getElementById("imageModal");
  
    images.forEach(img => {
      img.addEventListener("click", function () {
        modalImage.src = this.src;
        modalTitle.textContent = this.alt;
        new bootstrap.Modal(modalEl).show();
      });
    });
  });

// ============================
//! Mapa Section 3 con Leaflet
// ============================
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

// ============================
//! Inicialización de Firebase
// ============================
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { 
  getFirestore, 
  collection, 
  addDoc, 
  onSnapshot, 
  serverTimestamp 
} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

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

// ============================
//! Funciones Auxiliares. section 5
// ============================
// Función para mostrar alertas usando Bootstrap
function showAlert(message, type, container) {
  const alertDiv = document.createElement('div');
  alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
  alertDiv.role = 'alert';
  alertDiv.innerHTML = `
    ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  `;
  container.prepend(alertDiv);
  setTimeout(() => {
    alertDiv.classList.remove('show');
    alertDiv.classList.add('hide');
    setTimeout(() => alertDiv.remove(), 500);
  }, 3000);
}

// ============================
//! Funciones de Lógica de la web
// ============================
// Función para cargar comentarios y actualizar los contenedores en tiempo real
function loadComentarios() {
  onSnapshot(comentariosCollection, (snapshot) => {
    let htmlDesktopSection4 = ""; // Para los primeros 3 comentarios (sección 4)
    let htmlDesktopSection5 = ""; // Para el resto de los comentarios (sección 5)
    let htmlMobile = ""; // Para el carrusel móvil
    let first = true; // Para marcar el primer slide como activo

    // Convertir el snapshot a un array
    const comentarios = [];
    snapshot.forEach(doc => {
      const data = doc.data();
      comentarios.push({
        nombre: data.nombre,
        comentario: data.comentario,
        timestamp: data.timestamp
      });
    });

    // Ordenar los comentarios alfabéticamente según el nombre
    comentarios.sort((a, b) => {
      const nombreA = a.nombre.toUpperCase();
      const nombreB = b.nombre.toUpperCase();
      if (nombreA < nombreB) return -1;
      if (nombreA > nombreB) return 1;
      return 0;
    });

    // Obtener los primeros 3 comentarios para la sección 4
    const ultimosComentarios = comentarios.slice(0, 3);
    ultimosComentarios.forEach((data) => {
      htmlDesktopSection4 += `
        <li class="mb-3">
          <div class="comentario-card playfair-display"> 
            <strong class="playfair-display-title">${data.nombre}</strong>
            <p>${data.comentario}</p>
          </div>
        </li>
      `;
    });

    // El resto de los comentarios para la sección 5
    const restoComentarios = comentarios.slice(3);
    restoComentarios.forEach((data) => {
      htmlDesktopSection5 += `
        <li class="mb-3">
         <div class="comentario-card playfair-display">  
            <strong class="playfair-display-title">${data.nombre}</strong>
            <p>${data.comentario}</p>
          </div>
        </li>
      `;
    });

    // Para la versión móvil (carrusel), se muestran todos los comentarios
    comentarios.forEach((data) => {
      htmlMobile += `
        <div class="carousel-item ${first ? "active" : ""}">
         <div class="comentario-card playfair-display">  
            <strong class="playfair-display-title">${data.nombre}</strong>
            <p>${data.comentario}</p>
          </div>
        </div>
      `;
      first = false;
    });

    // Actualizar los contenedores de la UI
    const contenedorSec4 = document.getElementById("comentarios-lista-section4");
    const contenedorSec5 = document.getElementById("comentarios-lista-section5");
    const carouselInner = document.querySelector("#carouselComentarios .carousel-inner");

    if (contenedorSec4) contenedorSec4.innerHTML = htmlDesktopSection4;
    if (contenedorSec5) contenedorSec5.innerHTML = htmlDesktopSection5;
    if (carouselInner) carouselInner.innerHTML = htmlMobile;
  });
}
loadComentarios();

// Función para enviar un comentario a Firestore
async function submitComentario(nombre, comentario) {
  try {
    await addDoc(comentariosCollection, {
      nombre: nombre,
      comentario: comentario,
      timestamp: serverTimestamp()
    });
    console.log("Comentario agregado");
  } catch (error) {
    console.error("Error al agregar comentario:", error);
  }
}

// ============================
// ! Event Listeners para Formularios section 5
// ============================

// Formulario versión Desktop
const formDesktop = document.getElementById("form-comentario-desktop");
if (formDesktop) {
  formDesktop.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre-apellido-huesped-desktop").value;
    const comentario = document.getElementById("comentario-huesped-desktop").value;
    // Validación de campos vacíos
    if (nombre.trim() === "" || comentario.trim() === "") {
      const alertContainer = document.getElementById("alert-comentario-desktop") || formDesktop;
      showAlert("Por favor, complete todos los campos", "danger", alertContainer);
      return;
    }
    submitComentario(nombre, comentario)
      .then(() => {
        const alertContainer = document.getElementById("alert-comentario-desktop") || formDesktop;
        showAlert("Comentario agregado con éxito", "success", alertContainer);
        formDesktop.reset();
      })
      .catch((error) => {
        const alertContainer = document.getElementById("alert-comentario-desktop") || formDesktop;
        showAlert("Error al agregar comentario. Inténtalo nuevamente", "danger", alertContainer);
        console.error("Error al agregar comentario:", error);
      });
  });
}

// Formulario versión Mobile
const formMobile = document.getElementById("form-comentario-mobile");
if (formMobile) {
  formMobile.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre-apellido-huesped-mobile").value;
    const comentario = document.getElementById("comentario-huesped-mobile").value;
    const alertContainer = document.getElementById("alert-comentario-mobile"); // Aquí tomamos el div de alertas correcto

    if (nombre.trim() === "" || comentario.trim() === "") {
      showAlert("Por favor, complete todos los campos", "danger", alertContainer); // Usamos alertContainer
      return;
    }

    submitComentario(nombre, comentario)
      .then(() => {
        showAlert("Comentario agregado con éxito", "success", alertContainer); // Usamos alertContainer
        formMobile.reset();
      })
      .catch((error) => {
        showAlert("Error al agregar comentario. Inténtalo nuevamente", "danger", alertContainer);
        console.error("Error al agregar comentario:", error);
      });
  });
}


// ============================
// ! SECTION 6 - LOGICA DE ENVIO DE MENSAJES
// ============================
document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("Yjydhs8p7JTZ5XEPC"); // Reemplaza con tu Public Key

  const form = document.getElementById("contacto-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío predeterminado

    // Obtener los valores del formulario
    const nombre = document.querySelector('input[name="nombre"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const telefono = document.querySelector('input[name="telefono"]').value;
    const mensaje = document.querySelector('textarea[name="mensaje"]').value;
    const metodoEnvio = document.getElementById("metodo-envio").value;

    if (metodoEnvio === "email") {
      enviarPorEmail(nombre, email, telefono, mensaje);
    } else if (metodoEnvio === "whatsapp") {
      enviarPorWhatsApp(nombre, email, telefono, mensaje);
    }
  });

  function enviarPorEmail(nombre, email, telefono, mensaje) {
    const parametros = {
      nombre,
      email,
      telefono: telefono || "No especificado",
      mensaje,
    };

    emailjs.send("service_x3snivm", "template_825vhng", parametros) // Corregido el Template ID
      .then(() => {
        alert("Consulta enviada por email");
        form.reset(); // Limpiar formulario después de enviar
      })
      .catch(error => console.error("Error:", error));
  }

  function enviarPorWhatsApp(nombre, email, telefono, mensaje) {
    const numeroWhatsApp = "+542944326686"; // Reemplazar con tu número

    const textoMensaje = `Hola! Soy ${nombre} y me gustaría hacer una consulta sobre Casita Anem.%0A
      📧 Email: ${email}%0A
      📞 Teléfono: ${telefono || "No especificado"}%0A
      ✉️ Mensaje: ${mensaje}`;

    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${textoMensaje}`;

    window.open(urlWhatsApp, "_blank");
  }
});

