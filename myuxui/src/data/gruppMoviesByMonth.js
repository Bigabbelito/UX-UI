
import FilmChart from './FilmChart';

const App = () => {
  // Simulerad data för antal filmer per månad
  const filmData = [5, 8, 12, 6, 15, 10, 8, 7, 9, 11, 4, 3];

  return (
    <div>
      <FilmChart filmData={filmData} />
    </div>
  );
};

export default App;

  