import { createSignal, onCleanup, createEffect } from 'solid-js';
import { Grid, Card, CardContent, CardMedia } from '@suid/material'; // Componentes de SUID
import F2 from '../../assets/foto2.jpg';
import F3 from '../../assets/foto3.jpg';
import F4 from '../../assets/foto4.jpg';
import F5 from '../../assets/foto5.jpg';

export default function Cards1() {
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

  // Estado para rastrear qué cartas son visibles
  const [visibleCards, setVisibleCards] = createSignal(Array(cardsData.length).fill(false));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setVisibleCards((prev) => {
          const newVisible = [...prev];
          newVisible[index] = true; // Marca la carta como visible
          return newVisible;
        });
        observer.unobserve(entry.target); // Deja de observar la carta una vez que es visible
      }
    });
  });

  // Cleanup del observador al desmontar el componente
  onCleanup(() => observer.disconnect());

  return (
    <div style={{ margin: "9% 5% 5% 5%" }}>
      <Grid container justifyContent="center" spacing={1}>
        <Grid item xs={12} sm={10}>
          {/* Tarjeta grande con imagen a la izquierda y texto a la derecha */}
          <Card
            ref={(el) => {
              if (el) observer.observe(el);
            }}
            class="hoverable"
            style={{
              height: '100%',
              width: "100%",
              display: 'flex',
              opacity: visibleCards()[0] ? 1 : 0,
              transform: visibleCards()[0] ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.5s, transform 2s',
            }}
          >
            <Grid container>
              {/* Columna para la imagen */}
              <Grid item xs={12} sm={9}>
                <CardMedia
                  component="img"
                  height="100%"
                  image={cardsData[3].image}
                  alt="Tarjeta Grande"
                  sx={{ objectFit: 'cover', height: '100%', width: '100%', borderBottom: '10px solid #fbf11f', filter: 'blur(2px)' }}
                />
              </Grid>

              {/* Columna para el texto */}
              <Grid item xs={12} sm={3} sx={{ fontSize: '125%' }}>
                <CardContent sx={{ textAlign: 'left' }}>
                  <p style={{ "margin-top": 0 }}>{cardsData[3].text}</p>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
