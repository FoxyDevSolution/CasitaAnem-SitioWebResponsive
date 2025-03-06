****ESTRUCTURA GENERAL ANEM V2.****
Header: Título, logo y el botón principal.
Section 1: "Rincón Patagónico".
Section 2: "Nuestra Casa".
Section 3: "¿Dónde estamos?".
Section 4: "Sobre nosotros".
Section 5: Experiencias huespedes
Section 6: "Contacto y reservas"
Footer: sobre la página



Codigo Alternativo HTML: 
<!--! section 1 Version only desktop
  <section class="py-5">
    <div class="container text-center">
      <h2>Conocé este hermoso rincón Patagónico</h2>

      <div class="row">
        <div class="col-md-4">
          <img src="assets/images/image1.jpg" alt="Imagen 1" class="img-fluid rounded-circle">
        </div>
        <div class="col-md-4">
          <img src="assets/images/image2.jpg" alt="Imagen 2" class="img-fluid rounded-circle">
        </div>
        <div class="col-md-4">
          <img src="assets/images/image3.jpg" alt="Imagen 3" class="img-fluid rounded-circle">
        </div>
      </div>
      <p>Nuestra casa se encuentra ubicada en un entorno natural incomparable, para unas vacaciones inolvidables. <br> Te invitamos a disfrutar de la tranquilidad y bellleza de Dina Huapi</p>
    </div>
  </section>
-->

 <!--! Section 2 Version only desktop
  <section class="bg-light py-5">
    <div class="container">
      <h2 class="text-center">Nuestra Casa</h2>
      <div class="row text-center">
        <div class="col-md-3">
          <img src="assets/images/feature1.jpg" alt="Comodidad" class="img-fluid">
          <p>2 habitaciones:<br>1 habitación con 4 camas individuales<br>1 habitación con 1 cama matrimonial</p>
        </div>
        <div class="col-md-3">
          <img src="assets/images/feature2.jpg" alt="Baño privado" class="img-fluid">
          <p>1 baño privado</p>
        </div>
        <div class="col-md-3">
          <img src="assets/images/feature3.jpg" alt="Cocina equipada" class="img-fluid">
          <p>Cocina totalmente equipada</p>
        </div>
        <div class="col-md-3">
          <img src="assets/images/feature4.jpg" alt="patio estacionamiento" class="img-fluid">
          <p>Patio privado con posibilidad de estacionar su vehículo al aire libre.</p>
        </div>
      </div>
    </div>
  </section>
-->

<!--! Section 4 Vestion only desktop
  <section class="bg-light py-5">
    <div class="container">
      <h2 class="text-center">Sobre nosotros</h2>
      <p>Somos una familia nacida y criada en Bariloche, rodeados de lagos y montañas. <br>
        Amamos la naturaleza y nuestra tierra, y queremos compartir nuestro hogar con nuestros huéspedes. <br>
        Buscamos que su estadía sea inolvidable y que sientan la magia de la Patagonia.
        Nos esforzamos para que se sientan cómodos y bienvenidos. <br>
        Aquí le compartimos algunas reseñas:
      </p>
  
    
      <div class="row">
     
        <div class="col-md-4 mb-4">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro consequuntur neque ducimus maiores distinctio repudiandae exercitationem ex, deleniti praesentium totam?</p>
          <p><strong>Primer nombre</strong></p>
        </div>
  

        <div class="col-md-4 mb-4">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro consequuntur neque ducimus maiores distinctio repudiandae exercitationem ex, deleniti praesentium totam?</p>
          <p><strong>Segundo nombre</strong></p>
        </div>
  

        <div class="col-md-4 mb-4">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro consequuntur neque ducimus maiores distinctio repudiandae exercitationem ex, deleniti praesentium totam?</p>
          <p><strong>Tercer nombre</strong></p>
        </div>
      </div>
  

      <div class="text-center mt-4">
        <button class="btn btn-primary">Deja tu opinión</button>
      </div>
    </div>
  </section>
-->



