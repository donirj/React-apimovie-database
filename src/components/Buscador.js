import React from 'react'
import Button from 'react-bootstrap/Button';
import swal from '@sweetalert/with-react'
import { useNavigate } from 'react-router-dom';

function Buscador() {
  let navigate = useNavigate();
  //funcion que guarda el submit
  const submitHandler = e => {
    //preventDefault evita la recarga
   e.preventDefault();
   //constante que guarda el valor del input
   const keyword = e.currentTarget.keyword.value.trim();
   console.log(keyword)
   //si keyword es igual a 0 pide que escribas una palabra clave
   if(keyword.length === 0) {
     swal(<h2>tiene que escribir una palabra clave</h2>)
   } else if (keyword.length < 4) {
     swal(<h2>tiene que escribir mas de 4 caracteres</h2>)
   } else {
     e.currentTarget.keyword.value = ''; 
     navigate(`/resultados?keyword=${keyword}`)
   }
  }
  return (
    //onSubmit envia la accion
    <form className='d-flex items-center' onSubmit={submitHandler}>
        <label>
          <input className='form-control' type="text" name="keyword" placeholder='Escribe una palabra clave...'/>
        </label>
          <Button className='btn btn-success' type='submit' variant="dark">Buscar</Button>
    </form>
  )
}

export default Buscador