import React from 'react'
import { SUPPORTED_LANGUAGE } from './Utils/Constants'
import { useDispatch, useSelector } from 'react-redux'
import { changeLanguage } from './Utils/Langslice';

const LanguageSelect = () => {
    const defaultlanguage = useSelector(store=>store.lang.Lang);
    const Modes = useSelector(store=>store.mode.darkmode);
    const changeLang= useDispatch();
    const handlelanguagechange =(e)=>{
        changeLang(changeLanguage(e.target.value));

    }
     
    const setmode= Modes ? 'border border-solid border-white text-white' : 'border border-solid border-black text-black'; 
    //console.log(defaultlanguage)
  return (
    <div>
      <select className={'p-1.5 px-4  mx-2  pr-2 bg-transparent cursor-pointer '+ setmode} 
      onChange={handlelanguagechange} defaultValue={defaultlanguage} >
         {SUPPORTED_LANGUAGE.map(lang=>(<option value={lang.identifier} key={lang.identifier}>{lang.name}</option>))} 
      
      
    </select>
    </div>
  )
}

export default LanguageSelect
