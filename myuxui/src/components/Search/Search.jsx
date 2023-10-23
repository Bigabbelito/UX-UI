import React, { useState } from "react";
import documentariesData from "../../data/documentaries.json";
import featureFilmsData from "../../data/feature-films.json";
import specialsdata from "../../data/specials.json";
import "../Search/Search.css";

// Kombinera alla filmer från olika JSON-filer till en enda array
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

    // Filtrera filmer baserat på söktermen i alla filmer
    const filteredMovies = allMovies.filter((movie) => {
      const lowercaseTitle = movie.Title.toLowerCase();
      return lowercaseTitle.includes(lowercaseSearchTerm);
    });

    setSearchResult(filteredMovies);
  };

  return (
    <div>
      <h3>Sökfälte</h3>
      <input
        type="text"
        placeholder="Sök Efter Titlen"
        value={searchTerm}
        onChange={handleSearchChange}
      />

      {searchTerm.trim() === "" ? (
        <p>Inga Resultat</p>
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
