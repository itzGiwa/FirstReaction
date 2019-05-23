import React from 'react';
import classList from './Cockpit.css';
import Auxi from '../../hoc/Auxi';

const cockpit = (props) => {

    let btnClass = classList.Button;
    if(props.showPerson) {
        btnClass = [classList.Button, classList.Red].join(' ');
    }

    return (
        // <div className={classList.Cockpit}>
        <Auxi>     
            
        <h1>Hola Amigos</h1>

        <button className={btnClass} onClick={props.clicked}> Show Amigos</button>

        <button className={btnClass} onClick={props.authenticate}>Login</button>

        {/* </div> */}
        </Auxi>
  
    )
}

export default cockpit;