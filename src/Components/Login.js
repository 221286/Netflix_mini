import React, {  useRef, useState } from 'react'
import Header from './Header';
import { validation , Signup_validation} from './Utils/validation';
import { BACKGORUND_IMAGE } from './Utils/Constants';
import { auth } from './Firebase';
import { createUserWithEmailAndPassword,  signInWithEmailAndPassword } from 'firebase/auth';
import { Lang } from './Utils/LanguageNetflix';
import { useSelector } from 'react-redux';



const Login = () => {
    const [setsignin,getsignin] = useState(true);
    const [setwarning,getwarning] = useState(null);
    const name = useRef(null);
    const mail = useRef(null);
    const passwords = useRef(null);
    const confirm_password = useRef(null);
    const Language = useSelector(store=>store.lang?.Lang);
    
    
     
     
    
    


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
      getwarning("💓");
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
     const {Signin,SignUp,fullname,email,password,confirmpassword,SignUpnow,Signinnow,NewNetflix,Alreadyaccount}=Lang?.[Language]

  return (
    <div className='w-screen aspect-square'>
      <Header sign_in={setsignin} setsign={toggglehandler} getsignin={getsignin} Signin={Lang?.[Language]?.Signin}></Header>
      <div className='absolute w-screen aspect-square'>
        <img src={BACKGORUND_IMAGE} alt="Main pic" />
      </div>

      <form onSubmit={(e=>e.preventDefault())} className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/12 bg-black p-8 pl-16 text-white bg-opacity-80 rounded-lg'>
        <h1 className='pt-8 pb-4 text-3xl'>{setsignin ? Signin:SignUp}</h1>
      {!setsignin && (<input type="text" ref={name} placeholder={fullname}  className='p-4 border border-solid w-96 bg-gray-300 my-4 rounded-lg text-black border-black block'/>)}  
        <input type="email" placeholder={email} ref={mail}  className=' p-4  my-4 border border-solid w-96 rounded-lg bg-gray-300 text-black border-black block'/>
        <input type="password" placeholder={password}   ref={passwords} className='p-4 w-96 border border-solid bg-gray-300 my-4 rounded-lg text-black border-black block'/>
        {!setsignin && (<input type="password" ref={confirm_password} placeholder={confirmpassword}  className='p-4 w-96 border border-solid bg-gray-300 my-4 rounded-lg text-black border-black block'/>)}  
         <p className='p-1 font-serif text-orange-300'>{setwarning}</p>
       { setsignin ? (<input type="submit" onClick={handle_Signin} className='p-2 cursor-pointer border border-solid border-black block text-center bg-red-600 mt-10 mb-14 w-full rounded-lg' value={Signin} />):
       (<input type="submit" onClick={handle_SignUp} className='p-2 cursor-pointer border border-solid border-black block text-center bg-red-600 mt-10 mb-14 w-full rounded-lg' value={SignUp} />)}
        
       <p className='text-gray-300'>{setsignin ? NewNetflix:Alreadyaccount} <span className='text-white font-bold cursor-pointer hover:underline' onClick={toggglehandler}> {setsignin ? SignUpnow:Signinnow}</span></p>

      </form>

    </div>
  )
}

export default Login
