import { Grid } from '@suid/material';
import { Card, CardContent } from '@suid/material';

export default function CardTra() {

  const cardsData = [
    {
      text: "Vision"
    },
    {
      text: " Los Cuerpos de Bomberos y Bomberas y Administración de Emergencias de carácter civil, son los órganos competentes para la prevención, preparación y atención de incendios y otras emergencias; así como para la realización de inspecciones técnicas y emisión de informes sobre las condiciones de seguridad en espacios públicos, comerciales o privados de uso público."
    },
    {
      text: "Mision"
    },
    {
      text: " Salvaguardar la vida y los bienes de la ciudadanía frente a situaciones que representen amenaza, vulnerabilidad o riesgo. Actuar como consultores y promotores en materia de gestión de riesgo, asociados a las comunidades. Cooperar con el mantenimiento y restablecimiento del orden público en casos de emergencia. Desarrollar y ejecutar actividades de prevención, protección, combate y extinción de incendios y otros eventos generadores de daños, así como la investigación de sus causas. Atender eventos generadores de daños donde estén involucrados materiales."
    },
  ];

  return (
    <div style={{ "margin-top": '9%', "margin-left": "14.5%",}}>
      <Grid container spacing={10}>

        <Grid item xs={10} sm={10}>
          <Card class="hoverable" sx={{ marginBottom: '5.9%', width: '100%', borderBottom: '10px solid #fbf11f'}}>
            <CardContent>
              <p style={{ "font-size": '125%' }}>{cardsData[2].text}</p>
              <p style={{ "font-size": '125%', "text-align": "justify", padding: "0 5% 0 5%" }}>{cardsData[3].text}</p>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={10} sm={10}>
          <Card class="hoverable" sx={{ marginBottom: '5.9%', width: '100%', borderBottom: '10px solid #db1322'}}>
            <CardContent>
              <p style={{ "font-size": '125%' }}>{cardsData[0].text}</p>
              <p style={{ "font-size": '125%', "text-align": "justify", padding: "0 5% 0 5%"   }}>{cardsData[1].text}</p>
            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </div>
  );
}

//Cajas de Instituciones estas se encuentran en la parte de arriba al inicio del archivo a verificar ya que es del area de instituciones//
//Sera señor que es esto lo que necesita mi vida :'v//