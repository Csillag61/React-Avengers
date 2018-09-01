import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import avengers from "./avengersData";

class App extends Component {
  constructor() {
    super();
    this.state = {
      avengers: avengers
    }
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Avengers: by CsillaG</h1>
          </header>
        {this.state.avengers.map(avenger =>{
          return(
        
          <p className="App-intro" key={avenger.id}>
            {avenger.name}
          </p>
         );
        })}
        </div>
     
    );
  }
}

export default App;
