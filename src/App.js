


import "./App.css";

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState , useEffect } from "react";


import {Route, Routes } from "react-router-dom";
 
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
   
  }
  return (
    <>
        <Navbar
          title="TextUtils"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />

        <div className="container my-3" mode={mode}>
          <Routes>
            <Route path="/about" element={<About />} />
          </Routes>
          <Routes>
            <Route
              path="/"
              element={
                <TextForm
                  heading="Enter the text to analyze below"
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
    </>
  );
}

export default App;
