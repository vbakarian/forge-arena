import React, { Component } from "react";
import "./App.css";
import logo from "./logo.svg";

import UserTable from "./components/UserTable.js";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">The Forge Arena</h1>
        </header>
        <div>
          <UserTable />
        </div>
      </div>
    );
  }
}

export default App;
