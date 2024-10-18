import ImageDere from '../../assets/Imagen2.png'
import ImageIzqui from '../../assets/Imagen2.5.png'
import ImageCentra from '../../assets/foto9.jfif'


export default function mageStat() {
    const images = [
      {
        src: ImageIzqui,
        alt: "Imagen Izquierda",
      },
      {
        src: ImageCentra,
        alt: "Imagen Centro",
      },
      {
        src: ImageDere,
        alt: "Imagen Derecha",
      },
    ];
  
    return (
      <div style={{ display: 'grid', "grid-template-columns": '1fr 3fr 1fr', height: '618px', "margin-top": '10%', position: 'relative' }}>
        {/* Imagen izquierda */}
        <div style={{ "grid-column": 1, "z-index": 2, position: 'relative'}}>
          <img
            src={images[0].src}
            alt={images[0].alt}
            style={{ width: '100%', height: '89%', position: 'relative' }}
            class="responsive-img"
          />
        </div>
  
        {/* Imagen centro */}
        <div style={{ "grid-column": 1, "z-index": 1, position: "absolute" }}>
          <img
            src={images[1].src}
            alt={images[1].alt}
            style={{ width: '76%', height: '550px', position: 'relative' }}
            class="responsive-img"
          />
        </div>
  
        {/* Imagen derecha */}
        <div style={{ "grid-column": 3, "z-index": 2, position: 'relative' }}>
          <img
            src={images[2].src}
            alt={images[2].alt}
            style={{ width: '100%', height: '89%', position: 'relative' }}
            class="responsive-img"
          />
        </div>
      </div>
    );
  }
  