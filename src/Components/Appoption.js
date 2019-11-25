import React from "react";
import "./Appoption.css";


class Option extends React.Component {
  render() {
    return (
      <div className="Opciones">
        <div className="div1">
          <h1>TITULO PAGINA</h1>
        </div>
        <div className="div5">
          <h1>NOMBRE DE USUARIO OPCIONES</h1>
        </div>
        <div className="div2">
          <div className="div3">
            <h1>IMAGEN</h1>
          </div>
          <div className="div4">
            <h1>BUENAS NOCHES SEÑOR JUAN CONDE</h1>
          </div>
        </div>
        <div className="div6">
          <h1>CAJA CONTENEDORA DE TODO</h1>
        </div>
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

export default Option