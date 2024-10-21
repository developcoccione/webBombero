import { onMount } from 'solid-js';
<<<<<<< HEAD
import 'materialize-css/dist/css/materialize.min.css'; // Importamos Materialize CSS
import M from 'materialize-css'; // Importamos Materialize JS
import F1 from '../../assets/foto1.jpg';
import F2 from '../../assets/foto2.jpg';
import F3 from '../../assets/foto3.jpg';
import F7 from '../../assets/Image7.png'
import ParteRoja from '../../assets/Imagen3.png';

export default function Carrou() {
    let carouselRef: HTMLDivElement | undefined;

    // Inicialización del carrusel cuando el componente se monta
    onMount(() => {
        if (carouselRef) {
            M.Carousel.init(carouselRef, {
                fullWidth: true,
                indicators: true, // Activar indicadores
            });
        }

        // Para controlar el cambio automático de slides cada 6 segundos
        let instance = M.Carousel.getInstance(carouselRef);
        const interval = setInterval(() => {
            instance?.next(); // Cambia al siguiente slide
        }, 6000); // Cambia el slide cada 6 segundos

        return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
    });

    return (
        <>
            <div ref={carouselRef} class="carousel carousel-slider">
                <div class="carousel-item">
                    <div class="row" style={{ margin: 0, position: 'relative' }}>
                        {/* Primera imagen del carrusel ocupando toda la pantalla */}
                        <div class="col s12" style={{ padding: 0 }}>
                            <img 
                                src={F7} 
                                style={{ width: '100%', height: '525px', margin: 0 }} // Establece la altura aquí
                                alt="Imagen 1" 
                            />
                        </div>
                        {/* Segunda imagen del carrusel, superpuesta y de mayor tamaño */}
                        <div class="col s12" style={{ padding: 0, position: 'absolute', top: 0, left: "10%"}}>
                            <img 
                                src={ParteRoja}
                                class="ParteRoja"
                                style={{ 
                                    width: '40%', /* Aumenta el ancho para que abarque más espacio */
                                    height: '525px', /* Altura automática para mantener la proporción */
                                    position: 'absolute', /* Posicionamiento absoluto para superponerla */
                                    top: '0', 
                                    "z-index": 5, /* Asegura que esté por encima de la otra imagen */
                                    margin: 0,
                                    filter: "hue-rotate(0deg)"
                                }} 
                                alt="Imagen Roja Superpuesta" 
                            />
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="row" style={{ margin: 0, position: 'relative' }}>
                        {/* Primera imagen del carrusel ocupando toda la pantalla */}
                        <div class="col s12" style={{ padding: 0 }}>
                            <img 
                                src={F2} 
                                style={{ width: '100%', height: '500px', margin: 0 }} // Establece la altura aquí
                                alt="Imagen 1" 
                            />
                        </div>
                        {/* Segunda imagen del carrusel, superpuesta y de mayor tamaño */}
                        <div class="col s12" style={{ padding: 0, position: 'absolute', top: 0, left: "10%"}}>
                            <img 
                                src={ParteRoja}
                                class="ParteRoja"
                                style={{ 
                                    width: '40%', /* Aumenta el ancho para que abarque más espacio */
                                    height: '500px', /* Altura automática para mantener la proporción */
                                    position: 'absolute', /* Posicionamiento absoluto para superponerla */
                                    top: '0', 
                                    "z-index": 5, /* Asegura que esté por encima de la otra imagen */
                                    margin: 0 
                                }} 
                                alt="Imagen Roja Superpuesta" 
                            />
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="row" style={{ margin: 0, position: 'relative' }}>
                        {/* Primera imagen del carrusel ocupando toda la pantalla */}
                        <div class="col s12" style={{ padding: 0 }}>
                            <img 
                                src={F3} 
                                style={{ width: '100%', height: '500px', margin: 0 }} // Establece la altura aquí
                                alt="Imagen 1" 
                            />
                        </div>
                        {/* Segunda imagen del carrusel, superpuesta y de mayor tamaño */}
                        <div class="col s12" style={{ padding: 0, position: 'absolute', top: 0, left: "10%"}}>
                            <img 
                                src={ParteRoja}
                                class="ParteRoja"
                                style={{ 
                                    width: '40%', /* Aumenta el ancho para que abarque más espacio */
                                    height: '500px', /* Altura automática para mantener la proporción */
                                    position: 'absolute', /* Posicionamiento absoluto para superponerla */
                                    top: '0', 
                                    "z-index": 5, /* Asegura que esté por encima de la otra imagen */
                                    margin: 0 
                                }} 
                                alt="Imagen Roja Superpuesta" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
=======
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
                height: '550px', /* Aumenta la altura para que sea más grande */
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
                height: '550px', /* Aumenta la altura para que sea más grande */
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
                height: '550px', /* Aumenta la altura para que sea más grande */
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


>>>>>>> 72d18238d9d9e263977a72ce9af32e2fdda473fd
