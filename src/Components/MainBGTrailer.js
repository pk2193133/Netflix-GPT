import React, { use } from 'react'
import { movieVideos, options } from '../Constants/constant';
import { useEffect } from 'react';

const MainBGTrailer = ({ movieId }) => {
const [movieStateForId, setMovieStateForId]=React.useState(null);
    // Fetch the movie trailer using the movieId
    const fetchMovieTrailer=async()=>{
        const response=await fetch(movieVideos+`${movieId}/videos`,options);
        const data=await response.json();
        console.log("Movie Trailer Data:",data);
        setMovieStateForId(data);
    }

    useEffect(() => {
        fetchMovieTrailer();
    }, [movieId]);

    const videoUrl = movieStateForId?.results[0]?.key;

  return (
    <div>{videoUrl && <iframe className="aspect-w-16 aspect-h-9" width="560" height="315" src={`https://www.youtube.com/embed/${videoUrl}?autoplay=1&mute=1`} ></iframe>}</div>
  )
}

export default MainBGTrailer