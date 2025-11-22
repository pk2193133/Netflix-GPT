import React, { useRef, useState } from 'react'
import Header from './Header';
import { validateLoginData } from '../Utils/validateLoginData';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate=useNavigate();
    const email=useRef(null);
    const password=useRef(null);
    const [isLoggedIn, setIsLoggedIn]=useState(true);
    const [errorMessage,setErrorMessage]=useState(null);

    const toggleLoginState = () => {
         // Logic to toggle login state
        setIsLoggedIn(!isLoggedIn);
       
    }

    const handleClick=()=>{
        //Logic to first validate inputs
        
        const emailValue=email.current.value;
        const passwordValue=password.current.value;

        const error=validateLoginData(emailValue,passwordValue);
        setErrorMessage(error);

        if(isLoggedIn){
            // Logic for sign in
            signInWithEmailAndPassword(auth, emailValue, passwordValue)
            .then((userCredential) => {
              // Signed in 
            const user = userCredential.user;
            console.log("User signed in:", user);
            
        })
            
          .catch((error) => {
             const errorCode = error.code;
               const errorMessage = error.message;
             setErrorMessage(errorCode+"-"+errorMessage);
         });
        }else{
            // Logic for sign up
            createUserWithEmailAndPassword(auth, emailValue, passwordValue )
               .then((userCredential) => {
                 // Signed up 
                 const user = userCredential.user;
                 console.log("User signed up:", user);
                 
      })
        .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode+"-"+errorMessage);
     });

        }

    }

  return (
    <div>
        <Header/>
        <div>
           <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9c363af5-4750-4f14-87d1-8125f5276db0/web/IN-en-20251027-TRIFECTA-perspective_b68b1528-3a10-4997-9f99-48ccbdb86626_large.jpg" alt="netflix-login-image" />
           <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/75 p-8 rounded-md">
           <h2 className="text-white text-2xl">{isLoggedIn ? "Sign In" : "Sign Up"}</h2>
           <input ref={email} className="p-2 my-2 w-full rounded-sm" type="email" placeholder="Email" />
           <input ref={password} className="p-2 my-2 w-full rounded-sm" type="password" placeholder="Password" />
           <p className="text-red-500">{errorMessage}</p>
           <button type="button" className="bg-red-600 w-full py-2 rounded-sm my-2" onClick={() => { handleClick() }}>{isLoggedIn ? "Sign In" : "Sign Up"}</button>
           <h3 className="text-gray-500 text-sm">New to Netflix? <span className="text-white" onClick={() => toggleLoginState()}>{isLoggedIn ? "Sign up now" : "Already have an account? Sign In"}</span></h3>
           </form>
        </div>
    </div>
  )
}

export default Login