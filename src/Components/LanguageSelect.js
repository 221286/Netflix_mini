import React from 'react'
import { SUPPORTED_LANGUAGE } from './Utils/Constants'
import { useDispatch } from 'react-redux'
import { changeLanguage } from './Utils/Langslice';

const LanguageSelect = () => {
    const changeLang= useDispatch();
    const handlelanguagechange =(e)=>{
        changeLang(changeLanguage(e.target.value));

    }
  return (
    <div>
      <select className='p-1.5 px-4 border border-solid border-white mx-2 text-white pr-2 bg-transparent' 
      onChange={handlelanguagechange}>
         {SUPPORTED_LANGUAGE.map(lang=>(<option value={lang.identifier} key={lang.identifier}>{lang.name}</option>))} 
      
      
    </select>
    </div>
  )
}

export default LanguageSelect
