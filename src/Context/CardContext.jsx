import axios from "../Axios/axios";
import React, { createContext, useEffect, useState } from "react";

export const CardContext = createContext();

const CardProvider = (props) => {
  const [cards, setCards] = useState([]);
  const fetchCardData = async () => {
    try {
      const response = await axios.get('/trending/all/day?language=en-US');
      const results = response.data.results;
  
      if (results && results.length > 0) {
        const shuffledResults = results.sort(() => 0.5 - Math.random());
        const randomCards = shuffledResults.slice(0, 20);
        setCards(randomCards);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  

  useEffect(() => {
    fetchCardData();
  }, []);

  return (
    <CardContext.Provider value={cards}>
      {props.children}
    </CardContext.Provider>
  );
};

export default CardProvider;
