import React from 'react';

// Importing Navbar
import Navbar from '../components/navbar/navbar';
import Carousel from '../components/Carousel/Carousel';
import Card from '../components/Card/Card';
import Wintercard from '../components/Card/Wintercard';
import Brands from "../components/Card/Brands";
import Best from '../components/Card/Best';
import BestFoot from "../components/Card/BestFoot";
import BestKids from '../components/Card/BestKids';
import BestHome from "../components/Card/BestHome";
import BestBeauty from '../components/Card/BestBeauty';
function DefaultLayout({children}) {
  return (
    <>
    <Navbar/>
    <Carousel/>
    <Card/>
    <Wintercard/>
    <Brands/>
    <Best/>
    <BestFoot/>
    <BestKids/>
    <BestHome/>
    <BestBeauty/>
    <div>{children}</div>
  </>
  )
}

export default DefaultLayout;
