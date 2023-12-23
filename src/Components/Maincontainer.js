import React from 'react'
import Backgroundvideo from './Backgroundvideo';
import Videotitle from './Videotitle';
import { useSelector } from 'react-redux';

const Maincontainer = () => {
    const select = useSelector(store=>store?.movies?.currentmovielist);

    console.log(select);
  if(select===null) return;
  //console.log(select[0] );
  return (
    <div>
      <Backgroundvideo></Backgroundvideo>
      <Videotitle videoInfo={select[0]}></Videotitle>
    </div>
  )
}

export default Maincontainer
