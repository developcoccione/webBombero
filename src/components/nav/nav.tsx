import LogoGob from '../../assets/logoGobernacion.png';
import '../../css/nav.css'
import { Button, Menu, MenuItem } from "@suid/material";
import { createSignal } from "solid-js";



export default function Nav () {

    const [anchorEl, setAnchorEl] = createSignal<null | HTMLElement>(null);
    const open = () => Boolean(anchorEl());
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
    <>
        <header>
      <div
          class="header-container"
          style={{

            background: 'linear-gradient(150deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 5%, rgba(235,233,255,1) 5%, rgba(235,233,255,1) 16%, rgba(140,133,210,1) 16%, rgba(140,133,210,1) 30%, rgba(9,0,106,1) 30%, rgba(9,0,106,1) 70%, rgba(140,133,210,1) 70%, rgba(140,133,210,1) 84%, rgba(235,233,255,1) 84%, rgba(235,233,255,1) 95%, rgba(255,255,255,1) 95%, rgba(255,255,255,1) 100%)', // Color oscuro en el centro a blanco en los extremos
            padding: '0.%',
            display: 'flex',
            "justify-content": 'space-between',
            "align-items": 'center',
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
      <header class="page-footer z-depth-2" style={{ background: '#ffff', "margin-bottom": '3%', "padding-top": '0.3%' }}>
        <div class="container">
          <div class="row">
            {/* Enlaces colocados uno al lado del otro */}
            <div class="col s6" style={{"margin-left": "3%"}}>
              <ul class="right">
                <li style={{ display: 'inline', "margin-right": '25%' }}>
                  <a href="/"style={{ color: 'black', "text-decoration": 'none', transition: 'background-color 0.3s ease', padding: "5%" }}>Inicio</a>   
                </li>

                <li style={{ display: 'inline', "margin-right": '20%' }}>
                  <a href="/trayecto" style={{ color: 'black', "text-decoration": 'none', transition: 'background-color 0.3s ease', padding: "5%" }}>Institucion</a>
                </li>

              






                <li style={{ display: 'inline' }}>
                  <a href="/certificado" style={{ color: 'black', "text-decoration": 'none', transition: 'background-color 0.3s ease', padding: "5%" }}>Certificado</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>



    </>
    )
}


