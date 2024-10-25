import LogoGob from '../../assets/logoGobernacion.png';
import DGNB from '../../assets/DGNB.png';
import Cuadrante from '../../assets/CuadrantesPaz.png';
import Bomberos from '../../assets/Bomberos.png';
import Escudo from '../../assets/EscudoBomber.png';
import JusticiaPaz from '../../assets/JusticiaPaz.png';
import Seguridad from '../../assets/SeguridadCiu.png';
import { Button, Menu, MenuItem } from "@suid/material";
import { createSignal } from "solid-js";

export default function Nav() {
  const [anchorEl, setAnchorEl] = createSignal<null | HTMLElement>(null);
  const open = () => Boolean(anchorEl());
  const handleClose = () => {
    setAnchorEl(null);
  };

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
            "justify-content": "space-evenly",
            "align-items": "center",
            "flex-wrap": "wrap",
          }}
        >
          {/* Aplicar clase responsive-img de Materialize */}
          <img
            src={LogoGob}
            alt="Logo Monagas"
            class="responsive-img"
            style={{ "max-width": "13%", height: "auto" }}
          />
          <img
            src={DGNB}
            alt="Logo DGNB"
            class="responsive-img"
            style={{ "max-width": "5%", height: "auto" }}
          />
          <img
            src={Bomberos}
            alt="Logo Bomberos"
            class="responsive-img"
            style={{ "max-width": "7%", height: "auto" }}
          />
          <img
            src={Cuadrante}
            alt="Cuadrante de Paz"
            class="responsive-img"
            style={{ "max-width": "12%", height: "auto" }}
          />
          <img
            src={Seguridad}
            alt="Seguridad Ciudadana"
            class="responsive-img"
            style={{ "max-width": "7%", height: "auto" }}
          />
          <img
            src={JusticiaPaz}
            alt="Justicia y Paz"
            class="responsive-img"
            style={{ "max-width": "7%", height: "auto" }}
          />
          <img
            src={Escudo}
            alt="Escudo Bomberos"
            class="responsive-img"
            style={{ "max-width": "7%", height: "auto" }}
          />
        </div>
      </header>

      {/* Header con enlaces */}
        <header
          class="page-footer"
          style={{
            background: "#ffff",
            "font-size": "0%",
            "padding-top": "1%",
            "padding-bottom": "0.1%",
            "font-family": "Franklin Gothic Medium', 'Arial Narrow",
            "margin": "0%", // Ajuste de margen inferior a 0
            "justify-content": "space-evenly",
            "align-items": "center",
          }}
        >

          <div class="row">
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
                    onClick={() => setSelectedButton("Inicio")} 
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
      </header>
    </>
  );
}
