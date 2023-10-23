
import LanguageChart from "../components/Language/LangChart";
import "./Home.css";
import PrimiereChart from "../components/Premiere/PremiereChart";
// import FilmLengthChart from "../components/FilmLength/FilmLengthChart";
// import GenreChart from "../components/genre/GenreChart";
// import SearchMovie from "../components/search/searchMovie";
import { useRecoilState } from "recoil";
import { isMovieHit } from "../data/config/atom";
// import FoundMovies from "../components/search/FoundMovies";


export default function Home() {
    const [isThereMovie, setIsMovie] = useRecoilState(isMovieHit);
    return (
        <div className="home-container">
            {/* <SearchMovie /> */}
            {isThereMovie ? (
                <FoundMovies />
            ) : (
                <>
                    <LanguageChart />
                    <PrimiereChart />
                    {/* <FilmLengthChart /> */}
                    {/* <GenreChart /> */}
                </>
            )}
        </div>
    );
}