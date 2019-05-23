import React from 'react';
import classList from './Person.css';
import withClass from '../../../hoc/withClass';
import Auxi from '../../../hoc/Auxi';
import {AuthContext} from '../../../Containers/App';
 
const person = (props) => {

    return (
        <Auxi>
            <AuthContext.Consumer>
                {auth => auth ? <p>I am authenticated</p> : null}
            </AuthContext.Consumer>
    <p onClick={props.click}>
       Its {props.name}, {props.age}yrs from the migos !!!
    </p>
    <input type="text" onChange={props.change} value={props.name}/>
    </Auxi>
    )
}

export default withClass(person, classList.Person);