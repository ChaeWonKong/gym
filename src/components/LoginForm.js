import React, { Component } from "react";

class LoginForm extends Component {
  render() {
    const { container, idContainer, pwContainer } = styles;
    return (
      <div style={container}>
        <div style={idContainer}>
          <label>Email</label>
          <input label="Email" placeholder="email@gmail.com" />
        </div>

        <div style={pwContainer}>
          <label>Password</label>
          <input label="Password" placeholder="password" />
        </div>
        <button>Login</button>
      </div>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  idContainer: {
    display: "flex",
    flexDirection: "row"
  },
  pwContainer: {
    display: "flex",
    flexDirection: "row"
  }
};

export { LoginForm };
