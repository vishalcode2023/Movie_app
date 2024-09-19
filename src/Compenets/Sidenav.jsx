import React, { useState } from "react";
import { FaFireFlameCurved } from "react-icons/fa6";
import { RiMovie2Fill } from "react-icons/ri";
import { BsStars } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";

const Sidenav = () => {
  const data = [
    { Link: "/", title: "Home", icon: <FaHome />, color: "text-red-200" },
    { Link: "/Trending", title: "Trending", icon: <FaFireFlameCurved />, color: "text-yellow-200" },
    { Link: "/Popular", title: "Popular", icon: <BsStars />, color: "text-yellow-200" },
  ];

  const [opened, setisopend] = useState(false);

  return (
    <div className="w-full h-16 bg-black z-40"> {/* Increased z-index */}
      <div className="w-full h-full flex items-center justify-between">
        <div className="logo text-xl font-semibold text-white my-5 ms-6 md:text-2xl">
          <h1>Pl<span className="text-yellow-200">e</span>x</h1>
        </div>
        <div className="hidden lg:flex gap-1">
          {data.map((item, index) => (
            <Link key={index} to={item.Link} className={`text-white flex items-center justify-center gap-1 px-4 hover:${item.color}`}>
              {item.icon} {item.title}
            </Link>
          ))}
        </div>
        <Searchbar />
        <div className="flex mx-5 text-xl text-white md:hidden">
          <button onClick={() => setisopend(!opened)}>
            {opened ? (
              <FaXmark className="text-white text-2xl" />
            ) : (
              <IoMdMenu className="text-white text-2xl" />
            )}
          </button>
        </div>
      </div>
      {opened && (
        <div className="absolute top-16 w-full bg-black z-40 md:hidden"> {/* Increased z-index */}
          {data.map((item, index) => (
            <Link
              key={index}
              to={item.Link}
              className={`text-white flex items-center justify-start gap-2 px-6 py-4 hover:${item.color}`}
              onClick={() => setisopend(false)}
            >
              {item.icon} {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidenav;