import React from 'react';
import{Link} from 'react-router-dom';
import '../styles/layouts/movieItem.scss'


function MovieSceneItem({movie}) {
  return (
    <>
    <img 
    className="imgMovie"
    src={movie.poster}
    alt="Foto de la pelicula"
    title={movie.movie}
    />
    <div>
    <span>{movie.movie}</span>
    <span>{movie.phrase}</span>
    <span>{movie.director}</span>
    
    </div>
<div>
  <a href={movie.audio} >Escuchar el audio</a>
  </div> 
  
  </>
  )
}

export default MovieSceneItem;