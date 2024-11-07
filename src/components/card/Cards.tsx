import { createSignal, onCleanup } from 'solid-js';
import { Grid, Card, CardContent, CardMedia } from '@suid/material';
import F2 from '../../assets/foto2.jpg';
import F3 from '../../assets/foto3.jpg';
import F4 from '../../assets/foto4.jpg';
import F5 from '../../assets/foto5.jpg';

export default function Cards3() {
  const cardsData = [
    {
      image: F4,
      text: 'Grupo Motorizado de Atención de Emergencias',
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

  const [visibleCards, setVisibleCards] = createSignal(Array(cardsData.length).fill(false));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const index = Number(entry.target.getAttribute('data-index'));
      if (entry.isIntersecting) {
        setVisibleCards((prev) => {
          const newVisible = [...prev];
          newVisible[index] = true;
          return newVisible;
        });
        observer.unobserve(entry.target);
      }
    });
  });

  onCleanup(() => observer.disconnect());

  return (
    <div style={{ margin: "9% 5% 0 5%", "font-size": "130%", "font-family": "Segoe UI" }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          {cardsData.slice(0, 2).map((card, index) => (
            <Card
              ref={(el) => {
                if (el) observer.observe(el);
              }}
              data-index={index}
              class="hoverable"
              sx={{
                marginBottom: '5.9%',
                width: '100%',
                height: '47.8%',
                opacity: visibleCards()[index] ? 1 : 0,
                transform: visibleCards()[index] ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 0.5s ease, transform 0.5s ease',
                position: 'relative',
                zIndex: 1,
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
          <Card
            ref={(el) => {
              if (el) observer.observe(el);
            }}
            data-index={2}
            class="hoverable"
            sx={{
              height: '100%',
              width: '100%',
              opacity: visibleCards()[2] ? 1 : 0,
              transform: visibleCards()[2] ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.5s ease, transform 0.5s ease',
              position: 'relative',
              zIndex: 1,
              
            }}
          >
            <CardMedia
              component="img"
              height="82.5%"
              image={cardsData[2].image}
              alt="Tarjeta Grande"
              sx={{filter: 'blur(2px)', fontFamily: "Segoe UI", borderBottom: '10px solid #242088' }}
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
