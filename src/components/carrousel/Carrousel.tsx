import { onMount } from 'solid-js';
import 'materialize-css/dist/css/materialize.min.css'; // Importamos Materialize CSS
import M from 'materialize-css'; // Importamos Materialize JS
import F2 from '../../assets/image15.png';
import F3 from '../../assets/Mascotas.png';
import F7 from '../../assets/image10.jpg';
import Partelado from '../../assets/Imagen3.png';

export default function Carrou() {
  let carouselRef: HTMLDivElement | undefined;
  let instance: M.Carousel | null = null;

  // Inicialización del carrusel cuando el componente se monta
  onMount(() => {
    if (carouselRef) {
      // Inicializa el carrusel y guarda la instancia en la variable
      instance = M.Carousel.init(carouselRef, {
        fullWidth: true,
        indicators: true, // Activar indicadores
      });
    }

    // Cambia el slide cada 6 segundos si la instancia está inicializada
    const interval = setInterval(() => {
      if (instance) {
        instance.next();
      }
    }, 6000);

    return () => {
      clearInterval(interval); // Limpia el intervalo al desmontar el componente
      instance?.destroy(); // Destruye la instancia del carrusel si existe
      instance = null; // Limpia la referencia de la instancia
    };
  });

  return (
    <>
      <div ref={carouselRef} class="carousel carousel-slider" style={{ "margin-top": '0%', }}>
        <div class="carousel-item">
          <div class="row" style={{ margin: '0', position: 'relative' }}>
            <div class="col s12" style={{ padding: 0 }}>
              <img 
                src={F3} 
                style={{ width: '100%', height: 'auto', margin: 0 }} 
                alt="Imagen 1" 
              />
            </div>
            <div class="col s12" style={{ padding: 0, position: 'absolute', top: 0, left: '6%' }}>
              <img 
                src={Partelado}
                class="ParteRoja"
                style={{ 
                  width: '44%',
                  height: 'auto',
                  position: 'absolute',
                  top: '0',
                  "z-index": 3,
                  margin: 0,
                  filter: "hue-rotate(0deg)"
                }} 
                alt="Imagen Roja Superpuesta" 
              />
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <div class="row" style={{ margin: '0', position: 'relative' }}>
            <div class="col s12" style={{ padding: 0 }}>
              <img 
                src={F2} 
                style={{ width: '100%', height: 'auto', margin: 0 }} 
                alt="Imagen 2" 
              />
            </div>
            <div class="col s12" style={{ padding: 0, position: 'absolute', top: 0, left: '6%' }}>
              <img 
                src={Partelado}
                class="ParteRoja"
                style={{ 
                  width: '44%',
                  height: 'auto',
                  position: 'absolute',
                  top: '0',
                  "z-index": 3,
                  margin: 0
                }} 
                alt="Imagen Roja Superpuesta" 
              />
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <div class="row" style={{ margin: '0', position: 'relative' }}>
            <div class="col s12" style={{ padding: 0 }}>
              <img 
                src={F7} 
                style={{ width: '100%', height: 'auto', margin: 0 }} 
                alt="Imagen 3" 
              />
            </div>
            <div class="col s12" style={{ padding: 0, position: 'absolute', top: 0, left: '6%' }}>
              <img 
                src={Partelado}
                class="ParteRoja"
                style={{ 
                  width: '44%',
                  height: 'auto',
                  position: 'absolute',
                  top: '0',
                  "z-index": 3,
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
