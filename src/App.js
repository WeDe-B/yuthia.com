import logo from './y_logo512.png';
import './App.css';
import Lottie from "lottie-react";
import animationData from "./website-building-of-shopping-sale.json";
import { useRef } from 'react';

function App() {
  const screnAnimation = useRef();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        < h1> We are Coming Soon</h1> 
        <Lottie  animationData={animationData}/>
       
      </header>
      
    </div>
  );
}

export default App;
