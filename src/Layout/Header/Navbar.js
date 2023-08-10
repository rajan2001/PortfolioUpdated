import React, { useContext, useEffect, useState } from "react";
import Theme from "./Theme";
import Hamburger from "hamburger-react";
import { context } from "../../App";
import { Link } from "react-router-dom";

function Navbar() {
  const { isMobile } = useContext(context);

  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (isMobile) {
      setMenu(false);
    }
  }, [isMobile]);

  const anchor = ["About", "Project", "Graphics", "Photos"];
  const renderAnchor = anchor.map((anchor, index) => (
    <Link key={index} to={`/${anchor}`} className="nav_bar-link">
      {anchor}
    </Link>
  ));

  const render = isMobile ? (
    <div className="nav_bar">
      <h3>
        {" "}
        <Link to="/" className="nav_bar-heading">
          Rajan Pandey
        </Link>
      </h3>

      <div onClick={() => setMenu(!menu)}>
        {" "}
        <Hamburger />
      </div>
    </div>
  ) : (
    <div className="nav_bar">
      <a href="/" className="nav_bar-heading">
        <h3>Rajan Pandey</h3>
      </a>
      <div className="nav_bar-links">{renderAnchor}</div>

      <Theme />
    </div>
  );

  return (
    <>
      {render}
      {menu && (
        <div className="nav_bar-mobile-layout">
          <div className="nav_bar-mobile">
            <div className="nav_bar-links">{renderAnchor}</div>

            <Theme />
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
