import React from 'react';
import './Caja.css';
function Passwordfinal(props){
    return(
        <div>
            <input type="password" class ="Caja" placeholder={props.placeholderPasswordFinal}></input>
        </div>
    )
}
export default Passwordfinal;