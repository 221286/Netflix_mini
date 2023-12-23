import React from 'react'
import Videolist from './Videolist'
//import { useSelector } from 'react-redux'

const Secondarycontainer = () => {

    
    
  return (
    <div className='bg-black'>
         <div className='absolute text-white bg-black mt-[47rem]'>
            <div className='-mt-[10rem]'>
            <Videolist title={"Current Movies"} ></Videolist>
         <Videolist title={"Current Movies"} ></Videolist>
         <Videolist title={"Current Movies"} ></Videolist>
         <Videolist title={"Current Movies"} ></Videolist>

            </div>
         
         
          </div>

    </div>
   
  )
}

export default Secondarycontainer
