import './App.css';
import About from './components/About';
import Navigationbar from './components/Navigationbar';
import Textform from './components/Textform';
import React, { useState } from 'react'




function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enable or not//
  const toggle=() =>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='grey'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white'
    }

  }
  return(
    <>
    
        <Navigationbar mode={mode} togglemode={toggle}/>
        <div className="container my-3" >
        <Textform  mode={mode} heading="Enter your text below"/>
        <About/>
        </div>
        
    </>
  );

}

export default App;
