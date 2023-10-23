import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement,Tooltip, Legend, CategoryScale, LinearScale,BarElement,} from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);
import "./LancChart.css";
import { getConfig } from "../../data/config/LangData";



const pieConfig = getConfig(); 

const LangChart = ({ onClose }) => {
  return (
    <div className="overlay">
      <div className="chart-container">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <p>Visar språket i fallande ordning</p>
        <Pie className="piechart" data={pieConfig} />
      </div>
    </div>
  );
};

export default LangChart;