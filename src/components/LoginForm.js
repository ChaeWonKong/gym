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
          <label style={{ marginRight: 10 }}>Email</label>
          <input
            label="Email"
            placeholder="email@gmail.com"
            onChange={this.onChangeEmail.bind(this)}
          />
        </div>

        <div style={pwContainer}>
          <label style={{ marginRight: 10 }}>Password</label>
          <input label="Password" placeholder="password" />
        </div>
        <a className="waves-effect waves-light btn">Login</a>
      </div>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 50
  },
  idContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5
  },
  pwContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 10
  }
};

export default connect(
  null,
  emailChanged
)(LoginForm);
