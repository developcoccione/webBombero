import { Button } from "@suid/material";
import { onMount } from "solid-js";
import { createSignal } from "solid-js";
import M from "materialize-css";

export default function CustomModal() {
  const [open, setOpen] = createSignal(false);

  // Inicialización del modal de Materialize al montar el componente
  onMount(() => {
    const modalElem = document.querySelector(".modal");
    M.Modal.init(modalElem, {});
  });

  return (
    <>
      {/* Contenedor con posición relativa para controlar el botón */}
      <div style={{ position: "relative","margin-top": "11%", "margin-bottom": "10%" }}>
        {/* Botón flotante alineado a la derecha e inferior */}
        <a
          class="waves-effect waves-light btn light-blue darken-4 modal-trigger"
          href="#modal1"
          style={{
            position: "absolute",
            bottom: "20px",
            right: "20px",
      
          }}
        >
          Consultar Certificado
        </a>
      </div>

      {/* Estructura del Modal con diseño de Materialize */}
      <div id="modal1" class="modal" style={{ display: open() ? "block" : "none" }}>
        <div class="modal-content">
          <h4>Modal Header</h4>
          <p>A bunch of text</p>
        </div>
        <div class="modal-footer">
          {/* Botón para cerrar el modal */}
          <a href="#!" class="modal-close waves-effect waves-green btn-flat" onClick={() => setOpen(false)}>
            Cerrar
          </a>
        </div>
      </div>
    </>
  );
}
