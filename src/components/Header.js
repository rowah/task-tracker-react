import React from "react";

//rafcp with the React/React-Native extension installed (creates a boiler plate of a component)
const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  );
};
//create a default prop which would show if none is passed on the App js
//if the default props also does not exist, nothing shows on h1 since it is not passed on the App .js JSE
//passing title on the <Header /> in the App js would overwrite the default
Header.defaultProps = {
  title: "Title from Default Props",
};

export default Header;
