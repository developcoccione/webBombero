import Box from "@suid/system/Box";
import { Grid } from "@suid/material";
import ThemeProvider from "@suid/system/ThemeProvider";
import createTheme from "@suid/system/createTheme";

const theme = createTheme({
  palette: {
    background: {
      paper: "#fff",
    },
    text: {
      primary: "#173A5E",
      secondary: "#46505A",
    },
    action: {
      active: "#001E3C",
    },
    success: {
      dark: "#009688",
    },
  },
});

const CardLayout = () => {
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        spacing={3} // Espaciado entre elementos
        alignItems="stretch" // Asegura que todas las tarjetas tengan la misma altura
        justifyContent="center" // Centra las tarjetas horizontalmente
        sx={{ padding: 2 }} // Añade un poco de espacio alrededor del contenedor
      >
        {/* Tarjeta 1 */}
        <Grid item xs={12} sm={6} md={3}> {/* Responsivo: ocupa diferente espacio según el tamaño */}
          <Box
            sx={{
              bgcolor: "background.paper",
              borderRadius: 2,
              p: 3,
            }}
          >
            <Box sx={{ color: "text.secondary", mb: 1 }}>Noticias</Box>
            <Box sx={{ color: "text.primary", fontSize: 34, fontWeight: "medium" }}>
              {30}
            </Box>
            <Box sx={{ color: "text.secondary", display: "inline", fontSize: 14 }}>
              ayer
            </Box>
          </Box>
        </Grid>

        {/* Tarjeta 2 */}
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              bgcolor: "background.paper",
              borderRadius: 2,
              p: 3,
            }}
          >
            <Box sx={{ color: "text.secondary", mb: 1 }}>Certificados</Box>
            <Box sx={{ color: "text.primary", fontSize: 34, fontWeight: "medium" }}>
              {100}
            </Box>
            <Box sx={{ color: "text.secondary", display: "inline", fontSize: 14 }}>
              11/09/24
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              bgcolor: "background.paper",
              borderRadius: 2,
              p: 3,
            }}
          >
            <Box sx={{ color: "text.secondary", mb: 1 }}>Mision</Box>
            <Box sx={{ color: "text.primary", fontSize: 34, fontWeight: "medium" }}>
              {1}
            </Box>
            <Box sx={{ color: "text.secondary", display: "inline", fontSize: 14 }}>
              20/04/2020
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              bgcolor: "background.paper",
              borderRadius: 2,
              p: 3,
            }}
          >
            <Box sx={{ color: "text.secondary", mb: 1 }}>Usuarios</Box>
            <Box sx={{ color: "text.primary", fontSize: 34, fontWeight: "medium" }}>
              {2}
            </Box>
            <Box sx={{ color: "text.secondary", display: "inline", fontSize: 14 }}>
              inicial
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default CardLayout;
