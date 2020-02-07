import React, { Component } from "react";

import "./shop.scss";

import SHOP_DATA from "./shop-data";
import CollectionPreview from "../../components/collection-preview/collection-preview";
import Header from "../../components/header/header-component";

/* Page containing a component who display a 4 items preview for each collection section in the shop page(shop.js)*/

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = { collections: SHOP_DATA };
  }
  render() {
    const { collections } = this.state;
    return (
      <div>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
