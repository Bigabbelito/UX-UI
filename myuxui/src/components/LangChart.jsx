import documentariesData from '../data/documentaries.json';
import featureFilmsData from '../data/feature-films.json';
import specialsData from '../data/specials.json';
import  { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);


const generateRandomHexColors = (count) => {
    const randomColors = [];
    for (let i = 0; i < count; i++) {
      const color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
      randomColors.push(color);
    }
    return randomColors;
  };
  
  const LangChart = () => {
    const [movieData, setMovieData] = useState({ labels: [], data: [] });
  
    useEffect(() => {
      const combinedAllMovies = [...documentariesData, ...featureFilmsData, ...specialsData];
      const languageCounter = {};
  
      combinedAllMovies.forEach((movie) => {
        const language = movie.Language;
        if (languageCounter[language]) {
          languageCounter[language] += 1;
        } else {
          languageCounter[language] = 1;
        }
      });
  
      const labels = Object.keys(languageCounter);
      const data = Object.values(languageCounter);
  
      setMovieData({ labels, data });
    }, []);
  
    const backgroundColor = generateRandomHexColors(movieData.labels.length);
  
    const chartData = {
      labels: movieData.labels,
      datasets: [
        {
          data: movieData.data,
          backgroundColor: backgroundColor,
        },
      ],
    };
  
    return (
      <div>
        <h2>Antal filmer per språk</h2>
        <Doughnut data={chartData} />
      </div>
    );
  };
  
  export default LangChart;