import React, { useContext } from "react";
import { CardContext } from "../Context/CardContext";
import { idContext  } from'../Context/DetailsContext';
import { Link } from "react-router-dom";

const Card = () => {
  const cards = useContext(CardContext);
  const { Setcardid } = useContext(idContext);

  const handleclick = (val) => {
    Setcardid(val);
  }

  return (
    <div className="w-full h-[40vh] bg-black flex overflow-x-auto">
      {cards && cards.length > 0 ? (
        cards.map((item, index) => ( 
          <Link  to={`/map/${index}`} onClick={() => handleclick(item.id)} key={index} className="card w-56 h-64 mx-2 rounded-sm bg-yellow-50 flex-shrink-0">
            <img
              className="w-full h-full object-cover"
              src={`https://image.tmdb.org/t/p/original/${item.backdrop_path || item.profile_path}`}
              alt={`card-${index}`}
            />
          </Link>
        ))
      ) : (
        <img
              className="w-full h-full object-cover"
              src='https://imgs.search.brave.com/IEBNkHVtvHy6uaszzPXr3s5mNgkJ4tO5ooh61jv9_VM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMtY2RuLjEyM3Jm/LmNvbS91aS1jb21w/b25lbnRzL2Fzc2V0/cy9zdmcvYWxsLWlt/YWdlcy5zdmc'
            />
      )}
    </div>
  );
};

export default Card;
