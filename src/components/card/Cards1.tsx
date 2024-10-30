import { Grid, Card, CardContent, CardMedia, Box } from '@suid/material'; // Componentes de SUID
import 'solid-slider/slider.css';
import { Slider, SliderProvider, SliderButton } from 'solid-slider';
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
    <div style={{ margin: "9% 5% 5% 5%" }}>
      <SliderProvider>
        <Slider options={{ loop: true }}>
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
                sx={{ width: '70%', filter: 'blur(2px)' }}

              />
              <CardContent sx={{ width: '30%', padding: '1% 0% 0% 3%', textAlign: "left"}}>
                <p>{card.text}</p>
              </CardContent>
            </Card>
          ))}
        </Slider>
        {/* Botón de navegación izquierda */}
        <Box sx={{
              position: 'absolute',
              transform: 'translateY(-50%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}>
          <SliderButton
            prev         
          >
            &#x2b60;
          </SliderButton>
        </Box>

        {/* Botón de navegación derecha */}
        <Box sx={{
          
              position: 'absolute',
              right: '5%',
              transform: 'translateY(-50%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}>
          <SliderButton
            next
          >
            &#x2b62;
          </SliderButton>
        </Box>
      </SliderProvider>
    </div>
  );
}
