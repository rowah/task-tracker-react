import PropTypes from "prop-types"; //impt tab

import React from "react";

//deconstructing the default props shows the same title
const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
