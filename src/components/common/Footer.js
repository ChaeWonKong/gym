import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer" style={styles.container}>
        <i class="far fa-calendar-alt" />
        <i class="fas fa-dumbbell" />
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
    color: "#ff8a80"
  }
};

export { Footer };
