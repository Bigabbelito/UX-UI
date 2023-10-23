
import { Pie } from "react-chartjs-2";
import {Chart as ChartJS,ArcElement,Tooltip,Legend,CategoryScale,LinearScale,BarElement,} from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);
import "./genre.css";
import { getGenreconfig } from "../../data/config/genredata";

const Genre = ({ onClose }) => {
    const genreConfig = getGenreconfig();
  

  return (
    <div className="overlay">
      <div className="chart-container">
      <button className="close-button" onClick={onClose}>
          &times; 
        </button>
        <p>Visa Antal Filmer I Varje Genre</p>
        <Pie className="piechart" data={genreConfig} />
      </div>
    </div>
  );
};

export default Genre;