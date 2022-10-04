import PropTypes from "prop-types"; //impt tab

import React from "react";

//deconstructing the default props shows the same title
const Header = ({ title }) => {
  return (
    <header>
      <h1 style={headingStyle}>{title}</h1>
    </header>
  );
};
Header.defaultProps = {
  title: "Title from Default Props",
};

Header.propTypes = {
  title: PropTypes.string.isRequired, //if required
};

const headingStyle = {
  color: "red",
  backgroundColor: "black",
};

export default Header;
