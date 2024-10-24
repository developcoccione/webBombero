import { createSignal } from 'solid-js';
import { Button, Container, Grid } from '@suid/material'; // Importar componentes de SUID

export default function Navbar() {
  // Estado para guardar el índice del botón seleccionado
  const [selectedButton, setSelectedButton] = createSignal<number | null>(null);

  // Lista de botones de navegación
  const navButtons = ['Inicio', 'Acerca de', 'Servicios', 'Contacto'];

  return (
    <Container sx={{ marginTop: '5%', textAlign: 'center' }}>
      <Grid container spacing={2}>
        {navButtons.map((buttonLabel, index) => (
          <Grid item xs={3}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: selectedButton() === index ? '#ff9800' : '#e0e0e0', // Color según si está seleccionado
                color: selectedButton() === index ? '#fff' : '#000', // Texto blanco si está seleccionado
              }}
              onClick={() => setSelectedButton(index)} // Cambiar el botón seleccionado
            >
              {buttonLabel}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
