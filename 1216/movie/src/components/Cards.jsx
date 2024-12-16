import React from 'react'

const Cards = ({id,title,release_date,average,posterPath}) => {
  return (
    
    <div className="aMovie" key={id}>
      <div className="aMovie-card">
        <div className="aMovieimgBox">
          <img src={`https://image.tmdb.org/t/p/w300/${posterPath}`} alt={title} />
          <p className='average'>{average}</p>
        </div>
        <div className="textbox">
          <div className="textboxTitle"></div>
        </div>
        <div className="aMovieInfo">
          <h2 className="aMovieTitle">{title}</h2>
          <p className="aMovieDate">{release_date}</p>
        </div>
      </div>
    </div>
  
    
  )
}

export default Cards