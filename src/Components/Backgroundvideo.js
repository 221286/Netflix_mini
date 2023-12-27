import React from 'react'
import { useFetchcurrentlist } from './CustomHooks/useCurrentlist'
import { useSelector } from 'react-redux';

const Backgroundvideo = ({Movie_ID}) => {
    const select = useSelector((store)=>store?.movies?.videolist);
    
    
    useFetchcurrentlist(Movie_ID);

    if(!select) return;
    
    const trailer= select.filter(find=>find.name.includes("Trailer"))
    const key = trailer[0].key
    //console.log(key);
  return (
    <div> 
 <div className='w-screen absolute overflow-hidden'>
      <iframe className='w-screen aspect-video'
      src={"https://www.youtube.com/embed/"+key+"?&autoplay=1&mute=1&loop=5&rel=0&showinfo=0&controls=0&autohide=1"} title="YouTube video player" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      ></iframe>

    </div>

    </div>
   
  )
}

export default Backgroundvideo
