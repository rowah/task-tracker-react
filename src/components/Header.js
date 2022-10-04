import PropTypes from "prop-types"; //impt tab
import Button from "./Button"; // in the same folder
import React from "react";

//deconstructing the default props shows the same title
const Header = ({ title }) => {
  const onClick = () => {
    console.log("Clicked");
  };
  return (
    <header className="header">
      <h1 style={headingStyle}>{title}</h1>
      <Button color="green" text="Add" onClick={onClick} />
      {/* reuses the button component with different props */}
      {/* <Button color="red" text="Hola Two" />
      <Button color="blue" text="Hola Three" /> */}
    </header>
  );
};
Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired, //if required
};

//CSS in JS
const headingStyle = {
  color: "black",
  //   backgroundColor: "black",
};

export default Header;
