import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { Provider } from "react-redux";
import { createStore } from "redux";

class App extends Component {
  render() {
    return (
      <Provider store={createStore}>
        <div className="App">
          <Header headerText="Gym" />
        </div>
      </Provider>
    );
  }
}

export default App;
