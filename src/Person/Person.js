import React from 'react';
import './Person.css';
 
const person = (props) => {

    return <div>
    <p className="Person" onClick={props.click}>
       Its {props.name}, {props.age}yrs from the migos !!!
    </p>
    <input type="text" onChange={props.change} value={props.name}/>
    </div>
}

export default person;