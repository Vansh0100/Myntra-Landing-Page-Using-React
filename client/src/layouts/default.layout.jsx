import React from 'react';

// Importing Navbar
import Navbar from '../components/navbar/navbar';
import Carousel from '../components/Carousel/Carousel';
function DefaultLayout({children}) {
  return (
    <>
    <Navbar/>
    <Carousel/>
    <div>{children}</div>
    <h1>Footer</h1>
  </>
  )
}

export default DefaultLayout;
