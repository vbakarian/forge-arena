import React, { Component } from "react";
import "./App.css";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import UserTable from "./components/UserTable.js";
import StatsTable from "./components/StatsTable.js"
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">The Forge Arena</h1>
        </header>
        
        <Router>
          <div>
          <Route exact path="/" component={UserTable} />
          <Route exact path="/stats" component={StatsTable} />
          </div>
        </Router>
        <div>
        
        </div>
        <div>
          
        </div>
      </div>
    );
  }
}

export default App;
