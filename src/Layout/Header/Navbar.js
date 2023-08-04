import React from "react";
import Theme from "./Theme";

function Navbar() {
  const anchor = ["About", "Project", "Graphics", "Photos"];
  const renderAnchor = anchor.map((anchor, index) => (
    <a key={index} href={`/${anchor}`}>
      {anchor}
    </a>
  ));

  return (
    <div className="nav_bar">
      <a href="/">
        <h3 className="nav_bar-heading">Rajan Pandey</h3>
      </a>
      <div className="nav_bar-links">{renderAnchor}</div>

      <Theme />
    </div>
  );
}

export default Navbar;
