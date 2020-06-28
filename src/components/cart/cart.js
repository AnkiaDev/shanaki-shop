import React from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/cart-icon.svg";
import "./cart.scss";

const CartIcon = () => (
  <div className="cart-information">
    <div className="cart-icon">
      <ShoppingIcon className="shopping-icon" />
      <div className="item-count">0</div>
    </div>
    <div className="items-price">0€</div>
  </div>
);

export default CartIcon;
