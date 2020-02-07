import React from "react";

import "./collection-preview.scss";

import CollectionItem from "../collection-item/collection-item";

// Component who display a 4 items preview for each collection section in the shop page(shop.js)

const CollectionPreview = ({ items, title }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, indx) => indx < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
