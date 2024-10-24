import LogoGob from '../../assets/logoGobernacion.png';
import '../../css/nav.css';
import { Button, Menu, MenuItem } from "@suid/material";
import { createSignal } from "solid-js";

export default function Nav() {
  const [anchorEl, setAnchorEl] = createSignal<null | HTMLElement>(null);
  const open = () => Boolean(anchorEl());
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Estado para manejar el botón seleccionado
  const [selectedButton, setSelectedButton] = createSignal<string>();

  return (
    <>
      <header>
        <div
          class="header-container"
          style={{
            background:
              "linear-gradient(150deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 5%, rgba(235,233,255,1) 5%, rgba(235,233,255,1) 16%, rgba(140,133,210,1) 16%, rgba(140,133,210,1) 30%, rgba(9,0,106,1) 30%, rgba(9,0,106,1) 70%, rgba(140,133,210,1) 70%, rgba(140,133,210,1) 84%, rgba(235,233,255,1) 84%, rgba(235,233,255,1) 95%, rgba(255,255,255,1) 95%, rgba(255,255,255,1) 100%)",
            padding: "0.%",
            display: "flex",
            "justify-content": "space-between",
            "align-items": "center",
          }}
        >
          <img
            src={LogoGob}
            height="120"
            width="320"
            alt="Logo Monagas"
            class="logo"
          />
        </div>
      </header>

      {/* Header con enlaces uno al lado del otro con efecto hover y color negro */}
      <header
        class="page-footer z-depth-2"
        style={{
          background: "#ffff",
          "padding-top": "0.3%",
          "font-size": "125%",
          "font-family": "Franklin Gothic Medium', 'Arial Narrow",
          "margin-bottom": "-1.5%",
        }}
      >
        <div class="container">
          <div class="row">
            <div>
              <ul class="center">
                <li style={{ display: "inline" }}>
                  <Button
                    href="/"
                    sx={{
                      color: selectedButton() === "Inicio" ? "#ffffff" : "#242088",
                      backgroundColor:
                        selectedButton() === "Inicio" ? "#242088" : "transparent",
                      textDecoration: "none",
                      transition: "background-color 0.3s ease",
                    }}
                    onClick={() => setSelectedButton("Inicio")} // Cambia el estado al hacer clic
                  >
                    Inicio
                  </Button>
                </li>

                <li style={{ display: "inline" }}>
                  <Button
                    href="/trayecto"
                    sx={{
                      color:
                        selectedButton() === "Institucion" ? "#ffffff" : "#242088",
                      backgroundColor:
                        selectedButton() === "Institucion"
                          ? "#242088"
                          : "transparent",
                      textDecoration: "none",
                      transition: "background-color 0.3s ease",
                    }}
                    onClick={() => setSelectedButton("Institucion")}
                  >
                    Institucion
                  </Button>
                </li>

                <li style={{ display: "inline" }}>
                  <Button
                    id="basic-button"
                    aria-controls={open() ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open() ? "true" : undefined}
                    onClick={(event) => {
                      setAnchorEl(event.currentTarget);
                      setSelectedButton("Certificado");
                    }}
                    sx={{
                      color:
                        selectedButton() === "Certificado" ? "#ffffff" : "#242088",
                      backgroundColor:
                        selectedButton() === "Certificado"
                          ? "#242088"
                          : "transparent",
                      textDecoration: "none",
                      transition: "background-color 0.3s ease",
                    }}
                  >
                    CERTIFICADO
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl()}
                    open={open()}
                    onClose={handleClose}
                    MenuListProps={{ "aria-labelledby": "basic-button" }}
                  >
                    <MenuItem onClick={handleClose}>
                      <Button
                        href="#"
                        sx={{
                          color: "black",
                          textDecoration: "none",
                          transition: "background-color 0.3s ease",
                        }}
                      >
                        Requisitos
                      </Button>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Button
                        href="/certificado"
                        sx={{
                          color: "black",
                          textDecoration: "none",
                          transition: "background-color 0.3s ease",
                        }}
                      >
                        Consulta
                      </Button>
                    </MenuItem>
                  </Menu>
                </li>

                <li style={{ display: "inline" }}>
                  <Button
                    href="/mascotas"
                    sx={{
                      color:
                        selectedButton() === "Mascotas" ? "#ffffff" : "#242088",
                      backgroundColor:
                        selectedButton() === "Mascotas" ? "#242088" : "transparent",
                      textDecoration: "none",
                    }}
                    onClick={() => setSelectedButton("Mascotas")}
                  >
                    Mascotas
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
