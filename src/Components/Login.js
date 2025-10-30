import React, { useState } from 'react'
import Header from './Header';

const Login = () => {

    const [isLoggedIn, setIsLoggedIn]=useState(true);

    const toggleLoginState = () => {
         // Logic to toggle login state
        setIsLoggedIn(!isLoggedIn);
       
    }

  return (
    <div>
        <Header/>
        <div>
           <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9c363af5-4750-4f14-87d1-8125f5276db0/web/IN-en-20251027-TRIFECTA-perspective_b68b1528-3a10-4997-9f99-48ccbdb86626_large.jpg" alt="netflix-login-image" />
           <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/75 p-8 rounded-md">
           <h2 className="text-white text-2xl">{isLoggedIn ? "Sign In" : "Sign Up"}</h2>
           <input className="p-2 my-2 w-full rounded-sm" type="email" placeholder="Email" />
           <input className="p-2 my-2 w-full rounded-sm" type="password" placeholder="Password" />
           <button type="button" className="bg-red-600 w-full py-2 rounded-sm my-2">{isLoggedIn ? "Sign In" : "Sign Up"}</button>
           <h3 className="text-gray-500 text-sm">New to Netflix? <span className="text-white" onClick={() => toggleLoginState()}>{isLoggedIn ? "Sign up now" : "Already have an account? Sign In"}</span></h3>
           </form>
        </div>
    </div>
  )
}

export default Login