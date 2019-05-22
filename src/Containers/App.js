import React, {Component} from 'react';
import classList from './App.css';
import Person from '../Components/Persons/Person/Person';

class App extends Component{

  state = {
    persons: [
      {id: 1,name : "Quavo" , age : 29},
      {id: 2,name : "Offset" , age : 27},
      {id: 3, name : "TakeOff" , age : 24}
    ],

    showAmigos: false
  }

  showMigosNickNameHandler = (newName) => {
    //Only way to change a state !!! Always use to change a state
    this.setState(
      {
        persons: [
          {name : newName , age : 29},
          {name : "Set" , age : 27},
          {name : "Take" , age : 24}
        ]
      }
    )
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
    let btnClass = '';
    if(this.state.showAmigos){
      person = (
      <div>
            
      {/* uses vanillaJs map function */}
      {this.state.persons.map((migo, index) => {
        return <Person name={migo.name} age={migo.age} click={() => this.deleteMigoHandler(index)} key={migo.id}
        change={(event) => this.changeMigoNameHandler(event, migo.id)}/>
      })}
      </div>
      )
      
      btnClass = classList.Red;
    }else{
      person = null
    }

  return (
        //Always have a parent div wrapper 
        <div className={classList.App}>

        <h1>Hola Amigos</h1>

        {/* Use event handler and prefix method with Handler */}
        <button className={btnClass} onClick={this.showAmigosHanler}> Show Amigos</button>

        {/* Use to conditionally show or hide elements */}
        {person}

        </div>

        )
  }
}

export default App;
