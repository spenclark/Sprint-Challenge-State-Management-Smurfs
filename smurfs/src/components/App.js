import React, { Component } from "react";

import SmurfList from './smurflist'
import SmurfForm from './smurfForm'
import "./App.css";

const App = () => {
  

    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfForm />
        <SmurfList />
      </div>
    );
  
}

export default App;
