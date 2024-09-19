import axios from '../Axios/axios';
import React, { createContext, useEffect, useState } from 'react'

export const trendingcontext = createContext();

const Trendingpage = (props) => {

  const [ Trending,Settrending ] = useState([]);
  const fetchdata = async() => {
    try {
      const data = await axios.get('/trending/movie/day?language=en-US');
      Settrending(data.data.results);
      // console.log(data.data.results);
      
    } catch (error) {
      console.error(error);
    }
  }

  

  useEffect(() =>{
    fetchdata();
  },[])


  return (
    <trendingcontext.Provider value={Trending}>
      {props.children}
    </trendingcontext.Provider>
  )
}

export default Trendingpage;