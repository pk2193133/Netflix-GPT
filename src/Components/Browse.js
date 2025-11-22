import React, { use } from 'react'
import Header from './Header';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import MainMovieComponent from './MainBGTrailer';
import SecondaryComponent from './SecondaryComponent';
import useFetchNowPlayingMovies from '../Utils/useFetchNowPlayingMovies';
import { useSelector } from 'react-redux';


const Browse = () => {

    const navigate=useNavigate();
    const movieSelector=useSelector((state)=>state.movies.nowPlayingMovies);
    console.log("Now Playing Movies in Browse Component:", movieSelector);  

const handleSignOut=()=>{
    signOut(auth).then(() => {
  // Sign-out successful.
  navigate('/');
}).catch((error) => {
  navigate('/error');
});
}

useFetchNowPlayingMovies();


  return (
    movieSelector &&
    <div>
        <div className="top-0 left-0 p-4 z-50 flex items-center justify-between">
           <img className="w-32" src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="netfix-icon" />
           <h1 className="text-black font-bold" onClick={handleSignOut}>Sign out</h1>
        </div>
        <div><MainMovieComponent movieId={movieSelector[0]?.id} title={movieSelector[0]?.title} desc={movieSelector[0]?.overview} /></div>
        <div><SecondaryComponent /></div>
        </div>
  )
}

export default Browse