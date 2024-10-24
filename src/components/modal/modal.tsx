import { Box, Button, styled, TextField } from "@suid/material";
import { onMount, createSignal } from "solid-js";
import M from "materialize-css";
import Cancel from '../../assets/cancel.png';
import '../../css/pave.css'

export default function CustomModal() {
  const [open, setOpen] = createSignal(false); // Controla la apertura del modal
  const [rif, setRif] = createSignal<string>(""); // Guarda el valor del RIF ingresado

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
      <div style={{ display: 'flex', "justify-content": 'center', "align-items": 'center', height: '100%', "margin-top": "5%  " }}>
        <div class="col s12 m8">
          <Box component="div" class="card" sx={{ width: { xs: "60vh", sm: "70vh", md: "100vh" } }}>
            <div class="card-content">
              {/* Formulario para ingresar el RIF */}
              <form onSubmit={handleSubmit} style={{"margin-top": "5%" }}>
                <Box>
                <div class="input-field col s6">
                  <input 
                  id="standard-number" 
                  type="number" 
                  class="validate"
                  value={rif()}
                  onInput={(e) => setRif((e.target as HTMLInputElement).value)} // Captura el valor del campo correctamente
                  />
                  <label for="last_name">Ingrese el RIF o número</label>
                </div>
                </Box>

                {/* Botón para abrir el modal */}
                <button
                  href="#modal1"
                  type="submit"
                  class="waves-effect waves-light btn red darken-2 modal-trigger"
                  style={{
                    color: "white",
                    left: "50%",
                    transform: "translateX(-50%)", // Para centrar el botón
                    display: "flex",
                    "justify-content": "center", // Centra el texto horizontalmente
                    "align-items": "center", // Centra el texto verticalmente
                    height: "50px",
                    "font-size" : " sx: 80%, sm: 90%, md: 100%" , // Tamaño de fuente adaptable
                    "margin-top": "4%",
                  }}
                >
                  Consultar Certificado
                </button>
              </form>
            </div>
          </Box>
        </div>
      </div>

      {/* Modal que se abre con el botón */}
      <div id="modal1" class="modal" style={{ display: open() ? "block" : "none", "border-bottom": '1px solid #fbf11f' }}>
        <div class="modal-content">
        
          <div class="modal-footer" style={{"margin-top": "-4%", "margin-bottom": "-2%"}}>
            <a href="#!" class="modal-close waves-green btn-flat" onClick={() => setOpen(false)}>
              <img src={Cancel} width="100%" height="100%" alt="" />
            </a>
          </div>

          {/* Card estilo Confluence - Neutral */}
          <section class="card neutral">
            <div class="main-content">
              <div class="card-title status-label">Información del Personal</div>

              <dl class="info-listing clearfix">
                <dt class="ion-ios-toggle">RIF</dt>
                <dd>J-{rif()}</dd>

                <dt class="ion-ios-pricetag">Dirección</dt>
                <dd>Avenida Principal, Maturín</dd>

                <dt class="ion-ios-pricetag">Nombre de Empresa</dt>
                <dd>Empresa ABC</dd>

                <dt class="ion-ios-pricetag">Nombre de Inspección</dt>
                <dd>Inspección General</dd>

                <dt class="ion-ios-pricetag">Nombre de Inspector</dt>
                <dd>John Doe</dd>

                <dt class="ion-ios-pricetag">Requisitos</dt>
                <dd>En progreso</dd>

                <dt class="ion-ios-pricetag">¿Ha sido sancionado?</dt>
                <dd>No</dd>

                <dt class="ion-ios-pricetag">¿Está vigente?</dt>
                <dd>Sí</dd>
              </dl>
            </div>
          </section>
        </div>

  
</div>

    </>
  );
}
