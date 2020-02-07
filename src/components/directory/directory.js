import React, { Component } from "react";
import "./directory.scss";
import MenuItem from "../menu-item/menu-item";

// component containing a menu introducing each collection section(menu-item.js)

class Directory extends Component {
  // Composant contenant les differentes categories du magasin sur la HomePage
  constructor(props) {
    super(props);
    this.state = {
      sections: [
        //Catégories du magasin
        {
          title: "bijoux",
          imageUrl: "https://i.ibb.co/jLHjT0H/collier.png",
          id: 1,
          linkUrl: "jewelry"
        },
        {
          title: "vêtements",
          imageUrl: "https://i.ibb.co/dJ7H8h0/chapeau.png",
          id: 2,
          linkUrl: "clothing"
        },
        {
          title: "pierres",
          imageUrl: "https://i.ibb.co/ZgNv2vT/pierre.png",
          id: 3,
          linkUrl: "stones"
        }
      ]
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map((
          // Crée une minature MenuItem par catégorie
          { id, ...otherSectionProps }
        ) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
