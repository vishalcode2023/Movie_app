// Details Component
import React, { useContext } from 'react';
import { idContext } from "../Context/DetailsContext";
import { useNavigate } from 'react-router-dom';

const Details = () => {
  const { data, Trendingvid } = useContext(idContext);
  const navigation = useNavigate();

  return (
    <div className='w-full h-[112vh] bg-black'>
      <div className='w-[90%] h-[80vh]  m-auto'>
        {data ? (
          <div className='w-full h-[70%] py-10 md:h-[78vh]'>
            <img className='w-full h-full object-cover rounded-sm'
              src={`https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path}`}
              alt={data.title || 'Movie Image'} 
            />
            <h2 className='text-white text-center text-xl my-5 sm:text-3xl font-semibold'>
              {data.original_title || data.title || data.original_name}
            </h2>
            <div className="">
              <p className='text-white text-lg my-5 sm:text-xl text-center'>{data.overview}</p>
            </div>
            <div className='flex items-center justify-center w-full'>
              {/* Watch Trailer Button */}
              <button onClick={() => window.open(Trendingvid, '_blank')} className='text-black py-2 px-4 bg-yellow-300 rounded-md font-semibold'>
                Watch Trailer
              </button>
              {/* Go Back Button */}
              <button onClick={() => navigation(-1)} className='text-black py-2 px-4 bg-yellow-300 rounded-md font-semibold mx-4'>
                Go Back
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Details;
