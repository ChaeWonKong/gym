import React from "react";

const Card = props => {
  return (
    <div className="row">
      <div className="col s12 m5">
        <div className="card-panel teal">
          <h2 style={{ color: "white" }}>{props.children}</h2>
          <span className="white-text">
            I am a very simple card. I am good at containing small bits of
            information. I am convenient because I require little markup to use
            effectively. I am similar to what is called a panel in other
            frameworks.
          </span>
        </div>
      </div>
    </div>
  );
};

export { Card };
