import React from 'react'
import { SUPPORTED_LANGUAGE } from './Utils/Constants'
import { useDispatch, useSelector } from 'react-redux'
import { changeLanguage } from './Utils/Langslice';

const LanguageSelect = () => {
    const defaultlanguage = useSelector(store=>store.lang.Lang);
    const changeLang= useDispatch();
    const handlelanguagechange =(e)=>{
        changeLang(changeLanguage(e.target.value));

    }
    //console.log(defaultlanguage)
  return (
    <div>
      <select className='p-1.5 px-4 border border-solid border-white mx-2 text-white pr-2 bg-transparent cursor-pointer' 
      onChange={handlelanguagechange} defaultValue={defaultlanguage} >
         {SUPPORTED_LANGUAGE.map(lang=>(<option value={lang.identifier} key={lang.identifier}>{lang.name}</option>))} 
      
      
    </select>
    </div>
  )
}

export default LanguageSelect
