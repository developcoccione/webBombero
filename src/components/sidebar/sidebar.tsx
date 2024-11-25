import { List, ListItem, ListItemText, ListItemIcon } from "@suid/material";
import DashboardIcon from "@suid/icons-material/Dashboard";
import SettingsIcon from "@suid/icons-material/Settings";

function Sidebar({ isVisible }: { isVisible: boolean }) {
  return (
    <div
      style={{
        width: "240px",
        "background-color": "#f4f4f4",
        height: "100vh",
        transition: "transform 0.3s ease",
        transform: isVisible ? "translateX(0)" : "translateX(-100%)",
        position: "fixed", // Aseguramos que quede fijo al lado izquierdo
        top: 0,
        left: 0,
        "z-index": 100, // Evita que quede detrás del contenido
      }}
    >
      <List>
        <ListItem component="button" sx={{marginBottom: "1vh"}}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem component="button" sx={{marginBottom: "1vh"}}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem component="button" sx={{marginBottom: "1vh"}}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem component="button" sx={{marginBottom: "1vh"}}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem component="button" sx={{marginBottom: "1vh"}}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem component="button" sx={{marginBottom: "1vh"}}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </div>
  );
}

export default Sidebar;
