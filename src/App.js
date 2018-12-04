import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import firebase from "firebase";
import logo from "./logo.svg";
import "./App.css";
import firebaseAuth from "./firebaseAuth.json";
import Header from "./components/Header";
import reducers from "./reducers";
class App extends Component {
  componentWillMount() {
    const config = firebaseAuth;
    !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <div className="App">
          <Header headerText="Gym" />
        </div>
      </Provider>
    );
  }
}

export default App;
