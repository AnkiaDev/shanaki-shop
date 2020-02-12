import React from "react";
import { Link } from "react-router-dom";

//import { ReactComponent as Logo } from "../../assets/shanaki-logo.svg";

import "./header-component.scss";

const Header = () => (
  <div className="header">
    {/*<Link className="logo-container" to="/"><Logo className="logo"/></Link>*/}
    <Link className="header-title" to="/">
      SHANAKI
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      <Link className="option" to="/signin">
        SIGN IN
      </Link>
    </div>
  </div>
);

export default Header;
