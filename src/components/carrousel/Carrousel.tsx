import { onMount } from 'solid-js';
import { Container, Grid, Card, CardContent, CardMedia } from '@suid/material'; // Componentes de SUID
import 'materialize-css/dist/css/materialize.min.css'; // Importamos Materialize CSS
import M from 'materialize-css'; // Importamos Materialize JS
import LogoGob from '../../assets/logoGobernacion.png';
import F1 from '../../assets/foto1.jpg';
import F2 from '../../assets/foto2.jpg';
import F4 from '../../assets/foto4.jpg';
import F5 from '../../assets/foto5.jpg';
import ParteRoja from '../../assets/Imagen2.png'


export default function Carrou () {
        let carouselRef: HTMLDivElement | undefined;

    // Inicialización del carrusel cuando el componente se monta
    onMount(() => {
        // Inicialización del carrusel con Materialize y la opción de indicadores activada
        if (carouselRef) {
        M.Carousel.init(carouselRef, {
            fullWidth: true,
            indicators: true, // Activar indicadores
        });
        }

        // Para controlar el cambio automático de slides cada 3 segundos
        let instance = M.Carousel.getInstance(carouselRef);
        const interval = setInterval(() => {
        instance?.next(); // Cambia al siguiente slide
        }, 6000); // Cambia el slide cada 3 segundos

        return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
    });
    return (
    <>
      <div ref={carouselRef} class="carousel carousel-slider">
      <div class="carousel-item">
        <div class="row" style={{ margin: 0, position: 'relative' }}>
          {/* Primera imagen del carrusel en la primera columna */}
          <div class="col s6" style={{ padding: 0, position: 'relative' }}>
            <img 
              src={F1} 
              style={{ width: '150%', height: '525px', margin: 0 }} 
              alt="Imagen 1" 
            />
          </div>
          {/* Segunda imagen del carrusel, superpuesta y de mayor tamaño */}
          <div class="col s5" style={{ padding: 0, position: 'relative' }}>
            <img 
              src={ParteRoja} 
              style={{ 
                width: '110%', /* Aumenta el ancho para que abarque más espacio */
                height: '525px', /* Aumenta la altura para que sea más grande */
                position: 'absolute', /* Posicionamiento absoluto para superponerla */
                top: '0', 
                right: '-20%', /* La mueve hacia la derecha para superponerse más sobre la otra imagen */
                "z-index": 10, /* Asegura que esté por encima de la otra imagen */
                margin: 0 
              }} 
              alt="Imagen Roja Superpuesta" 
            />
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="row" style={{ margin: 0, position: 'relative' }}>
          {/* Primera imagen del carrusel en la primera columna */}
          <div class="col s6" style={{ padding: 0, position: 'relative' }}>
            <img 
              src={F5} 
              style={{ width: '150%', height: '525px', margin: 0 }} 
              alt="Imagen 1" 
            />
          </div>
          {/* Segunda imagen del carrusel, superpuesta y de mayor tamaño */}
          <div class="col s5" style={{ padding: 0, position: 'relative' }}>
            <img 
              src={ParteRoja} 
              style={{ 
                width: '110%', /* Aumenta el ancho para que abarque más espacio */
                height: '525px', /* Aumenta la altura para que sea más grande */
                position: 'absolute', /* Posicionamiento absoluto para superponerla */
                top: '0', 
                right: '-20%', /* La mueve hacia la derecha para superponerse más sobre la otra imagen */
                "z-index": 10, /* Asegura que esté por encima de la otra imagen */
                margin: 0 
              }} 
              alt="Imagen Roja Superpuesta" 
            />
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="row" style={{ margin: 0, position: 'relative' }}>
          {/* Primera imagen del carrusel en la primera columna */}
          <div class="col s6" style={{ padding: 0, position: 'relative' }}>
            <img 
              src={F2} 
              style={{ width: '150%', height: '525px', margin: 0 }} 
              alt="Imagen 1" 
            />
          </div>
          {/* Segunda imagen del carrusel, superpuesta y de mayor tamaño */}
          <div class="col s5" style={{ padding: 0, position: 'relative' }}>
            <img 
              src={ParteRoja} 
              style={{ 
                width: '110%', /* Aumenta el ancho para que abarque más espacio */
                height: '525px', /* Aumenta la altura para que sea más grande */
                position: 'absolute', /* Posicionamiento absoluto para superponerla */
                top: '0', 
                right: '-20%', /* La mueve hacia la derecha para superponerse más sobre la otra imagen */
                "z-index": 10, /* Asegura que esté por encima de la otra imagen */
                margin: 0 
              }} 
              alt="Imagen Roja Superpuesta" 
            />
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="row" style={{ margin: 0, position: 'relative' }}>
          {/* Primera imagen del carrusel en la primera columna */}
          <div class="col s6" style={{ padding: 0, position: 'relative' }}>
            <img 
              src={F4} 
              style={{ width: '150%', height: '525px', margin: 0 }} 
              alt="Imagen 1" 
            />
          </div>
          {/* Segunda imagen del carrusel, superpuesta y de mayor tamaño */}
          <div class="col s5" style={{ padding: 0, position: 'relative' }}>
            <img 
              src={ParteRoja} 
              style={{ 
                width: '110%', /* Aumenta el ancho para que abarque más espacio */
                height: '525px', /* Aumenta la altura para que sea más grande */
                position: 'absolute', /* Posicionamiento absoluto para superponerla */
                top: '0', 
                right: '-20%', /* La mueve hacia la derecha para superponerse más sobre la otra imagen */
                "z-index": 10, /* Asegura que esté por encima de la otra imagen */
                margin: 0 
              }} 
              alt="Imagen Roja Superpuesta" 
            />
          </div>
        </div>
      </div>
    </div>
    </>
    )
}


