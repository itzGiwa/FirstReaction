import React, {Component} from 'react';
import './App.css';
import Radium, {StyleRoot} from 'radium';
import Person from './Person/Person';

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

    //this styling only applies to this component
    const style = {
      backgroundColor: 'black',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'grey',
        color: 'black'
      }
    }

    //when a component is re-rendered this method is called again
    let person = null
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

      style.backgroundColor = 'white';
      style.color = 'blue';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }

    }else{
      person = null
    }

    //classes must be declared in the app.css
    let classes = [];
    if(this.state.persons.length <= 1){
      classes.push('red');
    }
    if(this.state.persons.length > 1){
      classes = [];
      classes.push('blueB');
    }

  return (

    //wrap around root app to use media queries
    <StyleRoot>
        {/* //Always have a parent div wrapper */}
        <div className="App">

        <h1 className={classes.join(' ')}>Hola Amigos</h1>

        {/* Use event handler and prefix method with Handler */}
        <button style={style} onClick={this.showAmigosHanler}> Show Amigos</button>

        {/* Use to conditionally show or hide elements */}
        {person}

        </div>

    </StyleRoot>

        )
  }
}

export default Radium(App);
