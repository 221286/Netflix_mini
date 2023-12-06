import React from 'react'

const Header = (props) => {
    const {sign_in} = props
    console.log(sign_in)
  return (<div className='absolute wx-[1400px] bg-gradient-to-b from-black z-30 top-0'>
    <div className='flex justify-between'>
         <div >
      <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="file not found" className="w-[170px] m-4 wx-[190px] " />
    </div>
    <div className='m-8 ml-[950px] flex'>
    {!sign_in && 
    (<div>
        <button className='p-1.5 px-4 border border-solid border-white mx-2 text-white'>English</button>
        <button className='bg-red-600 p-1.5 rounded-lg text-white px-8 mx-4'>Sign In</button>
    </div>
       
    )}
    </div>
    </div>

  </div>
       
  )
}

export default Header
