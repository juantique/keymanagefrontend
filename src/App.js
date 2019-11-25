import React from 'react';
//import logo from './logo.svg';
import './App.css';
import{
  BrowserRouter as Router,
  Route
} from "react-router-dom";
//import Registro from './Components/Apprecords';
import Registro from './Components/Recover';
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
      <div className="App">
      <header className="App-header">
        <div className="">
          <Name></Name>
        </div>
        <div className=".App-ingreso">
          <Ingreso></Ingreso>
        </div>
        <div>
       <ul>
      <li>primer elemento </li>
      <li>segundo elemento </li>
      <li>tercer elemento </li>
      </ul>
      </div>
      </header>
    </div>
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
