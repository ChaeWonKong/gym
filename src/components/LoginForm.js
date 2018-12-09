import React, { Component } from "react";
import { connect } from "react-redux";
import { emailChanged } from "../actions";

class LoginForm extends Component {
  handleEmailChange(e) {
    this.props.emailChanged(e.target.value);
  }

  render() {
    console.log(this.props.email);
    const { container, idContainer, pwContainer } = styles;
    return (
      <div style={container}>
        <div style={idContainer}>
          <label style={{ marginRight: 10 }}>Email</label>
          <input
            label="Email"
            placeholder="email@gmail.com"
            onChange={this.handleEmailChange.bind(this)}
            value={this.props.email}
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

const mapStateToProps = state => {
  return {
    email: state.auth.email
  };
};

export default connect(
  mapStateToProps,
  { emailChanged }
)(LoginForm);
