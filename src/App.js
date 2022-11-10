import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
  }

  setTimeout(() => {
    setalert(null)
  }, 1500);

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showalert("Dark Mode Has Been Enabled", "Success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light Mode Has Been Enabled", "Success")

    }
  }
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      {/* <Navbar/> */}
        <Navbar title="Textutils" HomeText="Home" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" mode={mode}/>
        </div>
    </>
  );
}

export default App