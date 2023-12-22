import React from 'react'
import  Header from './Header';
import { useSelector } from 'react-redux';
import { useFetchmovies } from './Utils/useFetchmovies';
import Maincontainer from './Maincontainer';
import Secondarycontainer from './Secondarycontainer';

const Browse = () => {

  
  const select = useSelector(store=>store?.movies?.currentmovielist);
  console.log(select);

  useFetchmovies();



  
  return (
    <div>
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
       <Maincontainer></Maincontainer>
       <Secondarycontainer></Secondarycontainer>
    </div>
  )
}

export default Browse;
