import LogBom from '../../assets/EscudoBomber.png';
import { Container, Grid, Box, Typography } from '@suid/material';

export default function Footer() {
    return (
        <>
            {/* Primera sección del Footer */}
            <Box component="footer" sx={{ background: '#fbf11f', padding: '2%', mt: '5%' }}>
                <Container>
                    <Grid container>
                        {/* Puedes agregar contenido adicional aquí si lo deseas */}
                    </Grid>
                </Container>
            </Box>

            {/* Segunda sección del Footer */}
            <Box component="footer" sx={{ background: '#242088', padding: '0.1%'}}>
                <Container>
                    <Grid container justifyContent="center" alignItems="center">
                        
                        {/* Logotipo */}
                        <Grid item xs={12} sm={6} lg={5}>
                            <Box
                                component="img"
                                src={LogBom}
                                alt="Escudo"
                                sx={{
                                    width: { xs: '100px', sm: '100px', md: '150px' },
                                    height: 'auto', padding: "1%"
                                }}
                            />
                        </Grid>
                        
                        {/* Texto descriptivo */}
                        <Grid item xs={12} sm={6} lg={5}>
                            <Typography 
                                variant="body1" 
                                sx={{ 
                                    color: 'white', 
                                    fontSize: { xs: '1rem', md: '1.25rem' },
                                    textAlign: { xs: 'center', sm: 'left' },
                                    mt: { xs: 2, sm: 0 }
                                }}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget aliquam
                                dignissim velit habitant urna justo gravida.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}
