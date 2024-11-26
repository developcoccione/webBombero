import { Component } from "solid-js";
import { Box } from "@suid/material";
import { PieChart } from "./circular";

export const PieChartWrapper: Component = () => {
  const pieData = [
    { label: "Enero", value: 30, color: "#4caf50" },
    { label: "Febrero", value: 20, color: "#2196f3" },
    { label: "Marzo", value: 50, color: "#ff5722" },
    { label: "Otros", value: 25, color: "#4055f2" },
  ];

  return (
    <Box sx={{ margin: "16px auto", maxWidth: "400px" }}>
      <PieChart data={pieData} size={300} />
    </Box>
  );
};
