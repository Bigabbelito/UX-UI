import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);
import "./LancChart.css";
import { getConfig } from "../../data/config/LangData";

const pieConfig = getConfig();

const LangChart = ({ onClose }) => {
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Language",
        font: {
          size: 25
        },
        color: "white",
        position: "top"
      }
    },
    layout: {
      padding: 10
    },
    legend: {
      display: true,
      position: "bottom",
      labels: {
        font: {
          size: 18
        },
        color: "white"
      }
    },
    hoverOffset: 15
  };

  return (
    <div className="overlay">
      <div className="chart-container">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <p>Visar språket i fallande ordning</p>
        <Pie className="piechart" data={pieConfig} options={options} width={400} height={400} />
      </div>
    </div>
  );
};

export default LangChart;
