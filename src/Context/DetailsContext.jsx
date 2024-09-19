import axios from '../Axios/axios';
import React, { useEffect, useState } from 'react';
import { createContext } from 'react';

export const idContext = createContext();

const DetailsContext = (props) => {
  const [id, setid] = useState();
  const [data, setdata] = useState({});
  const [Video, Setvideo] = useState('');
  const [Cardid, Setcardid] = useState();
  const [Card, Setcard] = useState({});
  const [Trendingvid, SetTreding] = useState('');

  // Fetch movie details by id
  const fetchdata = async () => {
    if (id) {
      try {
        const response = await axios.get(`/movie/${id}?language=en-US`);
        setdata(response.data);
        console.log(id);
      } catch (error) {
        console.log(error);
      }
    }
  };

  // Fetch card details based on Cardid
  const fetchdatacard = async () => {
    if (Cardid !== undefined) {
      try {
        const response = await axios.get(`/movie/${Cardid}?language=en-US`);
        Setcard(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  // Fetch movie trailer video link based on Cardid
  const fetchdatamovie = async () => {
    if (Cardid !== undefined) {
      try {
        const response = await axios.get(`/movie/${Cardid}/videos?language=en-US`);
        const videoData = response.data.results.find(video => video.site === "YouTube" && video.type === "Trailer");
        if (videoData) {
          const videoUrl = `https://www.youtube.com/watch?v=${videoData.key}`;
          Setvideo(videoUrl);
        } else {
          console.log("No video found");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  // Fetch trending movie video link
  const Trendingmovie = async () => {
    if (id !== undefined) {
      try {
        const response = await axios.get(`/movie/${id}/videos?language=en-US`);
        const videoData = response.data.results.find(video => video.site === "YouTube" && video.type === "Trailer");
        if (videoData) {
          const videoUrl = `https://www.youtube.com/watch?v=${videoData.key}`;
          SetTreding(videoUrl);
        } else {
          console.log("No video found");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    fetchdata();
    fetchdatacard();
    fetchdatamovie();
    Trendingmovie();
  }, [id, Cardid]);

  return (
    <idContext.Provider value={{ id, setid, data, setdata, Video, Setcardid, Card, Trendingvid }}>
      {props.children}
    </idContext.Provider>
  );
};

export default DetailsContext;
