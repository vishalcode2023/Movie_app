import React from 'react'
import Sidenav from '../Compenets/Sidenav'
import Header from '../Compenets/Header';
import Card from '../Compenets/Card';
import CardPopular from '../Compenets/CardPopular';
import HomePopular from '../Compenets/Homepopular';
import Fotter from '../Compenets/Fotter';

const Home = () => {
  return (
      <>
        <Sidenav/>
        <Header/>
        <Card/>
        <CardPopular/>
        <HomePopular/>
        {/* <Fotter/> */}
      </>
  )
}

export default Home