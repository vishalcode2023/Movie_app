import React, { useContext } from 'react';
import { idContext } from '../Context/DetailsContext';
import { useNavigate } from 'react-router-dom';

const Trending1 = () => {

    const { Card, Video } = useContext(idContext); 
    const navigation = useNavigate();

    return (
        <div className='w-full h-[110vh] bg-black'>
            <div className='w-[90%] h-[75vh] m-auto'>
                {Card ? (
                    <div className='w-full h-[70%] py-10 md:h-[85vh]'>
                        <img className='w-full h-full object-cover rounded-sm'
                            src={`https://image.tmdb.org/t/p/original/${Card.backdrop_path || Card.profile_path}`}
                            alt={Card.title || 'Movie Image'}
                        />
                        <h2 className='text-white text-center text-xl my-5 sm:text-3xl font-semibold'>
                            {Card.original_title || Card.title || Card.original_name}
                        </h2>
                        <div>
                            <p className='text-white text-lg my-5 sm:text-xl text-center'>{Card.overview}</p>
                        </div>
                        <div className='flex items-center justify-center w-full'>
                            <button
                                onClick={() => window.open(Video, "_blank")} // Open the video link in a new tab
                                className='text-black py-2 px-4 bg-yellow-300 rounded-md font-semibold'>
                                Watch Trailer
                            </button>
                            <button
                                onClick={() => navigation(-1)}
                                className='text-black py-2 px-4 bg-yellow-300 rounded-md font-semibold mx-4'>
                                Go Back
                            </button>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default Trending1;
