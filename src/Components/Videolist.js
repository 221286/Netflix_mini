import React from 'react'
import VideoCards from './VideoCards'

const Videolist = ({title,select}) => {
    
    if(!select) return;
   // console.log(select[0])
  return (
    <div className='w-screen ml-12  py-10 '>
        <h2 className='pl-1 text-3xl' >{title}</h2>
      <div className=' flex  mt-1 overflow-x-scroll '>
        <div className=' flex    '>
        {select.map(cards=>(<VideoCards image={cards?.poster_path} key={cards?.id}></VideoCards>))}
        </div>

        

        
      
    </div>
    </div>
    
  )
}

export default Videolist