<!--! Section 5 Vesion only desktop
 <section class="bg-light py-5">
  <div class="container">
    <h2 class="text-center">Experiencias de nuestros visitantes</h2>

    <div class="row">
       Columna izquierda - Lista de comentarios 
      <div class="col-md-6 mb-4">
      <!--?  Lista de comentarios 
        <ul id="comentarios-lista" class="list-unstyled">
          <li class="mb-3">
            <div class="card p-3">
              <strong>Juan Pérez</strong>
              <p>¡Estuvimos de maravilla! La vista desde la casa es increíble. Volveremos sin duda.</p>
            </div>
          </li>
          <li class="mb-3">
            <div class="card p-3">
              <strong>Maria Gómez</strong>
              <p>Un lugar hermoso para desconectar. Todo muy limpio y cómodo. Altamente recomendado.</p>
            </div>
          </li>
           Aquí se agregarán los nuevos comentarios 
        </ul>
      </div>

     Columna derecha - Formulario para agregar comentarios 
      <div class="col-md-6">
        <h3>Dejanos tu experiencia</h3>
        <form id="form-comentario">
          <!--? Campo para nombre y apellido
          <div class="mb-3">
            <label for="nombre-apellido-huesped" class="form-label">Nombre y Apellido</label>
            <input type="text" class="form-control" id="nombre-apellido-huesped" required placeholder="Tu nombre">
          </div>

          <!--? Campo para el comentario 
          <div class="mb-3">
            <label for="comentario-huesped" class="form-label">Contanos tu experiencia!</label>
            <textarea class="form-control" id="comentario-huesped" rows="3" required placeholder="Escribe tu comentario aquí"></textarea>
          </div>

          <!--? Botón para enviar
          <div class="mb-3">
            <button type="submit" class="btn btn-primary">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
-->

Codigos alternativos de Javascript: 
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


/* MODIFICACION DE LA FUNCION LOADCOMENTARIOS PARA MEJOR FUNCIONAMIENTO EN VERSION MOBILE 
function loadComentarios() {
  onSnapshot(comentariosCollection, (snapshot) => {
    let htmlDesktopSection4 = ""; // HTML para la sección 4 (últimos 3 comentarios)
    let htmlDesktopSection5 = ""; // HTML para la sección 5 (resto de comentarios)
    let htmlMobile = ""; // HTML para el carrusel móvil
    let first = true; // para marcar el primer slide como activo

    // Convertir los comentarios a un array
    const comentarios = [];
    snapshot.forEach(doc => {
      const data = doc.data();
      comentarios.push({ nombre: data.nombre, comentario: data.comentario });
    });

    // Obtener los últimos 3 comentarios
    const ultimosComentarios = comentarios.slice(-3);
    ultimosComentarios.forEach((data) => {
      // HTML para la sección 4 (últimos 3 comentarios)
      htmlDesktopSection4 += `
        <li class="mb-3">
          <div class="card p-3">
            <strong>${data.nombre}</strong>
            <p>${data.comentario}</p>
          </div>
        </li>
      `;

      // HTML para el carrusel móvil (últimos 3 comentarios)
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

    // Obtener el resto de los comentarios (todos excepto los últimos 3)
    const restoComentarios = comentarios.slice(0, -3);
    restoComentarios.forEach((data) => {
      // HTML para la sección 5 (resto de comentarios)
      htmlDesktopSection5 += `
        <li class="mb-3">
          <div class="card p-3">
            <strong>${data.nombre}</strong>
            <p>${data.comentario}</p>
          </div>
        </li>
      `;
    });

    // Actualizar los contenedores
    const contenedorSec4 = document.getElementById("comentarios-lista-section4");
    const contenedorSec5 = document.getElementById("comentarios-lista-section5");
    const carouselInner = document.querySelector("#carouselComentarios .carousel-inner");

    if (contenedorSec4) contenedorSec4.innerHTML = htmlDesktopSection4;
    if (contenedorSec5) contenedorSec5.innerHTML = htmlDesktopSection5;
    if (carouselInner) carouselInner.innerHTML = htmlMobile;
  });
}
*/

