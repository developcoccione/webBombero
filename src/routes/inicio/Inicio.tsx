import 'materialize-css/dist/css/materialize.min.css'; // Importamos Materialize CSS
import Prefooter from '../../assets/Pre-Footer.jpg';
import Nav from '../../components/nav/nav';
import Cards3 from '../../components/card/Cards';
import Carrou from '../../components/carrousel/Carrousel';
import Cards1 from '../../components/card/Cards1'
import Footer from '../../components/footer/Footer';
import '../../css/fondo.css'



function Inicio() {
  return (
    <div class='Fondo'>
      {/* Header con degradado */}
      <Nav/>

    {/* Carrusel con Materialize mostrando dos imágenes por slide con la imagen roja superpuesta */}
    <Carrou/>

    {/* Sección de Tarjetas con SUID y Materialize */}
    <Cards3/>

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
        <Cards1/>

      {/* Footer con Materialize */}
      <Footer/>

    </div>
  );
}

export default Inicio;
