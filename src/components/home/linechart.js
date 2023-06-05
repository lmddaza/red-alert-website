import React from "react";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js/auto";

Chart.register(Chart.registry.getScale("linear"));

const LineChart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "pH",
        data: [7.2, 7.5, 7.1, 7.3, 7.0, 7.2],
        borderColor: "rgb(75, 192, 192)",
        fill: false,
      },
      {
        label: "Temperature",
        data: [20, 22, 21, 23, 24, 22],
        borderColor: "rgb(255, 99, 132)",
        fill: false,
      },
      {
        label: "Conductivity",
        data: [100, 120, 110, 105, 115, 108],
        borderColor: "rgb(54, 162, 235)",
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Value",
        },
      },
    },
  };

  return (
    <div className="line-chart-container">
      <h1>Stationary Readings Summary </h1>
      <br></br>
      <Line data={data} options={options} className="line-chart" />
    </div>
  );
};

export default LineChart;
