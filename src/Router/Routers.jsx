import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Trending from '../Compenets/Trending'
import Home from '../Compenets/Home'
import Popular from '../Compenets/Popular';
import Details from '../Compenets/Details';
import Trending1 from '../Compenets/Trending1';


const Routers = () => {
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
     <Route path='/Trending' element={<Trending/>}/>
     <Route path='/Popular' element={<Popular/>}/>
     <Route path='/path/:id' element={<Details/>}/>
     <Route path='/map/:id' element={<Trending1/>}/>
   </Routes>
  )
}

export default Routers