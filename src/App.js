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

  render () {

    const style = {
      backgrounColor: 'grey',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
  return (

        //Always have a parent div wrapper
        <div className="App">

        <h1>Hola Amigos</h1>

        {/* Use event handler and prefix method with Handler */}
        <button style={style} onClick={this.showAmigosHanler}> Show Amigos</button>

        {/* Use to conditionally show or hide elements */}
        { this.state.showAmigos ?
        <div>
        <button style={style} onClick={() => this.showMigosNickNameHandler('Quavo')}>Show Nick Names</button>

        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.showMigosNickNameHandler.bind(this, 'Qua')}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} change={this.changeMigoNameHandler}/>
        </div> : null
        }

        </div>

        )
  }
}

export default App;
