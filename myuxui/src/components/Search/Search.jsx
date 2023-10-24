import { useState } from "react";
import documentariesData from "../../data/documentaries.json";
import featureFilmsData from "../../data/feature-films.json";
import specialsdata from "../../data/specials.json";
import "../Search/Search.css";
import './Search.css'


const allMovies = [
  ...documentariesData,
  ...featureFilmsData,
  ...specialsdata
];

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleSearchChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);

    const lowercaseSearchTerm = newSearchTerm.toLowerCase();

    
    const filteredMovies = allMovies.filter((movie) => {
      const lowercaseTitle = movie.Title.toLowerCase();
      return lowercaseTitle.includes(lowercaseSearchTerm);
    });

    setSearchResult(filteredMovies);
  };

  return (
    <div className="movie-card">
      <h3>Sökfälte</h3>
      <input className="input-container"
        type="text"
        placeholder="Sök efter titlen"
        value={searchTerm}
        onChange={handleSearchChange}
      />

      {searchTerm.trim() === "" ? (
        <p>Inga resultat</p>
      ) : (
        searchResult.map((movie, index) => (
          <div key={index} className="movie-card">
            <h2>{movie.Title}</h2>
            <p>Genre: {movie.Genre}</p>
            <p>Premiere: {movie.Premiere}</p>
            <p>Runtime: {movie.Runtime}</p>
            <p>Language: {movie.Language}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Search;
