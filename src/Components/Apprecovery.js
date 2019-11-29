import React from 'react';
import "./Recovery.css";
import Recoverydos from './Apprecoverydos';
import{ BrowserRouter as Router, Link, Redirect} from "react-router-dom";
//import logo from './logo.svg';

class Recovery extends React.Component {

  recuperarpass = (e) => {
    e.preventDefault();
    console.log("hola");
    //<Redirect to="/Apprecoverydos"></Redirect>
  }
    render() {
      return (
      <div>
        <div class="login-box">
          <h1>keyblocking</h1>
          <form onSubmit={this.recuperarpass}>
            <label for="username">
              ¿Quieres recuperar la contraseña de Usuario?
            </label>
            <br />
            <label for="username">Introduzca el Correo Electronico:</label>
            <br />
            <input type="text" placeholder="  Ingrese usuario" />
            <input type="submit" value="Continuar" />
            <br />
            <Link to="/">Volver a la Pagina Principal</Link>
            <br />
            <br />
            <Link to="/Records">Nuevo Usuario</Link>
          </form>
        </div>
        <div class="Logo"></div>
    </div>
    );
    }    
} 
export default Recovery