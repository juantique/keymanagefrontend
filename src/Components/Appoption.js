import React from "react";
import "./Option.css";


class Option extends React.Component {
  render() {
    return (
      <div className="Opciones">
        <div className="div1">keyblocking</div>
        <div className="div5">NOMBRE DEL USUARIO</div>
        <div className="div2">
          <div className="circulo" />
          <div className="div4">Buenas Noches Nombre del Usuario</div>
        </div>
        <div className="div6" />
        <div className="div7">
          <label>Deseas agregar una nueva pagina</label>
        </div>
        <div className="div8">
          <label>Soporte</label>
        </div>
      </div>
    );
  }
}


export default Option;