import { Container, Grid, Card, CardContent, CardMedia, styled } from '@suid/material'; // Importación de componentes de SUID
import Per1 from '../../assets/perro1.jfif';
import Per2 from '../../assets/perro2.jpg';
import Per3 from '../../assets/perro3.jpg';
import Per4 from '../../assets/Per4.jpg';
import Per5 from '../../assets/Perro5.jfif'
import { createSignal } from 'solid-js';

// Datos de ejemplo para el catálogo
const animalsData = [
  {
    name: 'Rex',
    image: Per1,
    date: '2024-01-10',
  },
  {
    name: 'Max',
    image: Per2,
    date: '2023-12-05',
  },
  {
    name: 'Bella',
    image: Per3,
    date: '2023-11-20',
  },
  {
    name: 'Mia',
    image: Per4,
    date: '2023-02-22',
  },
];

// Componente estilizado para las cartas
const AnimatedCard = styled(Card)(({ theme }) => ({
  opacity: 0,
  transform: 'translateY(20px)',
  animation: 'fadeIn 1s forwards',
  '@keyframes fadeIn': {
    '0%': {
      opacity: 0,
      transform: 'translateY(20px)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
}));

export default function AnimalCatalog() {
  return (
    <Container sx={{ marginTop: "5%" }}>
      <Grid container spacing={7} sx={{ justifyContent: "center" }}>
        {animalsData.map((animal, index) => (
          <Grid item xs={12} sm={6} md={4} xl={3} sx={{ animationDelay: `${index * 100}ms` }}>
            <AnimatedCard class="hoverable">
              <CardMedia
                component="img"
                height="250"
                image={animal.image}
                alt={animal.name}
                sx={{ borderBottom: '5px solid #fbf11f', width: "100%" }} // Aplica el efecto blur y un borde inferior
              />
              <CardContent>
                <h2 style={{ "font-size": '1.5rem' }}>{animal.name}</h2>
                <p style={{ "font-size": '1rem', color: '#757575' }}>Fecha de ingreso: {animal.date}</p>
              </CardContent>
            </AnimatedCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
