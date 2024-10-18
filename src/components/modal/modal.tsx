import { Box, Button, Grid, TextField } from "@suid/material";
import { onMount, createSignal } from "solid-js";
import M from "materialize-css";
import LogoGob1 from '../../assets/logoGobernacion.png';
import Escudo from '../../assets/escuoo.png'
import Cancel from '../../assets/cancel.png'

export default function CustomModal() {
  const [open, setOpen] = createSignal(false);  // Controla la apertura del modal
  const [rif, setRif] = createSignal<string>("");  // Guarda el valor del RIF ingresado

  // Inicialización del modal de Materialize al montar el componente
  onMount(() => {
    const modalElem = document.querySelector(".modal");
    M.Modal.init(modalElem, {});
  });

  // Función para manejar el envío del formulario y abrir el modal si hay RIF
  const handleSubmit = (e: Event) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    if (rif()) {
      setOpen(true); // Abre el modal si hay un RIF ingresado
    }
  };

  return (
    <>
      {/* Contenedor principal para centrar la tarjeta */}
      <div style={{ display: 'flex', "justify-content": 'center', "align-items": 'center', height: '100%' }}>
        {/* Aumenta el ancho de la tarjeta cambiando las clases de columna */}
        <div class="col s12 m8"> {/* Modificado: m8 para pantallas medianas, l6 para pantallas grandes */}
          <Box component="div" class="card" sx={{ width: { xs: "60vh", sm: "70vh", md: "100vh" }}}>
            <div class="card-content">
              {/* Formulario para ingresar el RIF */}
              <form onSubmit={handleSubmit} style={{ position: "relative", "margin-top": "5%" }}>
                <Box>
                  <TextField
                    label="Ingrese el RIF o número"
                    id="standard-number"
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="standard"
                    defaultValue={rif()} // Mostrar el valor actual
                    onInput={(e) => setRif((e.target as HTMLInputElement).value)} // Captura el valor del campo correctamente
                    sx={{ width: "100%" }} // Ancho completo dentro de la tarjeta
                  />
                </Box>

                {/* Botón para abrir el modal */}
                <Button
                  href="#modal1"
                  type="submit"
                  class="waves-effect waves-light btn red darken-2 modal-trigger"
                  sx={{
                    color: "white",
                    left: "50%",
                    transform: "translateX(-50%)", // Para centrar el botón
                    display: "flex",
                    justifyContent: "center", // Centra el texto horizontalmente
                    alignItems: "center", // Centra el texto verticalmente
                    height: "50px", // Altura del botón
                    width: { xs: "180px", sm: "220px", md: "250px" }, // Ancho ajustado para distintos tamaños de pantalla
                    fontSize: { xs: "80%", sm: "90%", md: "100%" }, // Tamaño de fuente adaptable
                    marginTop: "4%",
                  }}
                >
                  Consultar Certificado
                </Button>
              </form>
            </div>
          </Box>
        </div>
      </div>

      {/* Modal que se abre con el botón */}
      <div id="modal1" class="modal" style={{ display: open() ? "block" : "none" }}>
        <div class="modal-content">
          <small>
          <Box>
          <div style={{ display: 'grid', "grid-template-columns": '1fr 2fr 1fr', height: '110px', "margin-top": '5%', position: 'relative' }}>
              {/* Imagen izquierda */}
              <div style={{ "grid-column": 1, "z-index": 2, position: 'relative', transform: 'translateY(-10%)', "text-align": 'center' }}>
                  <Box component="div" sx={{textAlign: "center"}}>                  
                    <img src={LogoGob1} width="100%" height="30%" alt="" />
                  </Box>
              </div>

              {/* Imagen centro */}
              <div style={{ "grid-column": 2, "z-index": 1, position: 'relative', "text-align": 'center' }}>
                  <Box component="div" sx={{textAlign: "center"}}>                  
                    REPÚBLICA BOLIVARIANA DE VENEZUELA<br/>
                    GOBERNACIÓN DEL ESTADO MONAGAS<br/>
                    SECRETARÍA DE SEGURIDAD CIUDADANA<br/>
                    SERVICIO AUTÓNOMO DEL CUERPO DE BOMBEROS DEL ESTADO MONAGAS<br/>
                    ÁREA DE PREVENCIÓN E INVESTIGACIÓN DE INCENDIOS Y OTROS SINIESTROS DIVISIÓN DE PREVENCIÓN<br/><br/>
                  </Box>
              </div>

              {/* Imagen derecha */}
              <div style={{ "grid-column": 3, "z-index": 2, position: 'relative', transform: 'translateY(-10%)', "text-align": 'center', "margin-left": "4%" }}>
                  <Box component="div" sx={{textAlign: "center"}}>                  
                    <img src={Escudo} width="50%" height="50%" alt="" />
                  </Box>
              </div>
            </div>
          
          <Box component="div" sx={{textAlign: "right"}}>Código Nº  APIIOS/DP-MUNICIPIO __________/PV-XXX/2024</Box><br/><br/>

          <Box component="div" sx={{textAlign: "justify"}}> La División de Prevención, adscrito al Área De Prevención E Investigación De Incendios Y Otros Siniestros, del Servicio Autónomo del Cuerpo de Bomberos del Estado Monagas, en respuesta a la solicitud de inspección de fecha: ___/___/2024, y en cumplimiento a lo descrito y exigido en: Articulo Nº 51 de la Constitución de la República Bolivariana de Venezuela, Ley Orgánica del Servicio de Bombero y de los Cuerpos de Bomberos y Bomberas y Administración de Emergencias de Carácter Civil, Decreto 6702 de fecha 28/12/15, Capítulo I, Atribuciones de los Cuerpos de Bomberos y Bomberas, Artículo 13. Lo demarcado en el Decreto Nº 2.195 (Reglamento sobre Prevención de Incendios) de fecha 31/10/83, Ley de Creación y Tasas del Servicio Autónomo del Cuerpo de Bomberos y Administración de Emergencia de Carácter Civil del Estado Monagas, Publicada el 26/03/2024  y FONDONORMAS a consultar, certifica que el inmueble: Cumple con los requisitos de Prevención y Protección contra Incendios, y por consiguiente se otorga el: Certificado de Conformidad de Uso Bomberil a La Denominación Comercial:</Box><br/>

          _______________________________________________________ C.A<br/><br/>


          <Box component="div">Rif: J-{rif()}</Box><br/>

          Dirección:______________________________________________________________________________________________________________<br/><br/>

          Representante Legal: ______________________ de cédula de Identidad  Nº: V-_____________<br/><br/>
       

          <Box component="div" sx={{textAlign: "justify"}}>CERTIFICACIÓN VALIDA POR: 1 AÑO A PARTIR DE LA PRESENTE FECHA.
          NOTA: Este certificado es emitido sin enmiendas y sin tachaduras y quedará anulado de forma AUTOMATICA, de comprobarse el cambio de uso, modificación o cambios del inmueble, al sufrir daños o deterioro de los equipos de prevención y protección contra incendios, debiendo notificar y reparar de manera expedita e inmediata las irregularidades que se presenten.</Box><br/>

          <Box component="div" sx={{textAlign: "center"}}>“DISCIPLINA Y ABNEGACIÓN”</Box><br/>

          <Box>
            <div style={{ display: 'grid', "grid-template-columns": '1fr 1fr 1fr', height: '100px', "margin-top": '5%', position: 'relative' }}>
              {/* Imagen izquierda */}
              <div style={{ "grid-column": 1, "z-index": 2, position: 'relative', transform: 'translateY(-10%)', "text-align": 'center' }}>
                  <Box component="div" sx={{textAlign: "center"}}>                  
                    _____________________________<br/>
                    Inspector Actuante  N° XX
                  </Box>
              </div>

              {/* Imagen centro */}
              <div style={{ "grid-column": 2, "z-index": 1, position: 'relative', "text-align": 'center' }}>
                  <Box component="div" sx={{textAlign: "center"}}>                  
                  _____________________________________<br/>
                  Gral. (B) Jonathan Morales
                  Director del Servicio Autónomo del Cuerpo de 
                  Bomberos del Estado Monagas.
                  Según Gaceta Oficial del Estado Monagas.
                  Decreto Nº  G-00043/2023.

                  </Box>
              </div>

              {/* Imagen derecha */}
              <div style={{ "grid-column": 3, "z-index": 2, position: 'relative', transform: 'translateY(-10%)', "text-align": 'center', "margin-left": "4%" }}>
                  <Box component="div" sx={{textAlign: "center"}}>                  
                    _____________________________<br/>
                    Tte Cnel. (B) Lcda. Kaliana Campos.
                    INSPECTORA N° 036
                    Jefa De División De Prevención E Investigación 
                    de Incendios y Otros Siniestros.
                    ORDEN GENERAL N° 015/2023.

                  </Box>
              </div>
            </div>
          </Box>
          </Box>
          </small>

          
        </div>
        <div class="modal-footer">
        <a href="#!" class="modal-close waves-effect waves-green btn-flat" onClick={() => setOpen(false)}>
          <img src={Cancel} width="100%" height="100%" alt="" />
        </a>
      </div>

      </div>
    </>
  );
}
