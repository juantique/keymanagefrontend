import React from 'react';
//import logo from './logo.svg';
import './App.css';
import{ BrowserRouter as Router, Link} from "react-router-dom";
import Route from 'react-router-dom/Route';

//COMPONENTES PRIMARIOS:
import Titulofinal from './Componentes_primarios/Titulo';
import Cajafinal from './Componentes_primarios/Cajatexto';
import Passwordfinal from './Componentes_primarios/Cajapassword';
import Buttonfinal from './Componentes_primarios/Button';
import Texto from './Componentes_primarios/Texto';

// PAGINAS WEB APP JS:
import Recovery from './Components/Apprecovery';
import Option from './Components/Appoption';
import Recoverydos from './Components/Apprecoverydos';
import Registro from './Components/Apprecords';

class Name extends React.Component{
  render(){
    return(
      <div>
        <Titulofinal></Titulofinal>
      </div>
    )
  }
}

class Ingreso extends React.Component{

  render(){    
    return(      
      <div className="App-formulario">        
      <div><Name></Name></div>
        <div className="App-ingreso">
          <div className="App-ubicacion"><Cajafinal placeholderCajaFinal = "Iniciar Sesion"></Cajafinal></div>
          <div className="App-ubicacion"><Passwordfinal placeholderPasswordFinal="Contraseña"></Passwordfinal></div>
          <div className="App-ubicacion"><Buttonfinal></Buttonfinal></div>
          <p>
            <Link to="/Recovery">¿Has olvidado el id de ingreso o contraseña?</Link>
          </p>
          <p>
            <Link to="/Records">Nuevo Usuario</Link>
          </p>
        </div>
      </div>
    )
  }
}
//<FormLogin TituloPrincipal="KeyManage" PlaceHolderUsuario="Usuario"></FormLogin>
class App extends React.Component{
  render(){
    return(
      <Router>
      <div className="App">
      
      <Route path="/" exact strict component={Ingreso}></Route>
      <Route path="/Option" exact strict component={Option}></Route>
      <Route path="/Recovery" exact strict component={Recovery}></Route>
      <Route path="/Recoverydos" exact strict component={Recoverydos}></Route>
      <Route path="/Records" exact strict component={Registro}></Route>
     

      </div>  
  
    </Router>
    )
  }
}
export default App;
