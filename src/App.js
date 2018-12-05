import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import firebase from "firebase";
import logo from "./logo.svg";
import "./App.css";
import firebaseAuth from "./firebaseAuth.json";
import reducers from "./reducers";
import { Header } from "./components/common";
import LoginForm from "./components/LoginForm";

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    const config = firebaseAuth;
    !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return <div>success</div>;
      case false:
        return <LoginForm />;
      default:
        return <div>Wait...</div>;
    }
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <div className="App">
          <Header headerText="Gym" />
          {this.renderContent()}
        </div>
      </Provider>
    );
  }
}

export default App;
