import React, { Component } from 'react';
import logo from './logo.svg';
 import './App.css';
import Pitomci from './components/Pitomci';

class App extends Component {
 

  render() {
    return (
      <div>
        <h1>Pitomac</h1>
        <div className="header-bar"/>        
        <Pitomci/>
      </div>
       
    );
  }
}

export default App;
