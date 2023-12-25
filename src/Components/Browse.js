import React from 'react'
import  Header from './Header';
import { useFetchmovies } from './Utils/useFetchmovies';

import { useFetchNowplayingmovies } from './CustomHooks/useNowplayingMovies';
import { usePopularmovies } from './CustomHooks/usePupularmovies';
import { useFetchTopmovies } from './CustomHooks/useTopratedmovies';
import SearchGPTpage from './SearchGPTpage';
import BrowseMainpage from './BrowseMainpage';
import { useSelector } from 'react-redux';
//import { Outlet } from 'react-router-dom';

const Browse = () => {
  const showsearGPTchpage = useSelector(store=>store.SearchGPT.Searchpageopen);
  
  useFetchmovies();
  useFetchNowplayingmovies();
  usePopularmovies();
  useFetchTopmovies();
  return (
    <div className=''>
      
      <Header showsearchGPT={showsearGPTchpage}></Header>
      
      {showsearGPTchpage?(<><SearchGPTpage></SearchGPTpage></>):(<><BrowseMainpage></BrowseMainpage></>)}
      
      

      {/*<Outlet/>}
      {/**  
       * Main container
       * -Background Playing video
       * -Video Information
       * Secondary Container
       * -Video List*n
       * --Video Card *n
       * 
       <SearchGPTpage></SearchGPTpage>
       * 
       */}
    </div>
  )
}

export default Browse;
