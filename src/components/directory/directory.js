import React, { Component } from "react";
import "./directory.scss";
import MenuItem from "../menu-item/menu-item";

class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [
        {
          title: "bijoux",
          imageUrl: "https://i.ibb.co/jLHjT0H/collier.png",
          id: 1
        },
        {
          title: "vêtements",
          imageUrl: "https://i.ibb.co/dJ7H8h0/chapeau.png",
          id: 2
        },
        {
          title: "pierres",
          imageUrl: "https://i.ibb.co/ZgNv2vT/pierre.png",
          id: 3
        }
      ]
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(section => (
          <MenuItem
            title={section.title}
            key={section.id}
            image={section.imageUrl}
          />
        ))}
      </div>
    );
  }
}

export default Directory;
