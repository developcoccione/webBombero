import F2 from '../../assets/foto2.jpg';
import F3 from '../../assets/foto3.jpg';
import F4 from '../../assets/foto4.jpg';
import F5 from '../../assets/foto5.jpg';
import { onMount } from 'solid-js';
import { Container, Grid, Card, CardContent, CardMedia } from '@suid/material'; // Componentes de SUID




export default function Cards3 () {
        // Datos de las tarjetas
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
    ];

    return (
        <>
            <div class="container" style={{ "margin-top": '9%', "margin-left": '12%' }}>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                {/* Tarjetas apiladas a la izquierda */}
                {cardsData.slice(0, 2).map((card) => (
                    <Card class="hoverable" sx={{ marginBottom: '5.9%', width: '100%' }}> {/* Agrega un margen inferior */}
                    <CardMedia
                        component="img"
                        height="250"
                        image={card.image}
                        alt="Card Image"
                        sx={{ borderBottom: '10px solid #fbf11f', filter: 'blur(2px)' }}
                    />
                    <CardContent>
                        <p style="font-size: 125%">{card.text}</p>
                    </CardContent>
                    </Card>
                ))}
                </Grid>
                <Grid item xs={12} sm={6}>
                {/* Tarjeta grande a la derecha */}
                <Card class="hoverable" style={{ height: '96%', width: '120%' }}>
                    <CardMedia
                    component="img"
                    height="637"
                    image={cardsData[2].image}
                    alt="Tarjeta Grande"
                    sx={{ borderBottom: '10px solid #fbf11f',filter: 'blur(2px)' }} 
                    />
                    <CardContent>
                    <p style="font-size: 125%">{cardsData[2].text}</p>
                    </CardContent>
                </Card>
                </Grid>
            </Grid>
            </div>
        </>
    )
}


