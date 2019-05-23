import React from 'react';
import classList from './Person.css';
import WithClass from '../../../hoc/WithClass';
 
const person = (props) => {

    return <WithClass classes={classList.Person} >
    <p onClick={props.click}>
       Its {props.name}, {props.age}yrs from the migos !!!
    </p>
    <input type="text" onChange={props.change} value={props.name}/>
    </WithClass>
}

export default person;