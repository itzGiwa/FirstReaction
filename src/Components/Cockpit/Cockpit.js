import React from 'react';
import classList from './Cockpit.css';
import Auxi from '../../hoc/Auxi';

const cockpit = (props) => {

    let btnClass = '';
    if(props.showPerson) {
        btnClass = classList.Red;
    }

    return (
        // <div className={classList.Cockpit}>
        <Auxi>     
            
        <h1>Hola Amigos</h1>

        <button className={btnClass} onClick={props.clicked}> Show Amigos</button>

        {/* </div> */}
        </Auxi>
  
    )
}

export default cockpit;