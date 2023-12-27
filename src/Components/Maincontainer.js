import React from 'react'
import Backgroundvideo from './Backgroundvideo';
import Videotitle from './Videotitle';
import { useSelector } from 'react-redux';

const Maincontainer = () => {
    //const [playing,getplaying]= useState(null);
    const select = useSelector(store=>store.movies?.currentmovielist);

    
  if(select===null) return;
 // const chosen_movie= Math.floor(Math.random()*20);
  //console.log(select[0] );
  return (
    <div className=''>
      <Backgroundvideo Movie_ID={select[1]?.id}></Backgroundvideo>
      <Videotitle videoInfo={select[1]}></Videotitle>
    </div>
  )
}

export default Maincontainer
