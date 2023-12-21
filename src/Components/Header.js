import React from 'react'
import { HEADER_LOGO_IMAGE } from './Utils/Constants';
import { signOut } from 'firebase/auth';
import { auth } from './Firebase';

const Header = (props) => {
    const {sign_in,setsign} = props
    
  return (<div className='absolute wx-[1400px] bg-gradient-to-b from-black z-30 top-0'>
    <div className='flex justify-between'>
         <div >
      <img src={HEADER_LOGO_IMAGE} alt="file not found" className="w-[170px] m-4 wx-[190px] " />
    </div>
    <div className='m-8 ml-[950px] flex'>
    {!sign_in && 
    (<div>
        <button className='p-1.5 px-4 border border-solid border-white mx-2 text-white'>English</button>
        <button className='bg-red-600 p-1.5 rounded-lg text-white px-8 mx-4' onClick={setsign}>Sign In</button>
    </div>
       
    )}
    </div>
    </div>

  </div>
       
  )
}

export default Header


export const BodyHeader =()=>{
  const SignOut = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
    
  }

  return (
    <div className='absolute w-screen h-28 bg-gradient-to-b from-black z-30 top-0'>
    <div className='flex justify-between'>
         <div >
      <img src={HEADER_LOGO_IMAGE} alt="file not found" className="w-[170px] m-4 wx-[190px] " />
    </div>
    <div className='m-8 ml-[950px] flex'>
    
    <div className='flex'>
        <button className='p-1.5 px-4 border border-solid border-white mx-2 text-sm text-white'>English</button>
        <button className='bg-red-600 p-1.5 rounded-lg text-white px-8 mx-4' onClick={SignOut} >Sign Out</button>
    </div>
       
    
    </div>
    </div>

  </div>
  )

}
