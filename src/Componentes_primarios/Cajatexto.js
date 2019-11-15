import React from 'react';
import './Caja.css';

function Cajafinal(props) {
    return (
        <div>
            <input type = "email" class = "Caja" placeholder={props.placeholderCajaFinal}></input>
        </div>
    )
}
export default Cajafinal;

//<input type = "email" placeholder = "Iniciar Sesión" size = "10" > </input>