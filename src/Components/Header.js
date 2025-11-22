import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import { addUser, removeUser } from '../Utils/userSlice';
import { useNavigate } from 'react-router-dom';

const Header= () => {

const dispatch=useDispatch();
const navigate=useNavigate();

    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const {uid,email,displayName} = user;
    dispatch(addUser({uid:uid,email:email,displayName:displayName}));
    navigate('/browse');
    // ...
  } else {
    // User is signed out
    dispatch(removeUser());
    navigate('/');
  }
});
return () => unsubscribe();
    },[]);
  return (
    <div className="absolute top-0 left-0 p-4 z-50">
        <img className="w-32" src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="netfix-icon"/>
    </div>
  )
}

export default Header;