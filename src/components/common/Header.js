import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo">
              {this.props.headerText}
            </a>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <a href="sass.html">내 정보</a>
              </li>
              <li>
                <a href="mobile.html">고객센터</a>
              </li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li>
            <a href="sass.html">내 정보</a>
          </li>
          <li>
            <a href="badges.html">고객센터</a>
          </li>
        </ul>
      </div>
    );
  }
}

export { Header };
