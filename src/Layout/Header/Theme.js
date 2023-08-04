import React, { useContext, useState } from "react";
import Moon from "../../SvgIcons/Moon";
import Sun from "../../SvgIcons/Sun";
import { context } from "../../App";


function Theme() {
  const [darkMode, setDarkMode] = useState(true);
  const {setTheme} = useContext(context)
  const background = darkMode ? (
    <div
      className="nav_bar-sun"
      onClick={() => {
        setTheme("theme-dark");
        setDarkMode(!darkMode);
      }}
    >
      <Sun />
    </div>
  ) :(
    <div
      className="nav_bar-moon"
      onClick={() => {
        setTheme("theme-light")
        setDarkMode(!darkMode);
      }}
    >
      <Moon />
    </div>
  );
  return <div className="nav_bar-theme">{background}</div>;
}

export default Theme;
