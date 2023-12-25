import React from 'react'

const SearchGPTbar = ({SearchGPTplaceholder, Search}) => {
  return (
    <div className='w-6/12 h-24   bg-black absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      <form onSubmit={e=>e.preventDefault()} className='mt-6'>
        <input type="text" placeholder={SearchGPTplaceholder} className='w-7/12 p-3 mx-5'/>
        <input type="button" value={Search} className='text-white w-1/3 p-3 bg-red-600 rounded-lg'/>

      </form>
      </div>
  )
}

export default SearchGPTbar
