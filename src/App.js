import React from 'react';
//import logo from './logo.svg';
import './App.css';
import{ BrowserRouter as Router} from "react-router-dom";
import Route from 'react-router-dom/Route';


import Recovery from './Components/Apprecovery';
import Urls1 from './Components/Appenlaces';
//import Registro from './Components/Apprecords';
import Registro from './Components/Apprecovery';
import Titulofinal from './Componentes_primarios/Titulo';
import Cajafinal from './Componentes_primarios/Cajatexto';
import Passwordfinal from './Componentes_primarios/Cajapassword';
import Buttonfinal from './Componentes_primarios/Button';
import Option from './Components/Appoption';
import Texto from './Componentes_primarios/Texto';

/*
function CajaTexto(props){
  return(
    <div><input type="text" name="nombredelacaja" placeholder={props.PlaceHolderUsuario}/></div>  
  )
}
*/


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
        <div className="App-ingreso">
          <div className="App-ubicacion"><Cajafinal placeholderCajaFinal = "Iniciar Sesion"></Cajafinal></div>
          <div className="App-ubicacion"><Passwordfinal placeholderPasswordFinal="Contraseña"></Passwordfinal></div>
          <div className="App-ubicacion"><Buttonfinal></Buttonfinal></div>
          <p><Texto descripcionenlace="¿Has olvidado el id de ingreso o contraseña?" hreftextofinal="http://www.google.com"></Texto></p>
          <p><a href="http://www.google.com">Nuevo Usuario</a></p>
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
      <header className="App-header">
        <div className="">
          <Name></Name>
        </div>
        <div className=".App-ingreso">
          <Ingreso></Ingreso>
        </div>
      </header>
      </div>
    <div>
        <Route path="/Appoption" exact render={
          () => {
            return (<Option></Option>);
          }
        }>
        </Route>
    </div>
    <div>
        <Route path="/" exact render={
          () => {
            return (<Option></Option>);
          }
        }>
        </Route>
    </div>
    </Router>
    )
  }
}

/*
class FormRegistroDatosPersonales extends React.Component{
  render(){
    return(      
      <div>
        <CajaTexto></CajaTexto>   
        <CajaTexto></CajaTexto>
        <CajaTexto></CajaTexto>
        <CajaTexto PlaceHolderUsuario="Usuario"></CajaTexto>
        <CajaTexto></CajaTexto>
        <CajaTexto></CajaTexto>
        <CajaTexto></CajaTexto>        
      </div>

    )
  }
}
*/
export default App;
