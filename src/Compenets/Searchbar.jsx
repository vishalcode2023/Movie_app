import React, { useContext, useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { Moviedata } from "../Context/Context";
import { Link } from "react-router-dom";

const Searchbar = () => {
  const [Navlen, Setnavlen] = useState([]);
  const { getquery, Movies } = useContext(Moviedata);
  // console.log(Movies)

  const handledata = (data) => {
    getquery(data);
    Setnavlen(data);
  };

  const cleardata = () => {
    Setnavlen("");
    getquery("");
  };

  return (
    <div className="flex items-center">
      <input
        onChange={(e) => handledata(e.target.value)}
        className="md:block hidden w-64 h-11 bg-zinc-800 border-none mx-16 rounded-md px-3 text-white outline-none"
        type="text"
        placeholder=" Search movies, web series "
      />
      {Navlen && Navlen.length > 0 ? (
        <FaXmark
          onClick={cleardata}
          className="text-white relative -left-12 hidden sm:block"
        />
      ) : (
        <FaSearch className="text-white relative -left-12 hidden sm:block" />
      )}

      {Movies && Movies.length > 0 ? (
        Movies.map((item,index) => (
          <div key={index} className=" absolute top-[8.7%] left-[78.4%] w-64 bg-black py-5 rounded-s-md overflow-y-auto z-40">
          <Link to={`/map/${item.id}`} className="flex items-center mx-2 my-1 border-b py-1 ">
            <img
              className="w-20 h-20 object-cover"
              src={`https://image.tmdb.org/t/p/original/${item.backdrop_path || item.profile_path}`}
            />
            <h2 className="text-white mx-2">{item.original_title || item.title || item.original_name}</h2>
          </Link>
        </div>
        ))
      ) : <h1 className="text-green-300"></h1>}

    </div>
  );
};

export default Searchbar;
