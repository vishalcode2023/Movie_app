import React, { useContext } from "react";
import { popularvid } from "../Context/Popularcontext";
import { useNavigate } from "react-router-dom";

const Popular = () => {
  const { popularMovies, setid, Videopop } = useContext(popularvid);

  const handleWatchTrailer = (movieId) => {
    setid(movieId); 
  };

  const navigation = useNavigate();

  return (
    <div className="w-full h-auto bg-black">
      <div className="">
        <button onClick={()=> navigation('/')} className=" hidden md:block text-black bg-yellow-300 font-semibold py-2 px-5 rounded-md relative top-10 left-20">Back</button>
      </div>
      <div className="w-[90%] m-auto py-10">
        {popularMovies && popularMovies.length > 0 ? (
          popularMovies.map((movie) => (
            <div
              key={movie.id}
              className="w-full h-[70%] py-10 my-10 md:h-[85vh] mb-10"
            >
              <img
                className="w-full h-[75%] object-cover rounded-sm"
                src={`https://image.tmdb.org/t/p/original/${
                  movie.backdrop_path || movie.profile_path
                }`}
                alt={movie.title || "Movie Image"}
              />
              <h2 className="text-white text-center text-xl my-5 sm:text-3xl font-semibold">
                {movie.original_title || movie.title || movie.original_name}
              </h2>
              <div>
                <p className="text-white text-sm my-5 sm:text-xl text-center">
                  {movie.overview}
                </p>
              </div>
              <div className="flex items-center justify-center w-full">
                {/* Single button for both fetching and playing the trailer */}
                <button
                  onClick={() => {
                    if (Videopop) {
                      window.open(Videopop, "_blank");
                    } else {
                      handleWatchTrailer(movie.id);
                    }
                  }}
                  className="text-black py-2 px-4 bg-yellow-300 rounded-md font-semibold"
                >
                  {Videopop ? "Watch Trailer on YouTube" : "Watch Trailer"}
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white text-center">No popular movies found</p>
        )}
      </div>
    </div>
  );
};

export default Popular;
