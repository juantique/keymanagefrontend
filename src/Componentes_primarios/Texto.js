import React from 'react';
import './Texto.css';

function Texto(props) {
    return (
        <div>
            <a href={props.hreftextofinal}>{props.descripcionenlace}</a>
        </div>
    )
}
export default Texto;