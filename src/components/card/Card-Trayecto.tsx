import { Grid } from '@suid/material';
import { Card, CardContent } from '@suid/material';

export default function CardTra() {
  const cardsData = [
    {
      text: "Vision"
    },
    {
      text: "Los Cuerpos de Bomberos y Bomberas y Administración de Emergencias de carácter civil, son los órganos competentes para la prevención, preparación y atención de incendios y otras emergencias; así como para la realización de inspecciones técnicas y emisión de informes sobre las condiciones de seguridad en espacios públicos, comerciales o privados de uso público."
    },
    {
      text: "Mision"
    },
    {
      text: "Salvaguardar la vida y los bienes de la ciudadanía frente a situaciones que representen amenaza, vulnerabilidad o riesgo. Actuar como consultores y promotores en materia de gestión de riesgo, asociados a las comunidades. Cooperar con el mantenimiento y restablecimiento del orden público en casos de emergencia. Desarrollar y ejecutar actividades de prevención, protección, combate y extinción de incendios y otros eventos generadores de daños, así como la investigación de sus causas. Atender eventos generadores de daños donde estén involucrados materiales."
    },
  ];

  return (
    <div style={{ margin: "9% 10% 10% 10%", "font-size": '135%', "font-family": "Segoe UI" }}>
      <style>
        {`
          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
      <Grid container spacing={10}>
        <Grid item xs={12} sm={12} lg={12}>
          <Card
            class="hoverable"
            sx={{
              borderBottom: '10px solid #fbf11f',
              animation: 'fadeIn 1s forwards',
              opacity: 0,
              transform: 'translateY(20px)'
            }}
          >
            <CardContent>
              <p><b>{cardsData[2].text}</b></p>
              <p style={{ "text-align": "justify", padding: "0 5% 0 5%" }}>{cardsData[3].text}</p>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} lg={12}>
          <Card
            class="hoverable"
            sx={{
              borderBottom: '10px solid #db1322',
              animation: 'fadeIn 1s forwards',
              opacity: 0,
              transform: 'translateY(20px)'
            }}
          >
            <CardContent>
              <p><b>{cardsData[0].text}</b></p>
              <p style={{ "text-align": "justify", padding: "0 5% 0 5%", "font-family": "Segoe UI" }}>{cardsData[1].text}</p>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
