import {useState, useEffect} from 'react';
import searchIcon from './search.svg';
import MovieCard from './MovieCard';

//API key: f240b919

// Ways to pull API to get the
// Create a static api
const API_URL = 'http://www.omdbapi.com?apikey=f240b919';


//Use the API from inside of the component to gather data
const Content = () => { 
  // state for movies
  const [movies, setMovies] = useState([]);

  // state for search
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`) ;//will cal the api
    const data = await response.json();
    setMovies(data.Search)
    console.log(data)
  }

  useEffect(() =>{
    searchMovies(`Avengers`)
  }, [])



  return ( <div className='app flex flex-col p-[4rem] justify-center items-center'>
    <div className='item-center text-base'>
        <h1 className='text-white text-3xl'>Hunt for your latest favourite movie and enjoy the show!</h1>
    </div>
     <div className='search flex items-center justify-center py-[1.5rem] px-[1.75rem] rounded-[3rem] bg-[#1f2123]  w-[71%] mt-[4rem] mx-[2rem] '>

      {/* search */}
      <input className='flex-1 border-none text-[1.5rem] font-medium px-[1rem] 
      outline-none text-[#a1a1a1] bg-[#1f2123]'
      placeholder='Search here'
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}/>

      <img className='w-[35px] h-[35px] cursor-pointer'
      src={searchIcon}
      alt="search"
      onClick={() => searchMovies(searchTerm)}
      />
     </div>

     {/* //dynamic block of code */}
     {movies?.length > 0 ? (
        <div className="container flex justify-center items-center flex-wrap w-full mt-[3rem]">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty flex justify-center items-center w-full mt-[3rem] ">
          <h2 className='text-[1.2rem] text-[#f9d3b4]'>No movies found</h2>
        </div>
      )}
    </div>
  )
}

export default Content;