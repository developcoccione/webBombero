import { createSignal, onCleanup, onMount } from 'solid-js';
import Grid from '@suid/material/Grid';
import Box from '@suid/material/Box';
import Bomberos from '../../assets/Bomberos.mp4';

export default function ImageText() {
  // Signal para controlar la visibilidad del texto
  const [isTextVisible, setIsTextVisible] = createSignal(false);

  // Función para observar cuándo el texto entra en pantalla
  const createObserver = () => {
    return new IntersectionObserver(
      ([entry]) => setIsTextVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
  };

  let textBoxRef: HTMLDivElement | undefined;

  // Configuración del observador
  onMount(() => {
    const observer = createObserver();
    if (textBoxRef) observer.observe(textBoxRef);

    // Limpiar el observador al desmontar
    onCleanup(() => observer.disconnect());
  });

  return (
    <Grid container spacing={2} sx={{ alignItems: 'center', marginTop: { xs: '10%', md: '6%' } }}>
      {/* Columna del texto a la izquierda */}
      <Grid item xs={12} md={4}>
        <Box 
          ref={textBoxRef} 
          sx={{
            paddingX: { xs: '50px', md: '5px', lg:'40px' },
            textAlign: { xs: 'center', md: 'right' },
            opacity: isTextVisible() ? 1 : 0,
            transform: isTextVisible() ? 'translateX(0)' : 'translateX(-20px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
            
          }}
        >
          <Box component="h1" sx={{ fontSize: { xs: '1.5em', md: '2em' } }}>
            <Box component="p" sx={{ fontSize: { xs: '1.5rem', md: '1.3rem', lg: '1.3rem' }, paddingLeft: { md: '100px', lg:'200px' }, textAlign: "justify", fontFamily: "arial" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique eligendi cumque ea voluptatibus vel numquam repellendus, ad perspiciatis veritatis nisi sapiente quisquam vero deserunt qui harum aperiam odio id! Autem?
            </Box>
          </Box>
        </Box>
      </Grid>

      {/* Columna del video a la derecha */}
      <Grid item xs={12} md={8}>
        <Box 
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: { xs: '300px', md: '500px', lg: '600px' },
            borderRadius: '1px',
          }}
        >
          <video
            autoplay
            muted
            loop
            src={Bomberos}
            style={{
              width: '100%',
              height: '100%',
              "object-fit": 'cover',
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
}
