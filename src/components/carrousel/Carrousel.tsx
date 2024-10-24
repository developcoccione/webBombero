import { onMount } from 'solid-js';
import 'materialize-css/dist/css/materialize.min.css'; // Importamos Materialize CSS
import M from 'materialize-css'; // Importamos Materialize JS
import F1 from '../../assets/foto1.jpg';
import F2 from '../../assets/image15.jpg';
import F3 from '../../assets/foto11.jpg';
import F7 from '../../assets/image10.jpg'
import Partelado from '../../assets/Imagen3.png';

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
                    <div class="row" style={{  position: 'relative'}}>
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
                                src={Partelado}
                                class="ParteRoja"
                                style={{ 
                                    width: '40%', /* Aumenta el ancho para que abarque más espacio */
                                    height: '500px', /* Altura automática para mantener la proporción */
                                    position: 'absolute', /* Posicionamiento absoluto para superponerla */
                                    top: '0', 
                                    "z-index": 3, /* Asegura que esté por encima de la otra imagen */
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
                                src={Partelado}
                                class="ParteRoja"
                                style={{ 
                                    width: '40%', /* Aumenta el ancho para que abarque más espacio */
                                    height: '500px', /* Altura automática para mantener la proporción */
                                    position: 'absolute', /* Posicionamiento absoluto para superponerla */
                                    top: '0', 
                                    "z-index": 3, /* Asegura que esté por encima de la otra imagen */
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
                                src={F7} 
                                style={{ width: '100%', height: '500px', margin: 0 }} // Establece la altura aquí
                                alt="Imagen 1" 
                            />
                        </div>
                        {/* Segunda imagen del carrusel, superpuesta y de mayor tamaño */}
                        <div class="col s12" style={{ padding: 0, position: 'absolute', top: 0, left: "10%"}}>
                            <img 
                                src={Partelado}
                                class="ParteRoja"
                                style={{ 
                                    width: '40%', /* Aumenta el ancho para que abarque más espacio */
                                    height: '500px', /* Altura automática para mantener la proporción */
                                    position: 'absolute', /* Posicionamiento absoluto para superponerla */
                                    top: '0', 
                                    "z-index": 3, /* Asegura que esté por encima de la otra imagen */
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
