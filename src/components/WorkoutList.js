import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Loading } from "./common";

class WorkoutList extends Component {
  render() {
    return (
      <div style={styles.container}>
        Personalized Workout List
        <Link
          to="/add"
          className="btn-floating btn-large waves-effect waves-light"
          style={styles.buttonStyle}
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column"
  },
  buttonStyle: {
    position: "fixed",
    bottom: 86,
    right: 30
  }
};

export default WorkoutList;
