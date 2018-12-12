import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div className="footer" style={styles.container}>
        <Link to="/calendar">
          <i className="far fa-calendar-alt" />
        </Link>
        <Link to="/">
          <i className="fas fa-dumbbell" />
        </Link>
      </div>
    );
  }
}

const styles = {
  container: {
    position: "fixed",
    bottom: 0,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "56px",
    width: "100%",
    borderTop: "1px solid #bbb",
    fontSize: "20px",
    color: "#ff8a80",
    backgroundColor: "#fff"
  }
};

export { Footer };
