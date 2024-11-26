import { Component } from "solid-js";
import { Box, Typography, Grid } from "@suid/material";

type BarData = {
  label: string;
  value: number;
  color?: string; // Color opcional para cada barra
};

type BarChartProps = {
  data: BarData[];
  maxBarHeight?: number; // Altura máxima de las barras (en px)
};

export const BarChart: Component<BarChartProps> = ({ data, maxBarHeight = 200 }) => {
  const calculateHeight = (value: number) => {
    const maxValue = Math.max(...data.map((d) => d.value)); // Valor máximo de la data
    return (value / maxValue) * maxBarHeight; // Proporción de altura
  };

  return (
    <Box sx={{ width: "100%", padding: "5px", textAlign: "center" }}>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        Diagrama de Barras
      </Typography>
      <Grid container justifyContent="center" spacing={2}>
        {data.map((item) => (
          <Grid item sx={{ textAlign: "center" }}>
            <Box
              sx={{
                height: `${calculateHeight(item.value)}px`,
                width: "50px",
                backgroundColor: item.color || "rgba(75, 192, 192, 0.8)",
                margin: "0 auto",
                borderRadius: "4px",
                transition: "height 0.3s ease-in-out",
              }}
            />
            <Typography variant="body2" sx={{ marginTop: 1 }}>
              {item.label}
            </Typography>
            <Typography variant="caption">{item.value}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
