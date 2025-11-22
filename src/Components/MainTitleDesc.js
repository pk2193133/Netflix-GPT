import React from 'react'

const MainTitleDesc = ({ title, desc }) => {
  return (
    <div className='absolute'>
        <h1>{title}</h1>
        <p>{desc}</p>
        <div>
            <button>Play</button>
            <button>More Info</button>
        </div>
    </div>
  )
}

export default MainTitleDesc