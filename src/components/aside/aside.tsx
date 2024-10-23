import Grid from '@suid/material/Grid';
import Box from '@suid/material/Box';
import Bombero from '../../assets/bombero.mp4';

export default function ImageText() {
  return (
    <Grid container spacing={2} sx={{ height: '80vh', alignItems: 'center', marginTop: '6%', "margin-bottom": "15%" }}>
      {/* Columna del texto a la izquierda */}
      <Grid item xs={12} md={5}>
        <p class='divider' style={{ margin: 0, padding: 0 }}></p>
        <Box sx={{ padding: '10px' }}>
          <Box component="h1" class='container' sx={{ fontSize: '2em', marginBottom: '20px', textAlign: 'right' }}>
            <Box component="p" sx={{ fontSize: '1.2rem', paddingLeft: '150px' }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique eligendi cumque ea voluptatibus vel numquam repellendus, ad perspiciatis veritatis nisi sapiente quisquam vero deserunt qui harum aperiam odio id! Autem?
            </Box>
          </Box>
        </Box>
      </Grid>

      {/* Columna del video a la derecha */}
      <Grid item xs={12} md={5}>
        <Box sx={{ display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
          <video
            controls
            src={Bombero}
            style={{ width: '60%', height: '100%', "max-width": '800px', "border-radius": "1%" }}
          >
            Tu navegador no soporta la etiqueta de video.
          </video>
        </Box>
      </Grid>
    </Grid>
  );
}
//Esta es el otro archivo que se va a configurar es indispensable tener en cuenta que nos queremos matar//




