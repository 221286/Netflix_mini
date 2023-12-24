import React from 'react'
import Videolist from './Videolist'
import { useSelector } from 'react-redux'
//import { useSelector } from 'react-redux'

const Secondarycontainer = () => {
    const selectcurrent = useSelector(store=>store.movies?.currentmovielist);
    const selectTop = useSelector(store=>store.movies?.Topratedmovies);
    const selectNowplaying = useSelector(store=>store.movies?.Nowplayingmovies);
    const selectPopular = useSelector(store=>store.movies?.Popularmovies)
    
  return (
    <div className='bg-black'>
         <div className='absolute text-white bg-black mt-[50rem]'>
            <div className='-mt-[10rem]'>
            <Videolist title={"Current Movies"} select={selectcurrent} ></Videolist>
         <Videolist title={"Top Rated"} select={selectTop} ></Videolist>
         <Videolist title={"Now playing"} select={selectNowplaying} ></Videolist>
         <Videolist title={"Popular"} select={selectPopular}></Videolist>

            </div>
         
         
          </div>

    </div>
   
  )
}

export default Secondarycontainer
