import React from 'react'
import  Header from './Header';
import { useFetchmovies } from './Utils/useFetchmovies';
import Maincontainer from './Maincontainer';
import Secondarycontainer from './Secondarycontainer';

const Browse = () => {
  useFetchmovies();
  return (
    <div className=''>
      <Header></Header>
      {/**  
       * Main container
       * -Background Playing video
       * -Video Information
       * Secondary Container
       * -Video List*n
       * --Video Card *n
       * 
       * 
       */}
       <Maincontainer ></Maincontainer>
       <Secondarycontainer></Secondarycontainer>
    </div>
  )
}

export default Browse;
