import Grid from '@suid/material/Grid';
import Box from '@suid/material/Box';
import Imagen from '../../assets/F6.jpg'
import { Class } from '@suid/icons-material';


export default function ImageText() {
  return (
    <Grid container spacing={2} sx={{ height: '75vh', alignItems: 'center', marginTop: '6%' }}>
      {/* Columna del texto a la izquierda */}
      <Grid item xs={12} md={5}>
        <p class='divider' style={{"margin": 0, "padding": 0}}></p>
            <Box sx={{ padding: '10px' }}>
            <Box component="h1" class='container' sx={{fontSize: '2em', marginBottom: '20px', textAlign: 'right'}} >
                <Box component="p" sx={{fontSize: '1.2rem', paddingLeft: '150px' }} >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique eligendi cumque ea voluptatibus vel numquam repellendus, ad perspiciatis veritatis nisi sapiente quisquam vero deserunt qui harum aperiam odio id! Autem?
                </Box>
            </Box>
            </Box>
      </Grid>

      {/* Columna de la imagen a la derecha */}
      <Grid item xs={12} md={7} >
        <Box sx={{ display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
          <img
            src={Imagen}
            alt="Imagen de ejemplo"
            style={{ width: '100%', height: '100%', "max-width": '800px', "border-radius": "1%" }}
          />
        </Box>
      </Grid>
    </Grid>
  );
}




