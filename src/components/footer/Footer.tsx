import LogBom from '../../assets/EscudoBomber.png';
import { Container, Grid, Box, Typography } from '@suid/material';
import Tiktok from '../../assets/tiktok.png'
import Instam from '../../assets/Instagram.png'
import Face from '../../assets/facebook.png'


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
                        <Grid item xs={7} sm={6} lg={5}>
                            <Typography 
                                variant="body1" 
                                sx={{ 
                                    color: 'white', 
                                    fontSize: { xs: '1rem', md: '1.25rem' },
                                    textAlign: { xs: 'center', sm: 'left' },
                                    mt: { xs: 2, sm: 0 }
                                }}
                            >
                                 <span style={{ display: 'flex', "align-items": 'center', "margin-bottom": "2%"}}>
                                    <i style={{"margin-right": '4px'}} class="small material-icons">mail</i>
                                    <p style={{ margin: 0 }}>Servicioautonomobomberil@gmail.com</p>
                                 </span>


                                    <Box component="div" class="divider" sx={{margin: {xs: "5% 5% 5% 5%", lg: "3% 14% 3% 0%"}}}></Box>
                                 
                                    <span style={{ display: 'flex', "align-items": 'center', "margin-top": "2%", "margin-left": "20%", "align-content": "space-between" }}>
                                        
                                        <a style={{ color: 'inherit', "text-decoration": 'none'}} href='https://www.facebook.com/p/Bomberos-de-Monagas-100064677670814/?locale=es_LA'><img src={Face} style={{}} alt="" height="30" width="30" /></a>
                                            

                                        
                                        <a style={{ color: 'inherit', "text-decoration": 'none',"margin-left": '18%' }} href='https://www.instagram.com/bomberosmon2024/'><img src={Instam} alt="" height="30" width="30" /></a>

                                        
                                        <a style={{ color: 'inherit', "text-decoration": 'none', "margin-left": '15%' }} href='https://www.tiktok.com/@bomberos.monagas'><img src={Tiktok} alt="" height="33" width="33" /></a>
                                    </span>
                                      
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}
