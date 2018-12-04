import React, { Component } from "react";
import { connect } from "react-redux";
import { emailChanged } from "../actions";

class LoginForm extends Component {
  onChangeEmail(text) {
    this.props.emailChanged(text);
  }
  render() {
    const { container, idContainer, pwContainer } = styles;
    return (
      <div style={container}>
        <div style={idContainer}>
          <label>Email</label>
          <input
            label="Email"
            placeholder="email@gmail.com"
            onChange={this.onChangeEmail.bind(this)}
          />
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

export default connect(
  null,
  emailChanged
)(LoginForm);
