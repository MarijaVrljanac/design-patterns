import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BsCartFill } from "react-icons/bs";
import {Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
       
      <header className="App-header">
      
     
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          Hello!
        </p>
       
      </header>
    </div>
  );
}

export default App;
