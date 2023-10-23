
import { useState } from "react";
import "./App.css";
import LangChart from "./components/Language/LangChart";
import Premiere from "./components/Premiere/PremiereChart";
import Length from "./components/Length/LengthChart";
import Genre from "./components/Genre/Genre";
import Search from "./components/Search/Search";
import HuvudBar from "./components/Huvud/Huvud";

function App() {
  const [isGenreVisible, setIsGenreVisible] = useState(false);
  const [isLengthVisible, setIsLengthVisible] = useState(false);
  const [isPremiereVisible, setIsPremiereVisible] = useState(false);
  const [isLangVisible, setIsLangVisible] = useState(false);

  const toggleGenre = () => {
    setIsGenreVisible(!isGenreVisible);
  };
  const toggleLength = () => {
    setIsLengthVisible(!isLengthVisible);
  };
  const togglePremiere = () => {
    setIsPremiereVisible(!isPremiereVisible);
  };
  const toggleLang = () => {
    setIsLangVisible(!isLangVisible);
  };

  const closeGenre = () => {
    setIsGenreVisible(false);
  };
  const closeLength = () => {
    setIsLengthVisible(false);
  };
  const closePremiere = () => {
    setIsPremiereVisible(false);
  };
  const closeLang= () => {
    setIsLangVisible(false)
  }

  return (
    <section>
    <HuvudBar/>
      <Search/>
      <section className="btn-container">
        <button className="genre-btn" onClick={toggleGenre}>
          Visa Genre 
        </button>
        {isGenreVisible && <Genre onClose={closeGenre} />}

        <button className="length-btn" onClick={toggleLength}>
          Visa Längden 
        </button>
        {isLengthVisible && <Length onClose={closeLength} />}

        <button className="premiere-btn" onClick={togglePremiere}>
          Visa Premiär
        </button>
        {isPremiereVisible && <Premiere onClose={closePremiere} />}

        <button className="special-btn" onClick={toggleLang}>
          Visa Språk
        </button>
        {isLangVisible && <LangChart onClose={closeLang} />}

      </section>
       
    </section>
  );
}

export default App;