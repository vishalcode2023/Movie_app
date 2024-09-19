import React, { useContext } from 'react';
import  { trendingcontext } from '../Context/TrendingContext';
import { Link } from 'react-router-dom';

const CardPopular = () => {
  const Trending = useContext(trendingcontext);
  // console.log(Trending);

  return (
    <div className='w-full h-auto bg-black text-white'>
      <div className="py-5 text-center">
        <h2 className='text-2xl font-semibold md:text-4xl'>
          <span className='text-yellow-300'>S</span>tream <span className='text-yellow-300'>O</span>ur <span className='text-yellow-400'>T</span>rending <span className='text-yellow-400'>M</span>ovies
        </h2>
      </div>

      <div className="flex flex-wrap justify-center items-center">
        {Trending && Trending.length > 0 ? (
          Trending.slice(0, 6).map((item, index) => (
            <Link to='/Trending' key={item.id || index} className="flex flex-col  md:w-[30%] m-4  rounded overflow-hidden">
              <img
                className="w-full h-60 object-cover"
                src={`https://image.tmdb.org/t/p/original/${item.backdrop_path || item.profile_path}`}
                alt={item.title || 'Movie Image'}
              />
              <h3 className='text-center'>{item.original_title || item.title || item.original_name}</h3>
            </Link>
          ))
        ) : (
          <p className="text-center text-white text-xl">No trending movies available</p>
        )}
      </div>
    </div>
  );
};

export default CardPopular;
