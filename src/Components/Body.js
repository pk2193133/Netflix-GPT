import React, { useEffect } from 'react'
import Header from './Header'
import Login from './Login'
import Browse from './Browse';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../Utils/userSlice';
import {  removeUser } from '../Utils/userSlice';


const Body = () => {
    
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/browse" element={<Browse />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Body; 