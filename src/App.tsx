import React from 'react';
import logo from './logo.svg';
import './App.css';
import Step2 from './Feature/Step2';
import Step3 from './Feature/Step3';
import { Header } from './layout/Header';
function App() {
  return (
    <div className="App">
      <Header/>
      <Step2/>
      <Step3/>
    </div>
  );
}

export default App;
