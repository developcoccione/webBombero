import F2 from '../../assets/foto2.jpg';
import F3 from '../../assets/foto3.jpg';
import F4 from '../../assets/foto4.jpg';
import F5 from '../../assets/foto5.jpg';
import {Grid, Card, CardContent, CardMedia } from '@suid/material'; // Componentes de SUID


export default function Cards1 () {
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
    return (
        <>
        <div class="container" style={{ "margin-top": '9%', "margin-left": '6%' }}>
          <Grid container justifyContent="center" spacing={1}>
            <Grid item xs={12} sm={10}>
              {/* Tarjeta grande con imagen a la izquierda y texto a la derecha */}
              <Card class="hoverable" style={{ height: '100%', width: "130%", display: 'flex' }}>
                <Grid container>
                  {/* Columna para la imagen */}
                  <Grid item xs={12} sm={6}>
                    <CardMedia
                      component="img"
                      height="100%"
                      image={cardsData[3].image}
                      alt="Tarjeta Grande"
                      sx={{ objectFit: 'cover', height: '100%', width: '130%', borderBottom: '10px solid #fbf11f' }}
                    />
                  </Grid>

                  {/* Columna para el texto */}
                  <Grid item xs={12} sm={6} sx={{ paddingLeft: '200px', fontSize: '125%' }}>
                    <CardContent sx={{ textAlign: 'left' }}>
                      <p style={{ "margin-top": 0 }}>{cardsData[3].text}</p> {/* Elimina la alineación centrada verticalmente */}
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </div>
        </>
    )
}