/* MODIFICACION DE LA FUNCION LOADCOMENTARIOS PARA MOSTRAR 3 EN LA SECTION 4
function loadComentarios() {
  onSnapshot(comentariosCollection, (snapshot) => {
    let htmlDesktopSection4 = ""; // HTML para la sección 4 (últimos 3 comentarios)
    let htmlDesktopSection5 = ""; // HTML para la sección 5 (resto de comentarios)
    let htmlMobile = ""; // HTML para el carrusel móvil
    let first = true; // para marcar el primer slide como activo


  /// MODIFICACION DEL CODIGO PARA MOSTRAR 3 COMENT. EN LA SECTION 4

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
*/ 

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

/* MODIFICACION DE LA FUNCION LOADCOMENTARIOS PARA MOBILE

function loadComentarios() {
  onSnapshot(comentariosCollection, (snapshot) => {
    let htmlDesktopSection4 = ""; // HTML para la sección 4 (últimos 3 comentarios)
    let htmlDesktopSection5 = ""; // HTML para la sección 5 (resto de comentarios)
    let htmlMobile = ""; // HTML para el carrusel móvil (todos los comentarios)
    let first = true; // para marcar el primer slide como activo

    // Convertir los comentarios a un array
    const comentarios = [];
    snapshot.forEach(doc => {
      const data = doc.data();
      comentarios.push({
        nombre: data.nombre,
        comentario: data.comentario,
        timestamp: data.timestamp // Aunque no lo usemos para ordenar, lo mantenemos
      });
    });

    // Ordenar los comentarios por nombre (alfabéticamente)
    comentarios.sort((a, b) => {
      const nombreA = a.nombre.toUpperCase(); // Convertir a mayúsculas para evitar problemas de case sensitivity
      const nombreB = b.nombre.toUpperCase();
      if (nombreA < nombreB) return -1; // A va antes que B
      if (nombreA > nombreB) return 1;  // A va después que B
      return 0; // Son iguales
    });

    // Obtener los últimos 3 comentarios (alfabéticamente)
    const ultimosComentarios = comentarios.slice(0, 3); // Cambiamos a slice(0, 3) para los primeros 3
    ultimosComentarios.forEach((data) => {
      // HTML para la sección 4 (últimos 3 comentarios)
      htmlDesktopSection4 += `
        <li class="mb-3">
          <div class="card p-3">
            <strong>${data.nombre}</strong>
            <p>${data.comentario}</p>
          </div>
        </li>
      `;
    });

    // Obtener el resto de los comentarios (alfabéticamente)
    const restoComentarios = comentarios.slice(3); // Cambiamos a slice(3) para el resto
    restoComentarios.forEach((data) => {
      // HTML para la sección 5 (resto de comentarios)
      htmlDesktopSection5 += `
        <li class="mb-3">
          <div class="card p-3">
            <strong>${data.nombre}</strong>
            <p>${data.comentario}</p>
          </div>
        </li>
      `;

      // HTML para el carrusel móvil (todos los comentarios)
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

    // Actualizar los contenedores
    const contenedorSec4 = document.getElementById("comentarios-lista-section4");
    const contenedorSec5 = document.getElementById("comentarios-lista-section5");
    const carouselInner = document.querySelector("#carouselComentarios .carousel-inner");

    if (contenedorSec4) contenedorSec4.innerHTML = htmlDesktopSection4; // Solo en desktop
    if (contenedorSec5) contenedorSec5.innerHTML = htmlDesktopSection5; // Solo en desktop
    if (carouselInner) carouselInner.innerHTML = htmlMobile; // Solo en mobile
  });
}
*/

