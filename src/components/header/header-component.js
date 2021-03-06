import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";

import CartIcon from "../cart/cart";
//import { ReactComponent as Logo } from "../../assets/shanaki-logo.svg";

import "./header-component.scss";

const Header = ({ currentUser }) => (
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
      {/* -------- Change SIGN IN or SIGN OUT according to authentification ------------ */}
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      {/* ------------------------------------------------------------------------------- */}
      <CartIcon />
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
