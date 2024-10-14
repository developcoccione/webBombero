import { onMount } from 'solid-js';
import { Container, Grid, Card, CardContent, CardMedia } from '@suid/material'; // Componentes de SUID
import 'materialize-css/dist/css/materialize.min.css'; // Importamos Materialize CSS
import M from 'materialize-css'; // Importamos Materialize JS
import LogoGob from '../../assets/logoGobernacion.png';
import F1 from '../../assets/foto1.jpg';
import F2 from '../../assets/foto2.jpg';
import F3 from '../../assets/foto3.jpg';
import F4 from '../../assets/foto4.jpg';
import F5 from '../../assets/foto5.jpg';
import F6 from '../../assets/foto7.jpg';
import F7 from '../../assets/F6.jpg'
import LogBom from '../../assets/logoBomberos.png'
import '../../css/dimante.css'
import Prefooter from '../../assets/Pre-Footer.jpg'
import ParteRoja from '../../assets/Imagen2.png'


function Inicio() {
  // Datos de las tarjetas
  const cardsData = [
    {
      image: F4,
      text: 'Descripción de la imagen 1',
    },
    {
      image: F5,
      text: 'Descripción de la imagen 2',
    },
    {
      image: F3,
      text: 'Descripción de la imagen 3',
    },
    {
      image: F2,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel tempora eaque optio soluta voluptatibus, odio nostrum sunt officia quis iste id ab tenetur, minima magnam nemo cupiditate laborum accusamus sint!',
    },
  ];

  // Referencia al carrusel
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
    <div>
      {/* Header con degradado */}
      <header>
      <div
          class="header-container"
          style={{

            background: 'linear-gradient(150deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 5%, rgba(235,233,255,1) 5%, rgba(235,233,255,1) 16%, rgba(140,133,210,1) 16%, rgba(140,133,210,1) 30%, rgba(9,0,106,1) 30%, rgba(9,0,106,1) 70%, rgba(140,133,210,1) 70%, rgba(140,133,210,1) 84%, rgba(235,233,255,1) 84%, rgba(235,233,255,1) 95%, rgba(255,255,255,1) 95%, rgba(255,255,255,1) 100%)', // Color oscuro en el centro a blanco en los extremos
            padding: '0.%',
            display: 'flex',
            "justify-content": 'space-between',
            "align-items": 'center',
          }}
        >
          <img
            src={LogoGob}
            height="120"
            width="320"
            alt="Logo Monagas"
            class="logo"
          />
        </div>
      </header>

      {/* Footer con Materialize */}
      <header class="page-footer z-depth-2" style={{ background: '#ffff', padding: '2%', "margin-bottom": "3%"}}>
        <div class="container">
          <div class="row">
            
          </div>
        </div>
      </header>

    {/* Carrusel con Materialize mostrando dos imágenes por slide con la imagen roja superpuesta */}
    <div ref={carouselRef} class="carousel carousel-slider">
      <div class="carousel-item">
        <div class="row" style={{ margin: 0, position: 'relative' }}>
          {/* Primera imagen del carrusel en la primera columna */}
          <div class="col s6" style={{ padding: 0, position: 'relative' }}>
            <img 
              src={F1} 
              style={{ width: '150%', height: '420px', margin: 0 }} 
              alt="Imagen 1" 
            />
          </div>
          {/* Segunda imagen del carrusel, superpuesta y de mayor tamaño */}
          <div class="col s5" style={{ padding: 0, position: 'relative' }}>
            <img 
              src={ParteRoja} 
              style={{ 
                width: '110%', /* Aumenta el ancho para que abarque más espacio */
                height: '450px', /* Aumenta la altura para que sea más grande */
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
              style={{ width: '150%', height: '420px', margin: 0 }} 
              alt="Imagen 1" 
            />
          </div>
          {/* Segunda imagen del carrusel, superpuesta y de mayor tamaño */}
          <div class="col s5" style={{ padding: 0, position: 'relative' }}>
            <img 
              src={ParteRoja} 
              style={{ 
                width: '110%', /* Aumenta el ancho para que abarque más espacio */
                height: '450px', /* Aumenta la altura para que sea más grande */
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
              style={{ width: '150%', height: '420px', margin: 0 }} 
              alt="Imagen 1" 
            />
          </div>
          {/* Segunda imagen del carrusel, superpuesta y de mayor tamaño */}
          <div class="col s5" style={{ padding: 0, position: 'relative' }}>
            <img 
              src={ParteRoja} 
              style={{ 
                width: '110%', /* Aumenta el ancho para que abarque más espacio */
                height: '450px', /* Aumenta la altura para que sea más grande */
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
              style={{ width: '150%', height: '420px', margin: 0 }} 
              alt="Imagen 1" 
            />
          </div>
          {/* Segunda imagen del carrusel, superpuesta y de mayor tamaño */}
          <div class="col s5" style={{ padding: 0, position: 'relative' }}>
            <img 
              src={ParteRoja} 
              style={{ 
                width: '110%', /* Aumenta el ancho para que abarque más espacio */
                height: '450px', /* Aumenta la altura para que sea más grande */
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








    {/* Sección de Tarjetas con SUID y Materialize */}
    <div class="container" style={{ "margin-top": '9%', "margin-left": '12%' }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          {/* Tarjetas apiladas a la izquierda */}
          {cardsData.slice(0, 2).map((card) => (
            <Card class="hoverable" sx={{ marginBottom: '5.9%', width: '100%' }}> {/* Agrega un margen inferior */}
              <CardMedia
                component="img"
                height="250"
                image={card.image}
                alt="Card Image"
                sx={{ borderBottom: '10px solid #fbf11f' }}
              />
              <CardContent>
                <p style="font-size: 125%">{card.text}</p>
              </CardContent>
            </Card>
          ))}
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* Tarjeta grande a la derecha */}
          <Card class="hoverable" style={{ height: '96%', width: '120%' }}>
            <CardMedia
              component="img"
              height="625"
              image={cardsData[2].image}
              alt="Tarjeta Grande"
              sx={{ borderBottom: '10px solid #fbf11f' }} 
            />
            <CardContent>
              <p style="font-size: 125%">{cardsData[2].text}</p>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>





      {/* Imagen de fondo como footer */}
      <img 
        src={Prefooter} 
        alt="Footer Background" 
        style={{
          width: '100%',
          height: '14em', 
          display: 'block',
          "margin-top": '7%',
        }}
      />







        {/* Sección de Tarjetas con SUID y Materialize */}
        <div class="container" style={{ "margin-top": '9%', "margin-left": '6%' }}>
          <Grid container justifyContent="center" spacing={1}>
            <Grid item xs={12} sm={10}>
              {/* Tarjeta grande con imagen a la izquierda y texto a la derecha */}
              <Card class="hoverable" style={{ height: '100%', width: "130%", display: 'flex' }}>
                <Grid container>
                  {/* Columna para la imagen */}
                  <Grid item xs={12} sm={6}>
                    <CardMedia
                      component="img"
                      height="100%"
                      image={cardsData[3].image}
                      alt="Tarjeta Grande"
                      sx={{ objectFit: 'cover', height: '100%', width: '130%', borderBottom: '10px solid #fbf11f' }}
                    />
                  </Grid>

                  {/* Columna para el texto */}
                  <Grid item xs={12} sm={6} sx={{ paddingLeft: '200px', fontSize: '125%' }}>
                    <CardContent sx={{ textAlign: 'left' }}>
                      <p style={{ "margin-top": 0 }}>{cardsData[3].text}</p> {/* Elimina la alineación centrada verticalmente */}
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </div>






      {/* Footer con Materialize */}
      <footer class="page-footer" style={{ background: '#fbf11f', padding: '2%', "margin-top": "10%" }}>
              <div class="container">
                <div class="row">
            
          </div>
        </div>
      </footer>



      {/* Footer con Materialize */}
      <footer class="page-footer" style={{ background: '#242088', padding: '0.1%'}}>
        <div class="container">
          <div class="row">
            <div class="col l5 s12">
              <img src={LogBom} width="250" height="250" alt="Escudo" class="footer-logo valign-wrapper" />
            </div>
            <div class="col l5 s12">
              <p class="white-text" style="padding-top: 16%; font-size: 125%">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget aliquam
                dignissim velit habitant urna justo gravida.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Inicio;
