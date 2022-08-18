import { useEffect, useState } from 'react';
import React from 'react'
import { Navigate } from 'react-router-dom'
//todos los llamados a al api deben hacerse desde useEffect
import axios from  'axios'

export default function Detalle() {
  let token = localStorage.getItem('token')
  
  let query = new URLSearchParams(window.location.search);
  let movieID = query.get('movieID')
  //movie ID
  console.log(movieID)

  const [movie, setMovie] = useState(null)

  //por sugerencia todos los llamados a la api deben hacerse dentro del useEffect
  useEffect(() => {
    //la url de detalles, lleva mi key y el IDMovie
    const endPoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=8508114bd8b2b74ec94d71e041f90d89&language=en-US`
    console.log('movieID', movieID)
    console.log('object', endPoint)
    //implementar el endpoint que necesito
    //cuandp obtengo el llamado a api, seteo la movie en setMovie
    axios.get(endPoint).then(response => {
      const movieData = response.data;
      setMovie(movieData)
      //guardamos la info obtenida de la api en un estado, con el hook useState, lo que hace es que devuelve dos cosas: el valor del estado y una funcion que permite modificar el estado
      //el array va contener la info de apiData
    })
    //catch permite agarrar los errores, si es que los hay
    .catch(error => {
      console.log('Hubo errores, intenta mas tarde');
      console.log(error)
    })
  }, [movieID])

  return (
    <>
      {/* esto deberia prohibir ir a detalles si no hay login */}
      { !token && <Navigate to="/"/>}
      {!movie && <p>Cargando...</p>}
      { movie &&
        <>
          <h2>Titulo: {movie.title}</h2>
          <div className='row'>
            <div className='col-4'>
            <img alt='poster' height={300} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            </div>
            <div className='col-8'>
              <h2>Fecha de estreno: {movie.release_date}</h2>
              <h5>Reseña</h5>
              <p>{ movie.overview }</p>
              <h5>Rating: { movie.vote_average}</h5>
              <ul>
                { movie.genres.map(oneGenre => <li key={oneGenre.id}>{oneGenre.name}</li>)}
              </ul>
            </div>
          </div>
        </>
      }
    </>
  )
}
