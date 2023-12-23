import React from 'react'
import VideoCards from './VideoCards'
import { useSelector } from 'react-redux'

const Videolist = () => {
    const select = useSelector(store=>store.movies?.currentmovielist)
    if(!select) return;
    console.log(select[0].poster_path)
  return (
    <div className='w-screen'>
      <div className=' flex ml-6  py-10 overflow-x-scroll '>
        <div className=' flex relative  z-10    '>
        {select.map(cards=>(<VideoCards image={cards?.poster_path}></VideoCards>))}
        </div>

        

        
      
    </div>
    </div>
    
  )
}

export default Videolist
