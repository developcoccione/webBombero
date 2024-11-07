import { Grid, Card, CardContent, CardMedia, Box } from '@suid/material'; // Componentes de SUID
import 'solid-slider/slider.css';
import { Slider, SliderProvider, SliderButton} from 'solid-slider';
import F2 from '../../assets/foto2.jpg';
import F3 from '../../assets/foto3.jpg';
import F5 from '../../assets/foto5.jpg';



export default function Cards1() {
  const cardsData = [
    { image: F2, text: 'Descripción de la imagen 1' },
    { image: F5, text: 'Descripción de la imagen 2' },
    { image: F3, text: 'Descripción de la imagen 3' }
  ];

 

  return (
    <div style={{ margin: "9% 5% 5% 5%", "font-size": "150%", "font-family": "Segoe UI" }}>
      <SliderProvider>
        <Slider options={{ loop: true }} >
          {cardsData.map((card, index) => (
            <Card
              sx={{
                height: '100%',
                width: '100%', // Ajusta el ancho de la tarjeta
                display: 'flex',
              }}
            >
              <CardMedia
                component="img"
                image={card.image}
                sx={{ width: '70%', filter: 'blur(2px)',  borderBottom: '10px solid #db1322'}}

              />
              <CardContent sx={{ width: '30%', padding: '1% 0% 0% 3%', textAlign: "left"}}>
                <p>{card.text}</p>
              </CardContent>
            </Card>
          ))}
        </Slider>
        
      </SliderProvider>
    </div>
  );
}
