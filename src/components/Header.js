import React from "react";

const Header = props => {
  return <div style={styles.headerStyle}>{props.headerText}</div>;
};

const styles = {
  headerStyle: {
    display: "flex",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    background: "#bbb"
  }
};
export { Header };
