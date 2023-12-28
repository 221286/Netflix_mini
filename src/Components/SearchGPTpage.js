import React from 'react'

import { useSelector } from 'react-redux';
import { Lang } from './Utils/LanguageNetflix';
import SearchGPTbar from './SearchGPTbar';
import SearchGPTbarresults from './SearchGPTbarresults';
import Backgroundimage from './Backgroundimage';

const SearchGPTpage = () => {
  const Language = useSelector(store=>store.lang?.Lang);
  const {Search,SearchGPTplaceholder}=Lang?.[Language]
  return (
    <div>
      <Backgroundimage></Backgroundimage>
      <SearchGPTbar Search={Search} SearchGPTplaceholder={SearchGPTplaceholder}></SearchGPTbar>
      <div className='' >
      <div className='absolute h-2/3 mt-72 sm:mt-[28rem] overflow-y-scroll  '>
        <SearchGPTbarresults></SearchGPTbarresults>
      </div>

      </div>
      
      
    </div>
  )
}

export default SearchGPTpage
