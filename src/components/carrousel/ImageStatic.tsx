import ImageDere from '../../assets/Imagen2.png';
import ImageIzqui from '../../assets/Imagen2.5.png';
import ImageCentra from '../../assets/foto9.jfif';
import { Container, Grid, Box } from '@suid/material';

export default function ImageStat() {
    const images = [
        { src: ImageIzqui, alt: "Imagen Izquierda" },
        { src: ImageCentra, alt: "Imagen Centro" },
        { src: ImageDere, alt: "Imagen Derecha" },
    ];

    return (
        <Container sx={{ maxWidth: { xs: '100%', md: '100%', lg: '100%' }, marginBottom: "9%" }}>
            <Grid 
                container 
                spacing={0} 
                alignItems="center" 
                sx={{ height: { xs: 'auto', md: 'auto' } }}
            >
                {/* Imagen izquierda */}
                <Grid item xs={4} sx={{zIndex: 2 }}>
                    <Box
                        component="img"
                        src={images[0].src}
                        alt={images[0].alt}
                        sx={{
                            width: '100%',
                            height: { xs: '170px', md: '230px', lg: '300px' },
                            objectFit: 'cover',
                            display: 'block',
                            position: "relative",
                            right: "2.5vh"
                        }}
                    />
                </Grid>

                {/* Imagen centro, con mayor ancho para abarcar parcialmente las otras imágenes */}
                <Grid item xs={4} sx={{zIndex: 1 }}>
                    <Box
                        component="img"
                        src={images[1].src}
                        alt={images[1].alt}
                        sx={{
                            width: { xs: '200%', md: '200%', lg:'200%' },  // Ancho extendido
                            height: { xs: '170px', md: '230px', lg: '300px' },
                            objectFit: 'cover',
                            display: 'block',
                            position: "relative",
                            right: "50%"

                        }}
                    />
                </Grid>

                {/* Imagen derecha */}
                <Grid item xs={4} sx={{zIndex: 2 }}>
                    <Box
                        component="img"
                        src={images[2].src}
                        alt={images[2].alt}
                        sx={{
                            width: '100%',
                            height: { xs: '170px', md: '230px', lg: '300px' },
                            objectFit: 'cover',
                            display: 'block',
                            position: "relative",
                            left: "2.5vh",
                        }}
                    />
                </Grid>
            </Grid>
        </Container>
    );
}
