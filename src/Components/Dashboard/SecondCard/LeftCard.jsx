import React from "react";
import { Bar } from "react-chartjs-2";
import "./Main.scss";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function LeftCard() {
  const data = {
    labels: ["1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM"],
    datasets: [
      {
        label: "369",
        data: [3, 6, 9, 7, 11, 15, 18],
        backgroundColor: "#F9F9F9",
        tension: 0.5,
      },
    ],
  };
  const options = {
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        grid: {
          color: "#F9F9F9",
        },
      },
      y: {
        grid: {
          display: false,
        },
        min: 0,
        max: 20,
        ticks: {
          stepSize: 8,
          callback: (value) => "",
        },
      },
    },
  };
  return (
    <div className="cart">
      <p>
        <span>Miles</span> Statistics
      </p>
      <div className="inside-cart">
        <div className="date">
          <span>Day</span>
          <span>Week</span>
          <span>Month</span>
        </div>
        <span>256 Miles</span>
      </div>
      <div
        style={{
          width: "500px",
          height: "250px",
          backgroundColor: "#ffffff",
          marginTop: "20px",
        }}
      >
        <Bar data={data} options={options}></Bar>
      </div>
    </div>
  );
}

export default LeftCard;
