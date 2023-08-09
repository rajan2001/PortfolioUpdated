import React, { useContext, useEffect, useState } from "react";
import Theme from "./Theme";
import Hamburger from "hamburger-react";
import { context } from "../../App";

function Navbar() {
  const { isMobile } = useContext(context);

  const [menu, setMenu] = useState(false);


  useEffect(()=>{
    if (isMobile){
      setMenu(false)
    }
  },[isMobile])

  const anchor = ["About", "Project", "Graphics", "Photos"];
  const renderAnchor = anchor.map((anchor, index) => (
    <a key={index} href={`/${anchor}`} className="nav_bar-link">
      {anchor}
    </a>
  ));

  const render = isMobile ? (
    <div className="nav_bar">
      <a href="/" className="nav_bar-heading">
        <h3>Rajan Pandey</h3>
      </a>
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
      { menu  && (
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
