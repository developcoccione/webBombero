import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Stack,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@suid/material";
import MenuIcon from "@suid/icons-material/Menu";
import SupervisorAccountIcon from "@suid/icons-material/SupervisorAccount";
import NotificationsIcon from "@suid/icons-material/Notifications";
import { createMutable } from "solid-js/store";
import { createSignal } from "solid-js";
import Perfil from "../../assets/perfil.jpg";
import ExpandLess from "@suid/icons-material/ExpandLess";
import ExpandMore from "@suid/icons-material/ExpandMore";
import HouseIcon from '@suid/icons-material/House';
import SettingsIcon from '@suid/icons-material/Settings';
import NewspaperIcon from '@suid/icons-material/Newspaper';
import FlagIcon from '@suid/icons-material/Flag';
import HistoryEduIcon from '@suid/icons-material/HistoryEdu';
import PersonIcon from '@suid/icons-material/Person';
import LogoutIcon from '@suid/icons-material/Logout';

type Anchor = "top" | "left" | "bottom" | "right";

function Navbar() {
  const state = createMutable<{ [K in Anchor]: boolean }>({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [open, setOpen] = createSignal(false);

  const handleClick = (event: MouseEvent) => {
    event.stopPropagation(); // Evita que el clic se propague al drawer
    setOpen(!open());
  };

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: MouseEvent | KeyboardEvent) => {
      if (event.type === "keydown") {
        const keyboardEvent = event as KeyboardEvent;
        if (keyboardEvent.key === "Tab" || keyboardEvent.key === "Shift") return;
      }
      state[anchor] = open;
    };


  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "left" ? 250 : "auto" }}
      role="presentation"
      onClick={(event) => {
        if (
          event.target instanceof HTMLElement &&
          event.target.closest("#config-menu")
        ) {
          return;
        }
        toggleDrawer(anchor, false)(event);
      }}
    >
      <List>
        <ListItem disablePadding>
          <a href="/Layaout" style={{ width: "100%" }}>
            <ListItemButton>
              <ListItemIcon>
                <HouseIcon/>
              </ListItemIcon>
              <ListItemText primary="Inicio" sx={{ color: "black" }} />
            </ListItemButton>
          </a>
        </ListItem>

        <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <SettingsIcon/>
        </ListItemIcon>
        <ListItemText primary="Configuracion" sx={{ color: "black" }} />
        {open() ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      {/* Implementación de la animación con CSS para el contenido colapsable */}
      <div
        style={{
          "max-height": open() ? "1000px" : "0",
          overflow: "hidden",
          transition: "max-height 0.1s ease-out",
        }}
      >
        <List component="div" disablePadding>
          <a href="/gestionnoti" style={{ width: "100%" }}>
            <ListItemButton sx={{ pl: 3 }}>
              <ListItemIcon>
                <NewspaperIcon/>
              </ListItemIcon>
              <ListItemText primary="Gestion de Noticias" sx={{ color: "black" }} />
            </ListItemButton>
          </a>


          <a href="/mision" style={{ width: "100%" }}>
            <ListItemButton sx={{ pl: 3 }}>
              <ListItemIcon>
                  <FlagIcon/>
                </ListItemIcon>
              <ListItemText primary="Actualizacion de Mision" sx={{ color: "black" }}/>
            </ListItemButton>
          </a>

          <a href="/gestioncertificado" style={{ width: "100%" }}>
            <ListItemButton sx={{ pl: 3 }}>
              <ListItemIcon>
                <HistoryEduIcon/>
              </ListItemIcon>
              <ListItemText primary="Gestion de Certificado" sx={{ color: "black" }}/>
            </ListItemButton>
          </a>

        </List>
      </div>


        <ListItem disablePadding>
          <a href="/noticias" style={{ width: "100%" }}>
            <ListItemButton>
              <ListItemIcon>
                <PersonIcon/>
              </ListItemIcon>
              <ListItemText primary="Usuario" sx={{ color: "black" }} />
            </ListItemButton>
          </a>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="relative" color="inherit" sx={{ width: "100%" }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <Button onClick={toggleDrawer("left", true)} color="inherit">
            <MenuIcon />
          </Button>
          <Drawer
            anchor="left"
            open={state.left}
            sx={{ zIndex: 9999 }}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <ListItemText primary="GESTION DE DATOS" sx={{ color: "black" }} />
        </Typography>
        <a href="/">
          <IconButton>
            <LogoutIcon/>
          </IconButton>
        </a>
        <IconButton color="inherit">
          <SupervisorAccountIcon />
        </IconButton>
        <IconButton color="inherit">
          <NotificationsIcon />
        </IconButton>
        <Stack direction="row" spacing={2}>
          <Avatar alt="Manuel" src={Perfil} />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
