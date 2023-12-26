import React from 'react'
import { BACKGORUND_IMAGE } from './Utils/Constants'
import { useSelector } from 'react-redux';
import { Lang } from './Utils/LanguageNetflix';
import SearchGPTbar from './SearchGPTbar';
import SearchGPTbarresults from './SearchGPTbarresults';

const SearchGPTpage = () => {
  const Language = useSelector(store=>store.lang?.Lang);
  const {Search,SearchGPTplaceholder}=Lang?.[Language]
  return (
    <div>
      <div className=' fixed '>
        <img alt=" bakgroundlogo" src={BACKGORUND_IMAGE}/>

      </div > 
      <SearchGPTbar Search={Search} SearchGPTplaceholder={SearchGPTplaceholder}></SearchGPTbar>
      <div className='' >
      <div className='absolute h-2/3 mt-72 overflow-y-scroll  '>
        <SearchGPTbarresults></SearchGPTbarresults>
      </div>

      </div>
      
      
    </div>
  )
}

export default SearchGPTpage
