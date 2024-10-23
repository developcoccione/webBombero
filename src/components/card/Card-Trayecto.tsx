import { Grid } from '@suid/material';
import { Card, CardContent, CardMedia } from '@suid/material';

export default function CardTra() {

  const cardsData = [
    {
      text: "Mision"
    },
    {
      text: " Artículo 12. El Servicio Autónomo del Cuerpo de Bomberos y Bomberas del estado Monagas es un órgano de prevención y seguridad ciudadana, conforme a lo establecido en la Constitución de la República Bolivariana de Venezuela y por su finalidad y atribuciones establecidas en Ley Orgánica del Servicio de Bombero y de los Cuerpos de Bomberos y Bomberas y en la presente Ley; es una institución uniformada y jerarquizada, sin militancia política, cuya misión es la de intervenir oportunamente como primera respuesta en la atención de las emergencias, para salvaguardar la vida y bienes en todo el territorio del estado Monagas y actuará de manera coordinada con otros entes u órganos competentes en la atención de desastres, producto de amenazas, eventos o calamidades naturales, socio naturales, antrópicos o de otro origen, así como también, con otros entes competentes en la atención de accidentes aéreos y marítimos u otras emergencias que ocurran en el ámbito territorial de su competencia. El Servicio Autónomo del Cuerpo de Bomberos y Bomberas del estado Monagas, interactúa en armonía con los diversos actores locales, en conjunción con la participación activa de las comunidades, organizaciones civiles, y organizaciones de base del Poder Popular, para el logro del bien común en materia de prevención y seguridad ciudadana"
    },
  ];

  return (
    <div style={{ "margin-top": '9%', "margin-left": "14.5%",}}>
      <Grid container spacing={10}>

        <Grid item xs={10} sm={10}>
          <Card class="hoverable" sx={{ marginBottom: '5.9%', width: '100%', borderBottom: '10px solid #fbf11f'}}>
            <CardContent>
              <p style={{ "font-size": '125%' }}>{cardsData[0].text}</p>
              <p style={{ "font-size": '125%' }}>{cardsData[1].text}</p>
            </CardContent>
          </Card>
        </Grid>
      
      </Grid>
    </div>
  );
}

//Cajas de Instituciones estas se encuentran en la parte de arriba al inicio del archivo a verificar ya que es del area de instituciones//
//Sera señor que es esto lo que necesita mi vida :'v//