import Grid from '@suid/material/Grid';
import Box from '@suid/material/Box';
import Bomberos from '../../assets/Bomberos.mp4';

export default function ImageText() {
  return (
    <Grid container spacing={2} sx={{  alignItems: 'center', marginTop: '6%' }}>
      {/* Columna del texto a la izquierda */}
      <Grid item xs={12} md={5}>
        <p class='divider' style={{ margin: 0, padding: 0 }}></p>
        <Box sx={{ padding: '10px' }}>
          <Box component="h1" class='container' sx={{ fontSize: '2em', textAlign: 'right' }}>
            <Box component="p" sx={{ fontSize: '1.2rem', paddingLeft: '150px' }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique eligendi cumque ea voluptatibus vel numquam repellendus, ad perspiciatis veritatis nisi sapiente quisquam vero deserunt qui harum aperiam odio id! Autem?
            </Box>
          </Box>
        </Box>
      </Grid>

      {/* Columna del video a la derecha */}
      <Grid item xs={12} md={7}>
          <Box sx={{ justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', borderRadius: '1px', overflow: 'hidden'}}>
            <video
              autoplay
              loop
              src={Bomberos}
              style={{
                width: '100%',  // El video ocupa todo el ancho del contenedor
                height: '100%', // El video ocupa todo el alto del contenedor
              }}
            />
          </Box>

      </Grid>
    </Grid>
  );
}
//Esta es el otro archivo que se va a configurar es indispensable tener en cuenta que nos queremos matar//




