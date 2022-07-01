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

//Styles
import './css/app.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
  <>
    <Header/>
    <Routes>
      <Route exact path='/' element={<Login/>}/>
      <Route exact path='/listado' element={<Listado/>}/>
      <Route exact path="/detalle" element={<Detalle/>}/>
    </Routes>
    <Footer/>
  </>
  );
}

export default App;
