****ESTRUCTURA GENERAL ANEM V2.****
Header: Título, logo y el botón principal.
Section 1: "Rincón Patagónico".
Section 2: "Nuestra Casa".
Section 3: "¿Dónde estamos?".
Section 4: "Sobre nosotros".
Section 5: Experiencias huespedes
Section 6: "Contacto y reservas"
Footer: sobre la página


**Pasos a Seguir:**

1. **Corregir Errores:** Arreglar rutas de imágenes, CSS con errores, y placeholders (como el mapa).

2. **Optimizar:** Imágenes, fuentes, y código (minificación).

3. **Mejorar Accesibilidad:** Textos alternativos, contraste de colores, y semántica HTML.

4. **Unificar Estilos:** Asegurar consistencia en fuentes, tamaños, y colores.

5. **Testear:** En diferentes navegadores y dispositivos para garantizar compatibilidad.









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

