import { Grid, Card, CardContent } from '@suid/material'; // Componentes de SUID

export default function Requisito2() {
  return (
    <>
      <div style={{ margin: "5% 5% 5% 5%" }}>
        <Grid container justifyContent="center" spacing={1}>
          <Grid item xs={12} sm={10} lg={11}>
            {/* Tarjeta grande con imagen a la izquierda y texto a la derecha con animación */}
            <Card
              class="hoverable"
              style={{
                height: '100%',
                width: "100%",
                display: 'flex',
                padding: "5%",
                opacity: 0,
                transform: 'translateY(20px)',
                animation: 'fadeIn 1s forwards',
                "border-bottom": '10px solid #db1322',
                "border-left": '10px solid #db1322'
              }}
            >
              {/* Definición de animación en línea */}
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
              <Grid container>
                {/* Columna para el texto */}
                <Grid item xs={12} sm={12} lg={12} sx={{ fontSize: '116%' }}>
                  <CardContent sx={{ textAlign: 'justify' }}>
                    <h4 style={{ "margin-top": 0 }}>REQUISITOS A CONSIGNAR PARA LA CONFORMIDAD DE USO DE BOMBEROS:</h4>
                    <ul style={{ "padding-left": "20px", "margin-top": "10px" }}>
                      <li>❗ Copia del Registro Mercantil</li>
                      <li>❗ Copia del RIF Comercial</li>
                      <li>❗ Copia de la Cédula del Representante Legal</li>
                      <li>❗ Copia de la Factura de la Recarga del Extintor</li>
                      <li>❗ Plano de Uso Bomberil</li>
                      <li>❗ Timbre Fiscal Estadal</li>
                    </ul>
                    <p style={{ "margin-top": "10px", "font-weight": "bold" }}>
                      NOTA: La documentación se debe consignar en carpeta marrón correctamente identificada con Nombre y RIF de la empresa y número de contacto.
                    </p>
                    <p style={{ "margin-top": "5px", "font-style": "italic" }}>
                      <b>Correo de contacto:</b> servicioautonomobomberil@gmail.com
                    </p>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
