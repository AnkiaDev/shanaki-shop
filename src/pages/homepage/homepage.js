import React from "react";
import "./homepage.scss";
import Directory from "../../components/directory/directory";

/*Principal page, with a header containing shop,about,cart section 
and a directory component(directory.js) containing a menu introducing each collection section(menu-item.js) */

const HomePage = () => (
  <div className="homepage">
    <Directory />
  </div>
);

export default HomePage;
