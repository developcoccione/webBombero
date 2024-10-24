import { Container, Grid, Card, CardContent, CardMedia } from '@suid/material'; // Importación de componentes de SUID
import Per1 from '../../assets/perro1.jfif'
import Per2 from '../../assets/perro2.jpg'
import Per3 from '../../assets/perro3.jpg'

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
];

export default function AnimalCatalog() {
  return (
    <Container sx={{ marginTop: '5%', marginLeft: '5%' }}>
      <Grid container spacing={4}>
        {animalsData.map((animal) => (
          <Grid item xs={11} sm={5} md={4}>
            <Card class="hoverable" style={{ width: '100%' }}>
              <CardMedia
                component="img"
                height="300"
                image={animal.image}
                alt={animal.name}
                sx={{borderBottom: '5px solid #fbf11f' }} // Aplica el efecto blur y un borde inferior
              />
              <CardContent>
                <h2 style={{ "font-size": '1.5rem' }}>{animal.name}</h2>
                <p style={{ "font-size": '1rem', color: '#757575' }}>Fecha de ingreso: {animal.date}</p>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
