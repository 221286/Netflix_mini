import React from 'react'
import { BACKGORUND_IMAGE } from './Utils/Constants'
import { useSelector } from 'react-redux';
import { Lang } from './Utils/LanguageNetflix';
import SearchGPTbar from './SearchGPTbar';

const SearchGPTpage = () => {
  const Language = useSelector(store=>store.lang?.Lang);
  const {Search,SearchGPTplaceholder}=Lang?.[Language]
  return (
    <div>
      <div className=' absolute '>
        <img alt=" bakgroundlogo" src={BACKGORUND_IMAGE}/>

      </div>
      <SearchGPTbar Search={Search} SearchGPTplaceholder={SearchGPTplaceholder}></SearchGPTbar>
      
    </div>
  )
}

export default SearchGPTpage
