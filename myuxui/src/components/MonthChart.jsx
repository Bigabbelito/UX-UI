import documentariesData from '../data/documentaries.json';
import featureFilmsData from '../data/feature-films.json';
import specialsData from '../data/specials.json';
import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const FilmChart = () => {
  const [loading, setLoading] = useState(false);

  // Kombinera datan från alla filer
  const combinedData = [
    ...documentariesData,
    ...featureFilmsData,
    ...specialsData,
  ];

  const monthsData = combinedData.map((movie) => movie.premiere);

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const chartData = {
    labels: months,
    datasets: [
      {
        label: "Antal filmer per månad",
        data: monthsData,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>Filmer per premiärmånad</h2>
      <Bar data={chartData} />
    </div>
  );
};

export default FilmChart;
