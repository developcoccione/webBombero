import { Component, JSX } from "solid-js";
import { Box, Grid, Typography } from "@suid/material";

type BarChartData = {
  label: string;
  value: number;
};

type BarChartProps = {
  data: BarChartData[];
  title?: string;
};

const BarChart: Component<BarChartProps> = ({ data, title }) => {
  const barContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "0 10px",
  };

  const barStyle = (value: number) => ({
    height: `${value * 10}px`, // Escala del valor
    width: "30px",
    backgroundColor: "rgba(75, 192, 192, 0.8)",
    borderRadius: "5px",
    transition: "height 0.3s ease",
  });

  return (
    <Box sx={{ width: "80%", margin: "0 auto", textAlign: "center" }}>
      {title && (
        <Typography variant="h4" sx={{ marginBottom: 3 }}>
          {title}
        </Typography>
      )}
      <Grid container justifyContent="center" spacing={2}>
        {data.map((item) => (
          <Grid>
            <div style={barContainerStyle}>
              <div style={barStyle(item.value)}></div>
              <Typography variant="caption" sx={{ marginTop: 1 }}>
                {item.label}
              </Typography>
              <Typography variant="body2">{item.value}</Typography>
            </div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BarChart;

// Ejemplo de uso en otro componente
const App: Component = () => {
  const sampleData = [
    { label: "January", value: 12 },
    { label: "February", value: 19 },
    { label: "March", value: 3 },
    { label: "April", value: 5 },
    { label: "May", value: 20 },
    { label: "June", value: 30 },
  ];

  return <BarChart data={sampleData} title="Monthly Sales Data" />;
};
