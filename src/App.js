import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component{

  state = {
    persons: [
      {name : "Quavo" , age : 29},
      {name : "Offset" , age : 27},
      {name : "TakeOff" , age : 24}
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

  changeMigoNameHandler = (event) => {
    this.setState(
      {
        persons: [
          {name : "Quavo" , age : 29},
          {name : "Set" , age : 27},
          {name : event.target.value , age : 24}
        ]
      }
    )
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

    const style = {
      backgrounColor: 'grey',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    //when a component is re-rendered this method is called again
    let person = null
    if(this.state.showAmigos){
      person = (
      <div>
      <button style={style} onClick={() => this.showMigosNickNameHandler('Quavo')}>Show Nick Names</button>
      
      {/* uses vanillaJs map function */}
      {this.state.persons.map((migo, index) => {
        return <Person name={migo.name} age={migo.age} click={() => this.deleteMigoHandler(index)}/>
      })}
      </div>
      )
    }else{
      person = null
    }

  return (

        //Always have a parent div wrapper
        <div className="App">

        <h1>Hola Amigos</h1>

        {/* Use event handler and prefix method with Handler */}
        <button style={style} onClick={this.showAmigosHanler}> Show Amigos</button>

        {/* Use to conditionally show or hide elements */}
        {person}

        </div>

        )
  }
}

export default App;
