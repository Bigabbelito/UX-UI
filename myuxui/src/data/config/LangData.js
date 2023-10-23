
import documentariesData from "../documentaries.json";
import featureFilmsData from "../feature-films.json";
import specialsdata from "../specials.json";


export function getConfig(sortOrder) {
    // Kontrollera att data innehåller de nödvändiga kategorierna
    if ( !documentariesData || !featureFilmsData || !specialsdata) {
      throw new Error(
        "Invalid data structure. Make sure it contains Specials, Feature, and Dokumentaries."
      );
    }
  
    const languageCounts = {
      English: 0,
      Spanish: 0,
      Polish: 0,
      Tamil: 0,
      Japanese: 0,
      Korean: 0,
      French: 0,
      Italian: 0,
      Indonesian: 0,
      German: 0,
      Swedish: 0,
      Dutch: 0,
      Turkish: 0,
      Portuguese: 0,
      Pashto: 0,
      Thai: 0,
    };
  
    // Räkna språken för varje kategori Specials, Feature och Dokumentaries 
    specialsdata.forEach((movie) => {
      languageCounts[movie.Language]++;
    });
  
    featureFilmsData.forEach((movie) => {
      languageCounts[movie.Language]++;
    });
  
    documentariesData.forEach((movie) => {
      languageCounts[movie.Language]++;
    });
  
    // Sortera språkdatan i fallande ordning
    const sortedCounts = Object.entries(languageCounts)
      .sort((a, b) => (sortOrder === "asc" ? a[1] - b[1] : b[1] - a[1]))
      .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});
  
    const labels = Object.keys(sortedCounts);
    const counts = Object.values(sortedCounts);
  
    return {
      labels,
      datasets: [
        {
          label: "Language Counts",
          data: counts,
          backgroundColor: [
            "rgba(0, 255, 0, 0.8)",
            "rgba(0, 0, 255, 0.8)",
            "rgba(255, 0, 0, 0.8)",
            "rgba(255, 255, 0, 0.8)",
            "rgba(255, 0, 255, 0.8)",
            "rgba(0, 255, 255, 0.8)",
            "rgba(255, 165, 0, 0.8)",
            "rgba(128, 0, 128, 0.8)",
            "rgba(255, 192, 203, 0.8)",
            "rgba(255, 215, 0, 0.8)",
            "rgba(0, 128, 0, 0.8)",
            "rgba(255, 69, 0, 0.8)",
            "rgba(255, 0, 128, 0.8)",
            "rgba(0, 255, 128, 0.8)",
            "rgba(128, 128, 0, 0.8)",
            "rgba(128, 0, 0, 0.8)",
          ],
          borderColor: "rgba(0, 0, 0, 0.5)",
        },
      ],
    };
  }