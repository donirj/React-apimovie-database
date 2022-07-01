import { useEffect } from 'react';
import React from 'react'
import { Navigate } from 'react-router-dom'
//todos los llamados a al api deben hacerse desde useEffect


export default function Detalle() {
  let token = localStorage.getItem('token')
  
  let query = new URLSearchParams(window.location.search);
  let movieID = query.get('movieID')
  //movie ID
  console.log(movieID)

  useEffect(() => {
    console.log(movieID)
  }, [])

  return (
    <>
      {/* esto deberia prohibir ir a detalles si no hay login */}
      { !token && <Navigate to="/"/>}
      <h2>detalle de la pelicula</h2>
      <div className='row'>
        <div className='col-4'>
          imagen
        </div>
        <div className='col-8'>
          <h2>titulo: false</h2>
          <h5>generos</h5>
          <ul>
            <li>genero 1</li>
            <li>genero 2</li>
            <li>genero 3</li>
          </ul>
        </div>
      </div>
    </>
  )
}
