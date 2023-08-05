
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [movie, setMovie] = useState("");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const url = `http://www.omdbapi.com/?apikey=aee4729a&s=${movie}`;
  const getMovieData = async () => {
    const apiResponse = await fetch(url);
    const data = await apiResponse.json();
    if (data.Search) {
      setData(data.Search);
      console.log(data);
    }

    setLoading(false);
  };

  useEffect(() => {
    getMovieData();
  }, []);
  
  return (
    <div className="App">
    <input
      type="text"
      value={movie}
      onChange={(e) => setMovie(e.target.value)}
    />
    <button onClick={() => getMovieData()}>Show movie</button>

    <br />
    {data.map((movie, index) => (
      <div key={index}>
        <img src={movie.Poster} alt="movie"></img>
        <br />
        {movie.Title}
      </div>
    ))}
  </div>
  );
}

export default App;
