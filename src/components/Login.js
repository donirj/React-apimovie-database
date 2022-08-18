import axios from  'axios'
import React from 'react'
import swal from '@sweetalert/with-react'
import { useNavigate } from 'react-router-dom'
import Listado from './Listado'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Login() {

    const navigate = useNavigate();

    console.log('NAVIGATE', navigate)

    const submitHandler = (e) => {
        e.preventDefault();

        //aqui se captura el campo email
        const email = e.target.email.value;
        //aqui se captura el campo password
        const password = e.target.password.value;
        
        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        //aqui evaluamos si se cumplen el formato de email
        console.log(regexEmail.test(email))

        if(email === '' || password === '' ) {            
            swal({
                title: "Los campos no pueden estar vacíos!",
                icon: "warning",
              });
            console.log('los campos no pueden estar vacios');
            return;
        }
        //si mail es distinto a vacio y si el test da falso
        if(email !== '' && !regexEmail.test(email)) {
            swal({
                title: "Debes escribir una direccion de mail válida!",
                icon: "warning",
              });
            console.log('debes escribir una direccion de mail válida')
            return;
        }
        //si el mail es diferente a este o el password lo es
        if(email !== 'challenge@alkemy.org' || password !== 'react') {
            swal({
                title: "Credenciales invalidas!",
                icon: "warning",
              });
            console.log('Credenciales invalidas');
            return;
        }

        //las peticiones de tipo post son para enviar info, el usuario o emails y password
        axios
            .post('http://challenge-react.alkemy.org', { email, password })
            //then va tener un callback que va tener la respuesta
            //la peticion no se hará hasta completar procesos de validacion
            .then(res => {
                swal({
                    title: "Perfecto, ingresaste correctamente!",
                    icon: "success",
                  });
                console.log('token', res.data);
                const tokenRecibido = res.data.token;
                //dos argumentos: nombre de la propiedad donde guardas la info, el segundo es la propiedad
                //setItem permite setear en una propiedad, el token recibido de la api
                //localStorage solo almacena strings, cualquier otro valor debe convertirse a string
                localStorage.setItem('token', tokenRecibido);
                //comando de consola consola: localStorage.getItem('miNombre') va mostrar la variable que tenia arriba
                //comando de consola (para limpiar consola): localStorage.clear()
                //aqui indicamos a donde navegar en caso de exito
                navigate('./Listado')
            })
    }

    let token = localStorage.getItem('item')

  return (
    <>
      <div className='loginBox'>
        <Form className='loginForm' onSubmit={submitHandler}>
        <h2>Formulario de login</h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo electrónico</Form.Label>
            <br/>
                <Form.Control type="text" name="email"/>
            <br/>
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <br/>
            <Form.Control type="password" name="password"/>
            <br/>
            <Button type='submit' variant="dark">Ingresar</Button>
          </Form.Group>
        </Form>
        {/* <Button variant="primary">Primary</Button>{' '}
        <Button variant="secondary">Secondary</Button>{' '}
        <Button variant="success">Success</Button>{' '}
        <Button variant="warning">Warning</Button>{' '}
        <Button variant="danger">Danger</Button> <Button variant="info">Info</Button> */}
      </div>
    </>
  )
}
