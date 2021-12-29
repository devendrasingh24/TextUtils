import "./App.css";
import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";




function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (massage, type) =>{
    setAlert({
      msg: massage,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    },1500);
  }

  const toggleMode = ()=>{
        if(mode === 'light'){
          setMode('dark');
          document.body.style.backgroundColor = '#040840'
          showAlert("Dark mode has been enabled", "success");
          // document.title = 'TextUtils - Dark Mode';
          // setInterval(() => {
          //   document.title = 'TextUtils is Amazing mode';
          // }, 2000);
          // setInterval(() => {
          //   document.title = 'install TextUtils Now';
          // }, 1500);
        }
        
      else{
          setMode('light');
          document.body.style.backgroundColor = 'white'
          showAlert("Light mode has been enabled", "success");
          // document.title = 'TextUtils - Light Mode';
      }
  }
   return (
      <>
     
        {/* <Navbar/> */}
        {/* <Navbar title= "TextUtils" aboutText="About TextUtils"/> */}
        <Router>

       
          <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert}/>

          <div className="container my-3">
        
            <Switch>
                <Route exact path="/about">
                  <About />
                </Route>
                <Route exact path="/">
                <TextForm  showAlert={showAlert} heading="Enter The text to below" mode={mode}/>
                </Route>
           </Switch>
              {/* <About/> */}
              {/* <TextForm  showAlert={showAlert} heading="Enter The text to below" mode={mode}/> */}
              </div>
          
        </Router>
      </>
    );
  };


export default App;
