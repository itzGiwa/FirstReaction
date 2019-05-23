import React, {Component} from 'react';
import classList from './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Auxi from '../hoc/Auxi';

class App extends Component{

  state = {
    persons: [
      {id: 1,name : "Quavo" , age : 29},
      {id: 2,name : "Offset" , age : 27},
      {id: 3, name : "TakeOff" , age : 24}
    ],

    showAmigos: false
  }

  changeMigoNameHandler = (event, id) => {

    let migoIndex = this.state.persons.findIndex(x => x.id === id);

    const person = {...this.state.persons[migoIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[migoIndex] = person;

    this.setState({
      persons: persons
    })

  }

  showAmigosHanler = () => {
    const doesShow = this.state.showAmigos;
    this.setState({
      showAmigos: !doesShow
    })
  }

  deleteMigoHandler = (migoIndex) => {
    let migos = [...this.state.persons];
      migos.splice(migoIndex, 1);

      this.setState({
        persons: migos
      })
  }

  render () {

    //when a component is re-rendered this method is called again
    let person = null;
    if(this.state.showAmigos){
      person = (  
            <div>
            <Persons persons={this.state.persons} changed={this.changeMigoNameHandler} clicked={this.deleteMigoHandler}/>
            </div>
            )
    }else{
      person = null
    }

  return (
        //Always have a parent div wrapper 
        // <div className={classList.App}>
        <Auxi>
        <Cockpit clicked={this.showAmigosHanler} showPerson={this.state.showAmigos} />
        {/* Use to conditionally show or hide elements */}
        {person}
        
        {/* </div> */}
        </Auxi>


        )
  }
}

export default withClass(App, classList.App);
