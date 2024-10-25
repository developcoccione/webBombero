import { createSignal, onCleanup } from 'solid-js';
import { Grid, Card, CardContent, CardMedia } from '@suid/material'; // Componentes de SUID
import F2 from '../../assets/foto2.jpg';
import F3 from '../../assets/foto3.jpg';
import F4 from '../../assets/foto4.jpg';
import F5 from '../../assets/foto5.jpg';

export default function Cards3() {
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
  ];

  // Estado para rastrear la visibilidad de las tarjetas
  const [visibleCards, setVisibleCards] = createSignal(Array(cardsData.length).fill(false));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setVisibleCards((prev) => {
          const newVisible = [...prev];
          newVisible[index] = true; // Marca la tarjeta como visible
          return newVisible;
        });
        observer.unobserve(entry.target); // Deja de observar la tarjeta una vez que es visible
      }
    });
  });

  // Cleanup del observador al desmontar el componente
  onCleanup(() => observer.disconnect());

  return (
    <div style={{ margin: "9% 5% 0 5%" }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          {/* Tarjetas apiladas a la izquierda */}
          {cardsData.slice(0, 2).map((card, index) => (
            <Card
              ref={(el) => {
                if (el) observer.observe(el);
              }}
              class="hoverable"
              sx={{
                marginBottom: '5.9%',
                width: '100%',
                height: '47.8%',
                opacity: visibleCards()[index] ? 1 : 0, // Cambia a 0 para ocultar
                transform: visibleCards()[index] ? 'translateY(0)' : 'translateY(20px)', // Inicialmente abajo
                transition: 'opacity 0.5s ease, transform 0.1s ease', // Duración de la animación
                position: 'relative', // Asegura que no se muevan otros elementos
                zIndex: 1, // Mantiene las tarjetas en la parte superior
              }}
            >
              <CardMedia
                component="img"
                height="250"
                image={card.image}
                alt="Card Image"
                sx={{ borderBottom: '10px solid #fbf11f', filter: 'blur(2px)' }}
              />
              <CardContent>
                <p style={{ "font-size": '125%' }}>{card.text}</p>
              </CardContent>
            </Card>
          ))}
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* Tarjeta grande a la derecha */}
          <Card
            ref={(el) => {
              if (el) observer.observe(el);
            }}
            class="hoverable"
            sx={{
              height: '100%',
              width: '100%',
              opacity: visibleCards()[1] ? 1 : 0, // Cambia a 0 para ocultar
              transform: visibleCards()[1] ? 'translateY(0)' : 'translateY(20px)', // Inicialmente abajo
              transition: 'opacity 0.5s ease, transform 0.1s ease', // Duración de la animación
              position: 'relative', // Asegura que no se muevan otros elementos
              zIndex: 1, // Mantiene la tarjeta en la parte superior
            }}
          >
            <CardMedia
              component="img"
              height="84.4%"
              image={cardsData[2].image}
              alt="Tarjeta Grande"
              sx={{ borderBottom: '10px solid #fbf11f', filter: 'blur(2px)' }}
            />
            <CardContent>
              <p style={{ "font-size": '125%' }}>{cardsData[2].text}</p>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
