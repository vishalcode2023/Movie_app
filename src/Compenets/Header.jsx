import React, { useContext } from 'react';
import { HeaderWallpaper } from '../Context/HeaderWallpaper';

const Header = () => {
  const Wallpaper = useContext(HeaderWallpaper); 
  // console.log(Wallpaper);

  return (
    <div className='w-[90%] m-auto my-5 h-[60vh] md:h-[80vh] relative z-20'>
      {Wallpaper?.backdrop_path ? (
        <img
          className='w-full h-full object-cover'
          src={`https://image.tmdb.org/t/p/original/${Wallpaper.backdrop_path}`}
          alt={Wallpaper.title || Wallpaper.name || 'Wallpaper'}
        />
      ) : (
        <p>Loading...</p>
      )}
      <div className="absolute top-[70%] left-5 transform -translate-y-1/2 md:left-32 md:top-80">
        <h1 className='backdrop-blur-sm text-white my-2 text-3xl md:text-6xl font-semibold w-[90%] md:w-[50%]'>
          {Wallpaper.title || Wallpaper.name || 'Start Streaming for free'}
        </h1>
        <p className='backdrop-blur-sm text-white my-2 text-xs md:text-sm font-semibold w-[90%] md:w-[50%]'>
          {Wallpaper.overview || 'Stream the best content available right now!'}
        </p>
      </div>
    </div>
  );
};

export default Header;
