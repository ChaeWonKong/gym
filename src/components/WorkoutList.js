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
        <Link to="/back/">
          <Card>등운동</Card>
        </Link>
        <Link to="/chest/">
          <Card>가슴운동</Card>
        </Link>
        <Link to="/shoulder/">
          <Card>어깨운동</Card>
        </Link>
        <Link to="/waist/">
          <Card>허리운동</Card>
        </Link>
        <Link to="/arm/">
          <Card>팔운동</Card>
        </Link>
        <Link to="/leg/">
          <Card>하체운동</Card>
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
