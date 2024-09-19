import React, { useContext } from 'react'
import { popularvid } from "../Context/Popularcontext";
import { Link } from 'react-router-dom';

const Homepopular = () => {
    const { popularMovies } = useContext(popularvid);
  return (
    <div className='w-full h-screen bg-black'>
        <div className='w-full h-auto bg-black text-white'>
      <div className="py-5 text-center">
        <h2 className='text-2xl font-semibold md:text-4xl'>
          Popular Movies
        </h2>
      </div>

      <div className="flex flex-wrap justify-center items-center">
        {popularMovies && popularMovies.length > 0 ? (
          popularMovies.slice(0, 5).map((item, index) => (
            <Link to='/Popular' key={item.id || index} className="flex flex-col  md:w-[30%] m-4  rounded overflow-hidden">
              <img
                className="w-full h-60 object-cover"
                src={`https://image.tmdb.org/t/p/original/${item.backdrop_path || item.profile_path}`}
                alt={item.title || 'Movie Image'}
              />
              <h3 className='text-center'>{item.original_title || item.title || item.original_name}</h3>
            </Link>
          ))
        ) : (
          <p className="text-center text-white text-xl">No popularMovies movies available</p>
        )}
      </div>
    </div>
    </div>
  )
}

export default Homepopular