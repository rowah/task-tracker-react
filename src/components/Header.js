import React from "react";

//deconstructing the default props shows the same title
const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};
Header.defaultProps = {
  title: "Title from Default Props",
};

export default Header;
