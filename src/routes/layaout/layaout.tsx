import Navbar from "../../components/nav/navbar";
import "../../css/fondo.css";
import { Grid, Box, Typography } from "@suid/material";
import CardLayaout from "../../components/card/cardlayaout";
import { BarChartWrapper } from "../../components/estadistica/barras/estadistica1";
import { PieChartWrapper } from "../../components/estadistica/circular/circular1";


function Layout() {

  return (
    <div style={{ display: "flex" }} class="Fondo">
      
      <main
        style={{
          "flex-grow": 1, 
          transition: "margin-left 0.3s ease",
        }}
      >
        <Navbar/>

        <CardLayaout/>

        <Box sx={{ padding: "16px" }}>
          <Typography variant="h4" gutterBottom>
            Dashboard de Estadísticas
          </Typography>
          <Grid container spacing={3}>
            {/* Primera Tarjeta: Gráfico de Barras */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  bgcolor: "background.paper",
                  borderRadius: 2,
                  padding: "16px",
                  textAlign: "center",
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Ventas por Categoría
                </Typography>
                <BarChartWrapper />
              </Box>
            </Grid>

            {/* Segunda Tarjeta: Gráfico Circular */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  bgcolor: "background.paper",
                  borderRadius: 2,
                  padding: "16px",
                  textAlign: "center",
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Distribución de Ingresos
                </Typography>
                <PieChartWrapper />
              </Box>
            </Grid>
          </Grid>
        </Box>

      </main>
    </div>
  );
}

export default Layout;
