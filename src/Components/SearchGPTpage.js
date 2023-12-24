import React from 'react'
import { BACKGORUND_IMAGE } from './Utils/Constants'

const SearchGPTpage = () => {
  return (
    <div>
      <div className=' absolute '>
        <img alt=" bakgroundlogo" src={BACKGORUND_IMAGE}/>

      </div>
      <div className='w-6/12 h-24   bg-black absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      <form onSubmit={e=>e.preventDefault()} className='mt-6'>
        <input type="text" placeholder='What would you like to watch today ?' className='w-7/12 p-3 mx-5'/>
        <input type="button" value="Search" className='text-white w-1/3 p-3 bg-red-600 rounded-lg'/>

      </form>
      </div>
      
    </div>
  )
}

export default SearchGPTpage
