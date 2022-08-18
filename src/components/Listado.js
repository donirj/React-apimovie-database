import React from 'react'
import { useNavigate } from 'react-router-dom'
//useEffect permite hacer cosas cuando el componente recien se monta
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, Navigate } from 'react-router-dom'
import axios from  'axios'
import swal from '@sweetalert/with-react'

export default function Listado(props) {
  //esto levanta el token de localStorage

  let token = localStorage.getItem('token')

  console.log(props);

  //seter para setear el listado de pelis
  //el useState del final retorna un array con estas dos posiciones: moviesList (indice0) y setMoviesList (indice1)
  //el estado del componente está seteado en un array vacio
  //useState es un Hook que te permite añadir el estado de React a un componente de función. Más adelante hablaremos sobre otros Hooks.
  const [ moviesList, setMoviesList ] = useState([])

  useEffect(() => {
    const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=8508114bd8b2b74ec94d71e041f90d89&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate'
    //llamado con axios
    axios.get(endPoint)
      .then(response => {
        const apiData = response.data;
        console.log(apiData.results)
        //guardamos la info obtenida de la api en un estado, con el hook useState, lo que hace es que devuelve dos cosas: el valor del estado y una funcion que permite modificar el estado
        //el array va contener la info de apiData
        setMoviesList(apiData.results)
      })
      //catch permite agarrar los errores, si es que los hay
      .catch(error => {
        swal(<h2>Hubo errores, intenta mas tarde</h2>);
        console.log(error)
      })
  }, [setMoviesList]);

  console.log(moviesList)

  return (
    <>
    {/* si el token es falso
    { !token && <Link to="/"/>} */}
    <div className='row'>
      {/* ESTRUCTURA BASE */}
      {
        moviesList.map((oneMovie, idx) => {
          return (
            <div className='col-4' key={idx}>
              <Card style={{ width: '18rem' }}>
                <Card.Img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} />
                {/* <button 
                onClick={props.addOrRemoveFromFavs}
                
                className='favourite-btn'> 🧡 </button> */}
                <Card.Body>
                  <Card.Title>{oneMovie.title}</Card.Title>
                  <Card.Text>
                    {oneMovie.overview.slice(0, 100)}...
                  </Card.Text>
                  <Button variant="dark"><Link to={`/detalle?movieID=${oneMovie.id}`}>Go somewhere</Link></Button>
                </Card.Body>
              </Card> 
            </div>
          )
        })
      }
    </div>
    </>
  )
}
