import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './layout/Header';
import { Step1 } from './feature/BookTicket/page/Step1';
import Step3 from './Feature/BookTicket/page/Step3';
import Step4 from './Feature/BookTicket/page/Step4';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Step1></Step1>
    </div>
  );
}

export default App;
