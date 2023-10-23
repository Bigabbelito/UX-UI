import { useState, useEffect } from "react";
import documentariesData from "../documentaries.json";
import featureFilmsData from "../feature-films.json";
import specialsData from "../specials.json";
import generateRandomHexColors from "./colorGen.js";

// Den här funktionen genererar datan för diagrammet över filmernas längd i minuter.
export function filmLengthChart() {
    const [filmLengthData, setFilmLengthData] = useState([]);
    const [backgroundColor, setBackgroundColor] = useState([]);
    
    useEffect(() => {
        // Kombinera datan från tre olika JSON-filer.
        const combinedAllMovies = [...documentariesData, ...featureFilmsData, ...specialsData];

        // Konvertera längden från text till minuter och sortera i stigande ordning.
        const filmLengthsInMinutes = combinedAllMovies.map((movie) => {
            const runtime = movie.Runtime;
            // Extrahera timmar och minuter från längden (t.ex., "2 h 10 min")
            const [hours, minutes] = runtime.match(/\d+/g);
            return Number(hours) * 60 + Number(minutes);
        });
    
        // Sortera längderna stigande
        const sortedFilmLengthData = filmLengthsInMinutes.sort((a, b) => a - b);

        // Skapa slumpmässiga färger för varje film.
        const newBackgroundColor = generateRandomHexColors(sortedFilmLengthData.length);
    
        // Välj de första 170 filmerna att visas.
        const displayedData = sortedFilmLengthData.slice(0, 155);

        // Sätt datan och färgerna för diagrammet.
        setFilmLengthData(displayedData);
        setBackgroundColor(newBackgroundColor);
    }, []);

    return {
        data: {
          labels: filmLengthData.map((_, index) => index + 1),
          datasets: [
            {
              data: filmLengthData,
              backgroundColor: backgroundColor,
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 2,
            },
          ],
        }
    }
}

// Den här funktionen genererar inställningarna för diagrammet.
export function filmLengthChartOptions() {
    const chartData = filmLengthChart();
    return {
        data: chartData.data,
        plugins: {
            transitions: {
                show: {
                    animations: {
                        x: {
                            from: 0,
                        },
                        y: {
                            from: 0,
                        }
                    }
                },
                hide: {
                    animations: {
                        x: {
                            from: 0,
                        },
                        y: {
                            from: 0,
                        }
                    }
                }
            },
            title: {
                display: true,
                text: 'Filmernas längd (i minuter)',
                font: {
                    size: 25
                }
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Filmer',
                    font: {
                        size: 25
                    }
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Minuter',
                    font: {
                        size: 25
                    }
                },
            },
        },
    };
}
