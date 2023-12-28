import React from 'react'
import { useSelector } from 'react-redux'
import VideoCards from './VideoCards';

const SearchGPTbarresults = () => {

    const selectGPTmovievies = useSelector(store=>store.SearchGPT?.SearchGPTmovie);
    if(!selectGPTmovievies)
    return
    
  return (
    <div className='p-3 md:p-6 flex flex-wrap mx-[1.65rem] md:mx-16'>
      {selectGPTmovievies.map(movielist=>movielist?.results.map(movie=>(<VideoCards image={movie?.poster_path} key={movie?.id} />)))}
    </div>
  )
}

export default SearchGPTbarresults
