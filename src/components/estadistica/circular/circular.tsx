import { Component, For } from "solid-js";
import { Box, Typography } from "@suid/material";

type PieChartData = {
  label: string;
  value: number;
  color: string;
};

type PieChartProps = {
  data: PieChartData[];
  size?: number; // Tamaño del contenedor de la gráfica
};

export const PieChart: Component<PieChartProps> = ({ data, size = 200 }) => {
  // Calcular el total de los valores
  const total = data.reduce((acc, item) => acc + item.value, 0);

  // Generar los segmentos del gráfico
  let cumulativePercent = 0;

  const calculatePath = (value: number) => {
    const startPercent = cumulativePercent;
    const endPercent = cumulativePercent + value / total;
    cumulativePercent = endPercent;

    const startAngle = 2 * Math.PI * startPercent;
    const endAngle = 2 * Math.PI * endPercent;

    const largeArcFlag = endPercent - startPercent > 0.5 ? 1 : 0;

    const startX = Math.cos(startAngle) * size / 2 + size / 2;
    const startY = Math.sin(startAngle) * size / 2 + size / 2;

    const endX = Math.cos(endAngle) * size / 2 + size / 2;
    const endY = Math.sin(endAngle) * size / 2 + size / 2;

    return `
      M ${size / 2} ${size / 2}
      L ${startX} ${startY}
      A ${size / 2} ${size / 2} 0 ${largeArcFlag} 1 ${endX} ${endY}
      Z
    `;
  };

  return (
    <Box sx={{ textAlign: "center", maxWidth: `${size}px`, margin: "auto" }}>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        Gráfica Circular
      </Typography>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <For each={data}>
          {(item) => (
            <path
              d={calculatePath(item.value)}
              fill={item.color}
              stroke="#fff"
              stroke-width="1"
            />
          )}
        </For>
      </svg>
      <Box sx={{ marginTop: 2 }}>
        <For each={data}>
          {(item) => (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "8px",
              }}
            >
              <Box
                sx={{
                  width: "16px",
                  height: "16px",
                  backgroundColor: item.color,
                  marginRight: "8px",
                  borderRadius: "50%",
                }}
              />
              <Typography variant="body2">
                {item.label}: {item.value}
              </Typography>
            </Box>
          )}
        </For>
      </Box>
    </Box>
  );
};
