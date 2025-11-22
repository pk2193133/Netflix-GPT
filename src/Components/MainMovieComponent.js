import React from 'react'

const MainMovieComponent = ({ movieId, title, desc }) => {
    
  return (
    <div>
        <div><MainBGTrailer movieId={movieId} /></div>
        <div><MainTitleDesc title={title} desc={desc} /></div>
    </div>
  )
}

export default MainMovieComponent