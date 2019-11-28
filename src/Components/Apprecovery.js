import React from 'react';
//import logo from './logo.svg';

class Recovery extends React.Component {
    render() {
      return (
      <div>
        <div class="login-box">
          <h1>keyblocking</h1>
          <form>
            <label for="username">
              ¿Quieres recuperar la contraseña de Usuario?
            </label>
            <br />
            <label for="username">Introduzca el Correo Electronico:</label>
            <br />
            <input type="text" placeholder="  Ingrese usuario" />
            <input type="submit" value="Continuar" />
            <a href="http://www.google.com">Volver a la Pagina Principal</a>
            <br />
            <br />
            <a href="http://www.google.com">Nuevo Usuario</a>
          </form>
        </div>
        <div class="Logo"></div>
    </div>
    );
    }    
} 
export default Recovery