import React, { useContext } from "react";
import { trendingcontext } from "../Context/TrendingContext";
import { Link, useNavigate } from "react-router-dom";
import { idContext } from "../Context/DetailsContext";

const Trending = () => {
  const Trending = useContext(trendingcontext);
  // console.log(Trending);
  const Navigation = useNavigate();
  const { setid } = useContext(idContext);

  const handlefunction = (id) => {
    setid(id);
  };

  return (
    <div className="w-full min-h-screen text-white z-50 bg-black sm:min-h-screen">
      <div className="btn">
        <button
          onClick={() => Navigation("/")}
          className="py-3 px-5 text-white relative top-10 left-10 hover:scale-105"
        >
          Go Back
        </button>
      </div>
      <div>
        <h2 className="text-center text-xl font-semibold py-16 sm:text-4xl sm:py-8">
          Choose a Movie to start <br /> Watching instantly
        </h2>
      </div>

      <div className="w-[90%] mx-auto">
        {Trending && Trending.length > 0 ? (
          <div>
            {/* First Row */}
            <div className="first flex flex-wrap sm:flex-nowrap my-6">
              {Trending.slice(0, 6).map((item,index) => (
                <Link
                  key={index} 
                  to={`/path/${index}`}
                  onClick={() => handlefunction(item.id)} 
                  className="img1 w-full sm:w-[45%] h-64 mx-2 my-5"
                >
                  <img
                    className="w-full h-full object-cover"
                    src={`https://image.tmdb.org/t/p/original/${item.backdrop_path || item.profile_path}`}
                    alt={item.title}
                  />
                  <h1 className="text-white py-3 text-center text-xl font-semibold">
                    {item.original_title || item.title || item.original_name}
                  </h1>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-center">No trending data available.</p>
        )}
      </div>
    </div>
  );
};

export default Trending;
