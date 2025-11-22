import React, { use } from 'react'
import { nowPlayingMoviesUrl, options } from '../Constants/constant';
import { useDispatch } from 'react-redux';
import { addMovies } from './movieSlice';
import { useEffect } from 'react';

const useFetchNowPlayingMovies = () => {
//const moviesSelector=useSelector((state)=>state.movies.nowPlayingMovies);
const dispatch=useDispatch();

  useEffect(() => {
    const fetchNowPlayingMovies = async () => {
      const movies = await fetch(nowPlayingMoviesUrl, options);
      const json = await movies.json();
      dispatch(addMovies(json.results));
    };
    fetchNowPlayingMovies();
  }, []);
};

export default useFetchNowPlayingMovies;
