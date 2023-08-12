import React, { useContext } from "react";
import Moon from "../../SvgIcons/Moon";
import Sun from "../../SvgIcons/Sun";
import { context } from "../../App";

function Theme() {
  const { setTheme,dark,setDark} = useContext(context);
  

  const handledark = () => {
    setDark(!dark);
    setTheme("theme-light");
  };

  const handlelight = () => {
    setDark(!dark);
    setTheme("theme-dark");
  };

  const background =
    localStorage.getItem("theme") === "theme-dark" ? (
      <div className="nav_bar-moon" onClick={handledark}>
        <Moon />
      </div>
    ) : (
      <div className="nav_bar-sun" onClick={handlelight}>
        <Sun />
      </div>
    );

  return <div className="nav_bar-theme">{background}</div>;
}

export default Theme;
