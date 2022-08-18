import './App.css';

import {
  Route,
  Routes
} from 'react-router-dom'

//Components
import Login from './components/Login'
import Listado from './components/Listado';
import Footer from './components/Footer';
import Header from './components/Header';
import Detalle from './components/Detalle';
import Contacto from './components/Contacto';
import Resultados from './components/Resultados';

//Styles
import './css/app.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  const addOrRemoveFromFavs = e => {
    console.log('OK FUNCIONA')
    const btn = e.currentTarget
    const parent = btn.parentElement
    console.log(parent)
  }
  
  return (
  <>
    <Header/>
    <Routes>
      <Route exact path='/' element={<Login/>}/>
      {/* detalle que vi en stackoverflow, el video esta desactualizado */}
      <Route exact path='/listado' element={<Listado addOrRemoveFromFavs={addOrRemoveFromFavs} /> }/>
      <Route exact path="/detalle" element={<Detalle/>}/>
      <Route exact path="/contacto" element={<Contacto/>} />
      <Route exact path="/resultados" element={<Resultados/>}/>
    </Routes>
    <Footer/>
  </>
  );
}

export default App;
