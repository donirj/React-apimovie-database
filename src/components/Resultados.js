import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, Navigate } from 'react-router-dom'
import swal from '@sweetalert/with-react'

function Resultados() {
    let query = new URLSearchParams(window.location.search);
    let keyword = query.get('keyword');

    const [moviesResults, setMoviesResults] = useState([]);

    useEffect(() => {
        //endpoint para hacer la busqueda
        const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=8508114bd8b2b74ec94d71e041f90d89&language=en-US&query=${keyword}`
        
        axios.get(endPoint).then(response => {
            //resultados de la busqueda
            const moviesArray = response.data.results;

            //si no hay resultados de la busqueda, te arroja error
            if(moviesArray.length === 0) {
                swal(<h2>Tu busqueda no arrojó resultados</h2>)
            }

            setMoviesResults(moviesArray)
        })
        .catch(error => console.log(error))
    })//dentro de este () el[keyboard] que arregla el desmadre de busqueda sin coincidencia, ver clase 4 unidad 6 

  return (
    <>
        <h2>Buscaste: <em>{keyword}</em></h2>
        {moviesResults.length === 0 && <h3>no hay resultados</h3>}
        <div className='row'>
      {/* ESTRUCTURA BASE */}
      {
        moviesResults.map((oneMovie, idx) => {
          return (
            <div className='col-4' key={idx}>
                <Card style={{ width: '15rem' }}>
                    <Card.Img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} />
                    <Card.Body>
                    <Card.Title>{oneMovie.title}</Card.Title>
                    {/* <Card.Text>
                        {oneMovie.overview.slice(0, 100)}...
                    </Card.Text> */}
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

export default Resultados