//Funcion Loadcomentarios
/* modificacion de la funcion loadcomentarios por que no funciona ordenar por timestamp
function loadComentarios() {
  onSnapshot(comentariosCollection, (snapshot) => {
    let htmlDesktopSection4 = ""; // HTML para la sección 4 (últimos 3 comentarios)
    let htmlDesktopSection5 = ""; // HTML para la sección 5 (resto de comentarios)
    let htmlMobile = ""; // HTML para el carrusel móvil (todos los comentarios)
    let first = true; // para marcar el primer slide como activo

    // Convertir los comentarios a un array
    const comentarios = [];
    snapshot.forEach(doc => {
      const data = doc.data();
      comentarios.push({
        nombre: data.nombre,
        comentario: data.comentario,
        timestamp: data.timestamp // Asegúrate de que el campo "timestamp" esté presente
      });
    });

    // Ordenar los comentarios por fecha (de más reciente a más antiguo)
    comentarios.sort((a, b) => b.timestamp.toMillis() - a.timestamp.toMillis());

    // Obtener los últimos 3 comentarios (más recientes)
    const ultimosComentarios = comentarios.slice(0, 3); // Cambiamos a slice(0, 3) para los más recientes
    ultimosComentarios.forEach((data) => {
      // HTML para la sección 4 (últimos 3 comentarios)
      htmlDesktopSection4 += `
        <li class="mb-3">
          <div class="card p-3">
            <strong>${data.nombre}</strong>
            <p>${data.comentario}</p>
          </div>
        </li>
      `;
    });

    // Obtener el resto de los comentarios (más antiguos)
    const restoComentarios = comentarios.slice(3); // Cambiamos a slice(3) para el resto
    restoComentarios.forEach((data) => {
      // HTML para la sección 5 (resto de comentarios)
      htmlDesktopSection5 += `
        <li class="mb-3">
          <div class="card p-3">
            <strong>${data.nombre}</strong>
            <p>${data.comentario}</p>
          </div>
        </li>
      `;

      // HTML para el carrusel móvil (todos los comentarios)
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

    // Actualizar los contenedores
    const contenedorSec4 = document.getElementById("comentarios-lista-section4");
    const contenedorSec5 = document.getElementById("comentarios-lista-section5");
    const carouselInner = document.querySelector("#carouselComentarios .carousel-inner");

    if (contenedorSec4) contenedorSec4.innerHTML = htmlDesktopSection4; // Solo en desktop
    if (contenedorSec5) contenedorSec5.innerHTML = htmlDesktopSection5; // Solo en desktop
    if (carouselInner) carouselInner.innerHTML = htmlMobile; // Solo en mobile
  });
}
*/
/* MODIFICACION DE LA FUNCION LOADCOMENTARIOS PARA USAR TIMESTAMP
function loadComentarios() {
  onSnapshot(comentariosCollection, (snapshot) => {
    let htmlDesktopSection4 = ""; // HTML para la sección 4 (últimos 3 comentarios)
    let htmlDesktopSection5 = ""; // HTML para la sección 5 (resto de comentarios)
    let htmlMobile = ""; // HTML para el carrusel móvil (todos los comentarios)
    let first = true; // para marcar el primer slide como activo

    // Convertir los comentarios a un array
    const comentarios = [];
    snapshot.forEach(doc => {
      const data = doc.data();
      comentarios.push({ nombre: data.nombre, comentario: data.comentario });
    });

    // Ordenar los comentarios de más reciente a más antiguo
    comentarios.sort((a, b) => b.fecha - a.fecha); // Asegúrate de tener un campo "fecha" en Firestore

    // Obtener los últimos 3 comentarios (más recientes)
    const ultimosComentarios = comentarios.slice(0, 3); // Cambiamos a slice(0, 3) para los más recientes
    ultimosComentarios.forEach((data) => {
      // HTML para la sección 4 (últimos 3 comentarios)
      htmlDesktopSection4 += `
        <li class="mb-3">
          <div class="card p-3">
            <strong>${data.nombre}</strong>
            <p>${data.comentario}</p>
          </div>
        </li>
      `;
    });

    // Obtener el resto de los comentarios (más antiguos)
    const restoComentarios = comentarios.slice(3); // Cambiamos a slice(3) para el resto
    restoComentarios.forEach((data) => {
      // HTML para la sección 5 (resto de comentarios)
      htmlDesktopSection5 += `
        <li class="mb-3">
          <div class="card p-3">
            <strong>${data.nombre}</strong>
            <p>${data.comentario}</p>
          </div>
        </li>
      `;

      // HTML para el carrusel móvil (todos los comentarios)
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

    // Actualizar los contenedores
    const contenedorSec4 = document.getElementById("comentarios-lista-section4");
    const contenedorSec5 = document.getElementById("comentarios-lista-section5");
    const carouselInner = document.querySelector("#carouselComentarios .carousel-inner");

    if (contenedorSec4) contenedorSec4.innerHTML = htmlDesktopSection4; // Solo en desktop
    if (contenedorSec5) contenedorSec5.innerHTML = htmlDesktopSection5; // Solo en desktop
    if (carouselInner) carouselInner.innerHTML = htmlMobile; // Solo en mobile
  });
}
*/ 
/* MODIFICACION DE LA FUNCION SUBMIT COMENTARIO PARA CAPTAR EL TIMESTAMP
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
*/ 

