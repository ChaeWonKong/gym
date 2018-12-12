import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import firebase from "firebase";
import ReduxThunk from "redux-thunk";
import { BrowserRouter, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import firebaseAuth from "./firebaseAuth.json";
import reducers from "./reducers";
import { Header, Footer, Card } from "./components/common";
import LoginForm from "./components/LoginForm";
import WorkoutList from "./components/WorkoutList";

class App extends Component {
  componentWillMount() {
    const config = firebaseAuth;
    !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

    // firebase.auth().onAuthStateChanged(user => {
    //   if (user) {
    //     this.setState({ loggedIn: true });
    //   } else {
    //     this.setState({ loggedIn: false });
    //   }
    // });
  }

  // renderContent() {
  //   switch (this.state.loggedIn) {
  //     case true:
  //       return <WorkoutList />;
  //     case false:
  //       return <LoginForm />;
  //     default:
  //       return <div>Wait...</div>;
  //   }
  // }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Header headerText="Gym" />
            {/* <LoginForm /> */}
            {/* <WorkoutList /> */}
            <Footer />
            <Route exact path="/" component={WorkoutList} />
            <Route path="/add" component={LoginForm} />
            <Route path="/back" component={Card} />
            <Route path="/chest" component={Card} />
            <Route path="/shoulder" component={Card} />
            <Route path="/waist" component={Card} />
            <Route path="/arm" component={Card} />
            <Route path="/leg" component={Card} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
