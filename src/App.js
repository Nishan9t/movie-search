
import { useEffect, useState } from 'react';
import './App.css';
import Card from './Card';

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
    <div className='text-center'>
    <input className='mx-auto md:w-[1000px] border border-blue-500 border-4 rounded-xl p-2 my-2'
      type="text"
      value={movie}
      onChange={(e) => setMovie(e.target.value)}
    />
    <br/>
    <button className='p-2 bg-green-400 rounded border hover:scale-[120%] m-4' onClick={() => getMovieData()}>Show movie</button>

    <br />
    
    <Card data={data}/>
    
  </div>
  );
}

export default App;
