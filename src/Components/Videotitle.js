import React from 'react'

const Videotitle = ({videoInfo}) => {
    const {original_title , overview }= videoInfo
    
  return (
    <div className='my-4 p-16 w-screen absolute text-white bg-gradient-to-r from-black aspect-video'>
        <div className='w-5/12 my-44'>
        <h2 className='py-3 text-5xl  font-bold'>{original_title}</h2>
      <p className='pb-4 '>{overview}</p>
      <button className='bg-white p-2 px-12 rounded-sm mr-4 text-black hover:opacity-70'> Play</button>
      <button className='bg-slate-400 p-2 px-8 rounded-sm mr-3 opacity-80'> More Info</button>

        </div>
      
    </div>
  )
}

export default Videotitle
