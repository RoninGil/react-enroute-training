import logo from './logo.svg';
import './App.scss';
import React, { useEffect, useState } from 'react'
import Deck from './components/deck/Deck.js'


function App() {
  return <div className="App">
      <header className="App-header">
        <Deck title="table" path="table" flipped="2"/>
        <Deck title="hand" path="cards/2" flipped="2"/>
      </header>
      
    </div>
}

export default App;
