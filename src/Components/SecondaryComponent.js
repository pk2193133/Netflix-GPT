import React from 'react'
import { useSelector } from 'react-redux';
import { backdropImageUrl } from '../Constants/constant';
import MoviePoster from './MoviePoster';

const SecondaryComponent = () => {

    const movies=useSelector((state)=>state.movies.nowPlayingMovies);

  return (
    <div>
        <h2 className='text-black text-2xl font-bold ml-4 mb-2'>Now Playing Movies</h2>
    <div className='flex overflow-x-scroll space-x-4 p-4'>
        {movies && movies.map((movies)=>{
            return <MoviePoster key={movies.id} posterPath={movies.backdrop_path} />;
        })}
    </div>
    </div>
  )
}

export default SecondaryComponent