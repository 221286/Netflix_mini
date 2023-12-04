import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [setsignin,getsignin] = useState(true);
     
     function toggglehandler(){
        getsignin(!setsignin);
     }
     console.log(setsignin);
  return (
    <div className=''>
      <Header sign_in={setsignin}></Header>
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="Main pic" />
      </div>

      <form className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/12 bg-black p-8 pl-16 text-white bg-opacity-80 rounded-lg'>
        <h1 className='pt-8 pb-4 text-3xl'>{setsignin ? "Sign In":"Sign Up"}</h1>
      {!setsignin && (<input type="text" placeholder='Full Name' size={40} className='p-4 border border-solid bg-gray-300 my-4 rounded-lg text-black border-black block'/>)}  
        <input type="email" placeholder='Email or phone number' size={40} className=' p-4  my-4 border border-solid rounded-lg bg-gray-300 text-black border-black block'/>
        <input type="password" placeholder='Password' size={40} className='p-4 border border-solid bg-gray-300 my-4 rounded-lg text-black border-black block'/>
        {!setsignin && (<input type="password" placeholder='Confirm Password' size={40} className='p-4 border border-solid bg-gray-300 my-4 rounded-lg text-black border-black block'/>)}  

        <input type="submit"  className='p-2 border border-solid border-black block text-center bg-red-600 mt-10 mb-14 w-full rounded-lg' value={setsignin ? "Sign In":"Sign Up"} />
       <p className='text-gray-300'>New to Neflix ?  <span className='text-white font-bold cursor-pointer hover:underline' onClick={toggglehandler}> Sign up now</span></p>

      </form>

    </div>
  )
}

export default Login
