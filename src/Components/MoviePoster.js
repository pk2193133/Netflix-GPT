import React from 'react'

const MoviePoster = ({ posterPath }) => {
  return (
    <div className='min-w-[200px]'>
        <img src={`https://image.tmdb.org/t/p/w500/${posterPath}`} alt="Movie Poster" />
    </div>
  )
}

export default MoviePoster