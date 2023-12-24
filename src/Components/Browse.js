import React from 'react'
import  Header from './Header';
import { useFetchmovies } from './Utils/useFetchmovies';
import Maincontainer from './Maincontainer';
import Secondarycontainer from './Secondarycontainer';
import { useFetchNowplayingmovies } from './CustomHooks/useNowplayingMovies';
import { usePopularmovies } from './CustomHooks/usePupularmovies';
import { useFetchTopmovies } from './CustomHooks/useTopratedmovies';
import SearchGPTpage from './SearchGPTpage';
//import { Outlet } from 'react-router-dom';

const Browse = () => {
  useFetchmovies();
  useFetchNowplayingmovies();
  usePopularmovies();
  useFetchTopmovies();
  return (
    <div className=''>
      
      <Header></Header>
      

      
      <SearchGPTpage></SearchGPTpage>

      {/*<Outlet/>}
      {/**  
       * Main container
       * -Background Playing video
       * -Video Information
       * Secondary Container
       * -Video List*n
       * --Video Card *n
       * 
       <Maincontainer ></Maincontainer>
       <Secondarycontainer></Secondarycontainer>
       * 
       */}
    </div>
  )
}

export default Browse;
