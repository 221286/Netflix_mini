import React from 'react'
import Videolist from './Videolist'
import { useSelector } from 'react-redux'
//import { useSelector } from 'react-redux'

const Secondarycontainer = () => {
    const select = useSelector(store=>store);
    
    const {currentmovielist,Topratedmovies,Nowplayingmovies,Popularmovies}= select?.movies;
    const {darkmode}= select?.mode;
    const setmode = darkmode ? 'text-white bg-black':'text-black bg-white'
  return (
    <div className='bg-black overflow-hidden'>
         <div className={'absolute  mt-[50rem] '+ setmode}>
            <div className='-mt-[10rem]'>
            <Videolist title={"Current Movies"} select={currentmovielist} ></Videolist>
         <Videolist title={"Top Rated"} select={Topratedmovies} ></Videolist>
         <Videolist title={"Now playing"} select={Nowplayingmovies} ></Videolist>
         <Videolist title={"Popular"} select={Popularmovies}></Videolist>

            </div>
         
         
          </div>

    </div>
   
  )
}

export default Secondarycontainer
