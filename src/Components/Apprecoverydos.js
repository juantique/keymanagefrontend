import React from 'react';
import './Recoverydos.css';
class Recoverydos extends React.Component {
    render() {
      return (
        <div>
          <div class="login-box">
            <h1>keyblocking</h1>
            <form>
              <label for="username">Verfica su Numero de Telefono</label>
              <br />
              <label for="username">
                Introduzca su Numero de Telefono Registrado:
              </label>
              <br />
              <input type="text" placeholder="  # Telefono" />
              <input type="submit" value="Continuar" />
              <input type="submit" value="Cancelar" />
              <a href="#">Volver a la Pagina Principal</a>
              <br />
              <br />
              <a href="#">Nuevo Usuario</a>
            </form>
          </div>
          <div class="Logo" />
        </div>
      );
    }
  }

  export default Recoverydos