import React from 'react'
import Backgroundvideo from './Backgroundvideo';
import Videotitle from './Videotitle';
import { useSelector } from 'react-redux';

const Maincontainer = () => {
    const select = useSelector(store=>store.movies?.currentmovielist);

    
  if(select===null) return;
  const chosen_movie= Math.floor(Math.random()*20);
  //console.log(select[0] );
  return (
    <div>
      <Backgroundvideo Movie_ID={select[chosen_movie]?.id}></Backgroundvideo>
      <Videotitle videoInfo={select[chosen_movie]}></Videotitle>
    </div>
  )
}

export default Maincontainer
