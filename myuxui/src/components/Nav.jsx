

const Navigation = ({ setActiveTab }) => {
  return (
    <div>
      <button onClick={() => setActiveTab ('language')}>Visa per språk</button>
      <button onClick={() => setActiveTab ('month')}>Visa per månad</button>
      <button onClick={() => setActiveTab ('genre')}>Visa Genre</button>

    </div>
  );
};

export default Navigation;