import React from 'react';
import './Person.css';
import Radium from 'radium'
 
const person = (props) => {

    const style = {
        '@media (min-width: 500px)' : {
            width: '450px'
        }
    }

    return <div>
    <p className="Person" style={style} onClick={props.click}>
       Its {props.name}, {props.age}yrs from the migos !!!
    </p>
    <input type="text" onChange={props.change} value={props.name}/>
    </div>
}

export default Radium(person);