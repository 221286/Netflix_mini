import React, { useEffect, useState } from 'react'
import { HEADER_LOGO_IMAGE } from './Utils/Constants';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './Firebase';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { additem, removeitem } from './Utils/Userslice';
import LanguageSelect from './LanguageSelect';

const Header = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [browseheader,getbrowseheader] = useState(true);
  const {sign_in,setsign,Signin} = props;
  //const browserToggle =()=>{
    //getbrowseheader(!browseheader);

  //};

  const SignOut = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
    
  };
  useEffect(()=>{
    const unsubscribe =onAuthStateChanged(auth, (user) => {
      if (user) {
        //console.log(user);
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        dispatch(additem({uid:uid,display_name:user.displayName,email:user.email}));
        navigate("/browse");
        getbrowseheader(false);
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeitem());
        getbrowseheader(true);
        
        navigate("/");
      }
    });
    return ()=>unsubscribe();
},[]);
  
    
    
  return (<div className='absolute w-screen bg-gradient-to-b from-black z-30 top-0'>
    <div className='flex justify-between'>
         <div >
      <img src={HEADER_LOGO_IMAGE} alt="file not found" className="w-[170px] m-4 wx-[190px] " />
    </div>
    <div className='m-8  flex'>
      <LanguageSelect></LanguageSelect>
    
    {!sign_in && browseheader &&
    (<div>
        
        <button className='bg-red-600 p-1.5 rounded-lg text-white px-8 mx-4' onClick={setsign}>{Signin}</button>
    </div>
       
    )}
    
    {!browseheader && 
    (
    
    <div className='flex '>
      <button className='bg-red-600 p-1.5 rounded-lg text-white px-8 mx-4'>Search GPT</button>
        
        <button className='bg-red-600 p-1.5 rounded-lg text-white px-8 mx-4' onClick={SignOut} >Sign Out</button>
    </div>
       
    
    )}
    </div>
    </div>

  </div>
       
  )
}

export default Header



  
