import React, { Component } from "react";

class WorkoutList extends Component {
  render() {
    return (
      <div style={styles.container}>
        Personalized Workout List
        <a
          className="btn-floating btn-large waves-effect waves-light"
          style={styles.buttonStyle}
        >
          <i className="material-icons">add</i>
        </a>
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
