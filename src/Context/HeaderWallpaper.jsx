import axios from "../Axios/axios";
import React, { createContext, useEffect, useState } from "react";

export const HeaderWallpaper = createContext();

const Wallpaper = (props) => {
  const [Wallpaper ,setwallpaper] = useState([]);
  const get_wallpaper = async () => {
    try {
      const response = await axios.get(`/trending/all/day`);
      const data = response.data.results;
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomWallpaper = data[randomIndex];
      setwallpaper(randomWallpaper);
    } catch (error) {
      console.error(error);
    }
  };

   useEffect(()=>{
      get_wallpaper();
   },[])

  return <HeaderWallpaper.Provider value={Wallpaper}>{props.children}</HeaderWallpaper.Provider>;
};

export default Wallpaper;
