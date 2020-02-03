import React from "react";
import "./menu-item.scss";

const MenuItem = ({ title, image }) => (
  <div className="menu-item">
    <div
      className="background-image"
      style={{ backgroundImage: `url(${image})` }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
