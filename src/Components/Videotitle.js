import React from 'react'

const Videotitle = ({videoInfo}) => {
    const {original_title , overview }= videoInfo
    
  return (
    <div className='my-44 p-16 w-5/12'>
      <h2 className='py-3 text-5xl font-bold'>{original_title}</h2>
      <p className='pb-4'>{overview}</p>
      <button className='bg-slate-400 p-2 px-8 rounded-sm mr-4 opacity-80'>⏯️Play</button>
      <button className='bg-slate-400 p-2 px-5 rounded-sm mr-3 opacity-80'> More Info</button>
    </div>
  )
}

export default Videotitle
