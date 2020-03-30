import React from 'react';
import logo from './logo.svg';
import './App.css';
import Original from './components/Original'
import Fever from './components/Fever'
import Chest from './components/Chest'
import Base from './components/base/Base'

function App() {
  return (
    // <div className="App">
      
      <div>
        <h2 style={{"color":"white","text-align": "center","margin-top":"60px"}}>Simple Chatbot for COVID-19 symptoms</h2>
          {/* <Original/> */}
          <Base />
          <p style={{'color':'gray', "text-align":"center"}}>Information on this page is designed for educational and informational purposes only</p>
          {/* <Fever />
          <Chest /> */}
      </div>
    // </div>
  );
}

export default App;
