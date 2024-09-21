import React from 'react'; 
import { createContext, useEffect, useState } from "react";
import axios from "../Axios/axios";

export const Moviedata = createContext();

const Context = (props) => {
  const [query , setquery] = useState("");
  const [ Movies ,setMovies] = useState({});

  const get_movie = async() => {
    try {
        const data = await axios.get(`/search/multi?query=${query}`)
        setMovies(data.data.results);
        
    } catch (error) {
        console.error(error);
    }
  }


const getquery = (data) => {
  setquery(data);
}

useEffect(() => {
  get_movie();
},[query])

  return (
    <Moviedata.Provider value={{getquery,Movies}}>
      {props.children}
    </Moviedata.Provider>
  );
};

export default Context;
