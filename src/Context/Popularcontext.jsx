import axios from '../Axios/axios';
import React, { useEffect, useState, createContext } from 'react';

// Export the popularvid context
export const popularvid = createContext();

const Popularcontext = (props) => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [Videopop, Setvideopop] = useState('');
  const [id, setid] = useState();

  // Fetch popular movies
  const fetchPopular = async () => {
    try {
      const response = await axios.get(`/movie/popular?language=en-US&page=1`);
      setPopularMovies(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  // Fetch trailer video for a movie by ID
  const fetchTrendingMovie = async (movieId) => {
    try {
      const response = await axios.get(`/movie/${movieId}/videos?language=en-US`);
      const videoData = response.data.results.find(
        (video) => video.site === 'YouTube' && video.type === 'Trailer'
      );
      if (videoData) {
        const videoUrl = `https://www.youtube.com/watch?v=${videoData.key}`;
        Setvideopop(videoUrl);
      } else {
        Setvideopop(null);
        console.log('No video found');
      }
    } catch (error) {
      console.log(error);
    }
  };

  // UseEffect to fetch trailer whenever the ID changes
  useEffect(() => {
    if (id) {
      fetchTrendingMovie(id);
    }
  }, [id]);

  useEffect(() => {
    fetchPopular();
  }, []);

  return (
    <popularvid.Provider value={{ popularMovies, id, setid, Videopop }}>
      {props.children}
    </popularvid.Provider>
  );
};

export default Popularcontext;
