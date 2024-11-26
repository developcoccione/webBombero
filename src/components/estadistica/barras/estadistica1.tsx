import { Component } from "solid-js";
import { Box } from "@suid/material";
import { BarChart } from "./estadistica";

export const BarChartWrapper: Component = () => {
  const sampleData = [
    { label: "Enero", value: 50, color: "#4caf50" },
    { label: "Febrero", value: 80, color: "#2196f3" },
    { label: "Marzo", value: 65, color: "#ff5722" },
    { label: "Abril", value: 100, color: "#9c27b0" },
    { label: "Mayo", value: 75, color: "#ffc107" },
  ];

  return (
    <Box sx={{ margin: "16px auto", maxWidth: "800px" }}>
      <BarChart data={sampleData} maxBarHeight={300} />
    </Box>
  );
};