/* modificacin submutcomentario por error en la consola
async function submitComentario(nombre, comentario) {
  try {
    await addDoc(comentariosCollection, {
      nombre: nombre,
      comentario: comentario,
      timestamp: firebase.firestore.FieldValue.serverTimestamp() // Usa serverTimestamp
    });
    console.log("Comentario agregado");
  } catch (error) {
    console.error("Error al agregar comentario:", error);
  }
}
*/


// Formulario versión Mobile
/*
const formMobile = document.getElementById("form-comentario-mobile");
if (formMobile) {
  formMobile.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre-apellido-huesped-mobile").value;
    const comentario = document.getElementById("comentario-huesped-mobile").value;
    const alertContainer = document.getElementById("alert-comentario-mobile");
    if (nombre.trim() === "" || comentario.trim() === "") {
      showAlert("Por favor, complete todos los campos", "danger", formMobile);
      return;
    }
    submitComentario(nombre, comentario)
      .then(() => {
        showAlert("Comentario agregado con éxito", "success", formMobile);
        formMobile.reset();
      })
      .catch((error) => {
        showAlert("Error al agregar comentario. Inténtalo nuevamente", "danger", formMobile);
        console.error("Error al agregar comentario:", error);
      });
  });
}
/*



/*
//! Comentarios Section 4/5 con Firebase
// Inicialización de Firebase y Firestore
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot, serverTimestamp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";


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

//! Mostrar alerta de envio de comentario formulario section 5
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


//funcion loadcomentarios
function loadComentarios() {
  onSnapshot(comentariosCollection, (snapshot) => {
    let htmlDesktopSection4 = ""; 
    let htmlDesktopSection5 = ""; 
    let htmlMobile = ""; 
    let first = true; 

    // Convertir los comentarios a un array
    const comentarios = [];
    snapshot.forEach(doc => {
      const data = doc.data();
      comentarios.push({
        nombre: data.nombre,
        comentario: data.comentario,
        timestamp: data.timestamp 
      });
    });

    // Ordenar los comentarios por nombre (alfabéticamente)
    comentarios.sort((a, b) => {
      const nombreA = a.nombre.toUpperCase(); 
      const nombreB = b.nombre.toUpperCase();
      if (nombreA < nombreB) return -1; 
      if (nombreA > nombreB) return 1; 
      return 0; 
    });

    // Obtener los últimos 3 comentarios (alfabéticamente)
    const ultimosComentarios = comentarios.slice(0, 3); 
    ultimosComentarios.forEach((data) => {
     
      htmlDesktopSection4 += `
        <li class="mb-3">
          <div class="card p-3">
            <strong>${data.nombre}</strong>
            <p>${data.comentario}</p>
          </div>
        </li>
      `;
    });

  
    const restoComentarios = comentarios.slice(3); 
    restoComentarios.forEach((data) => {

      htmlDesktopSection5 += `
        <li class="mb-3">
          <div class="card p-3">
            <strong>${data.nombre}</strong>
            <p>${data.comentario}</p>
          </div>
        </li>
      `;
    });

 
    comentarios.forEach((data) => {
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

    // Actualizar los contenedores
    const contenedorSec4 = document.getElementById("comentarios-lista-section4");
    const contenedorSec5 = document.getElementById("comentarios-lista-section5");
    const carouselInner = document.querySelector("#carouselComentarios .carousel-inner");

    if (contenedorSec4) contenedorSec4.innerHTML = htmlDesktopSection4; 
    if (contenedorSec5) contenedorSec5.innerHTML = htmlDesktopSection5; 
    if (carouselInner) carouselInner.innerHTML = htmlMobile; 
  });
}


// Llamamos a la función para empezar a escuchar los cambios
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

// Agregar listener al formulario de mobile
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

*/