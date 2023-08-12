import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

function Project() {
  const render =
    localStorage.getItem("theme") === "theme-dark" ? (
      <div>
        <Player
          autoplay
          loop
          src={process.env.PUBLIC_URL + "src/CommingSoonDark.json"}
         style={{height:"auto" , width:"70%"}}
        ></Player>
      </div>
    ) : (
      <div>
        <Player
          autoplay
          loop
          src={process.env.PUBLIC_URL + "src/CommingSoon.json"}
          style={{height:"auto" , width:"70%"}}
        ></Player>
      </div>
    );

  return <div className="commingSoon_theme">{render}</div>;
}

export default Project;
