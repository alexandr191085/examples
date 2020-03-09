import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {   
  getName(){
      return "Alexay";
    }
    constructor(){
      super();
      this.name = "Alex";
    }
    //funtion Hello (props){
      //return <h1> Hello, {props.name}</h1>;
    //}
    render() {
    return <h1> Hello world !</h1>;/* (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1> Hello {this.getName()}</h1>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {
              //
            }
        </header>
      </div>
    ); 
    */
  }
}

export default App;
