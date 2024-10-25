import { Box, Button, styled, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@suid/material";
import { onMount, createSignal } from "solid-js";
import M from "materialize-css";
import Cancel from '../../assets/cancel.png';
import '../../css/pave.css';

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

  const rows = [
    { 
      rif: "J-12345678-9",
      direccion: "Avenida Principal, Maturín",
      empresa: "Empresa ABC",
      inspeccion: "Inspección General",
      inspector: "John Doe",
      requisitos: "No",
      sancionado: "No",
      vigente: "Sí"
    },
    // Agrega más filas de datos si es necesario
  ];

  return (
    <>
      {/* Contenedor principal para centrar la tarjeta */}
      <div style={{ "justify-content": 'center', "align-items": 'center', "margin-top": "5%" }}>
        <div>
          <Box component="div" class="card" sx={{ width: { xs: "80%", sm: "70%", md: "70%", lg: "50%" }, height: {xs: "49.4vh", sm: "54.4vh", md: "36.7vh", lg: "27vh" } }}>
            <div class="card-content">
              {/* Formulario para ingresar el RIF */}
              <form onSubmit={handleSubmit} style={{ }}>
                <Box sx={{marginTop: {xs: "30%", sm: "25%", md: "8%", lg: "0%"} }}>
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
                    "font-size": "sx: 80%, sm: 90%, md: 100%", // Tamaño de fuente adaptable
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
          <div class="modal-footer" style={{ "margin-top": "-4%", "margin-bottom": "-2%" }}>
            <a href="#!" class="modal-close waves-green btn-flat" onClick={() => setOpen(false)}>
              <img src={Cancel} width="100%" height="100%" alt="" />
            </a>
          </div>

          {/* Card estilo Confluence - Neutral */}
          <section class="card neutral">
            <div class="main-content">
              <div class="card-title status-label">Información del Personal</div>

              {/* Tabla con la información */}
              <TableContainer component={Paper} class="responsive-table">
                <Table>
                  {/* Encabezados de la tabla */}
                  <TableHead>
                    <TableRow>
                      <TableCell class="blue-text text-darken-2">RIF</TableCell>
                      <TableCell class="blue-text text-darken-2">Dirección</TableCell>
                      <TableCell class="blue-text text-darken-2">Nombre de Empresa</TableCell>
                      <TableCell class="blue-text text-darken-2">Nombre de Inspección</TableCell>
                      <TableCell class="blue-text text-darken-2">Nombre del Inspector</TableCell>
                      <TableCell class="blue-text text-darken-2">Requisitos</TableCell>
                      <TableCell class="blue-text text-darken-2">Sancionado</TableCell>
                      <TableCell class="blue-text text-darken-2">Vigente</TableCell>
                    </TableRow>
                  </TableHead>

                  {/* Cuerpo de la tabla */}
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow>
                        <TableCell>J-{rif()}</TableCell>
                        <TableCell>{row.direccion}</TableCell>
                        <TableCell>{row.empresa}</TableCell>
                        <TableCell>{row.inspeccion}</TableCell>
                        <TableCell>{row.inspector}</TableCell>
                        <TableCell>{row.requisitos}</TableCell>
                        <TableCell>{row.sancionado}</TableCell>
                        <TableCell>{row.vigente}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
