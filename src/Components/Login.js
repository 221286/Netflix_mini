import React, {  useRef, useState } from 'react'
import Header from './Header';
import { validation , Signup_validation} from './Utils/validation';
import { BACKGORUND_IMAGE } from './Utils/Constants';
import { auth } from './Firebase';
import { createUserWithEmailAndPassword,  signInWithEmailAndPassword } from 'firebase/auth';



const Login = () => {
    const [setsignin,getsignin] = useState(true);
    const [setwarning,getwarning] = useState(null);
    const name = useRef(null);
    const mail = useRef(null);
    const passwords = useRef(null);
    const confirm_password = useRef(null);
    
     
     
    
    


    function toggglehandler(){
        getsignin(!setsignin);
        getwarning(null);
     }
     function handle_Signin(){
        getwarning(validation(mail.current.value, passwords.current.value));
        if(setwarning === null){
          signInWithEmailAndPassword(auth, mail.current.value, passwords.current.value)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      getwarning("Signed In");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      getwarning(errorCode+"is"+errorMessage);
      // ..
    });
  
         }
        
        
         
     }
     function handle_SignUp(){
      getwarning(Signup_validation(mail.current.value, passwords.current.value,confirm_password.current.value));
       if(setwarning === null){
        createUserWithEmailAndPassword(auth, mail.current.value, passwords.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    getwarning("Signed In");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    getwarning(errorCode+"is"+errorMessage);
    // ..
  });

       }
     }
  return (
    <div className=''>
      <Header sign_in={setsignin} setsign={toggglehandler} getsignin={getsignin}></Header>
      <div className='absolute w-screen h-screen'>
        <img src={BACKGORUND_IMAGE} alt="Main pic" />
      </div>

      <form onSubmit={(e=>e.preventDefault())} className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/12 bg-black p-8 pl-16 text-white bg-opacity-80 rounded-lg'>
        <h1 className='pt-8 pb-4 text-3xl'>{setsignin ? "Sign In":"Sign Up"}</h1>
      {!setsignin && (<input type="text" ref={name} placeholder='Full Name' size={40} className='p-4 border border-solid bg-gray-300 my-4 rounded-lg text-black border-black block'/>)}  
        <input type="email" placeholder='Email ' ref={mail} size={40} className=' p-4  my-4 border border-solid rounded-lg bg-gray-300 text-black border-black block'/>
        <input type="password" placeholder='Password' size={40}  ref={passwords} className='p-4 border border-solid bg-gray-300 my-4 rounded-lg text-black border-black block'/>
        {!setsignin && (<input type="password" ref={confirm_password} placeholder='Confirm Password' size={40} className='p-4 border border-solid bg-gray-300 my-4 rounded-lg text-black border-black block'/>)}  
         <p className='p-1 font-serif text-orange-300'>{setwarning}</p>
       { setsignin ? (<input type="submit" onClick={handle_Signin} className='p-2 border border-solid border-black block text-center bg-red-600 mt-10 mb-14 w-full rounded-lg' value="Sign In" />):
       (<input type="submit" onClick={handle_SignUp} className='p-2 border border-solid border-black block text-center bg-red-600 mt-10 mb-14 w-full rounded-lg' value="Sign Up" />)}
        
       <p className='text-gray-300'>{setsignin ? "New to Netflix ?":"Already Registerd ? "} <span className='text-white font-bold cursor-pointer hover:underline' onClick={toggglehandler}> {setsignin ? "Sign Up Now":"Sign In Now"}</span></p>

      </form>

    </div>
  )
}

export default Login
