import "./App.css";
import { createContext, useEffect } from "react";
import Navbar from "./Layout/Header/Navbar";
import { useMediaQuery } from "react-responsive";
import Body from "./Layout/Main/Body";

export const context = createContext();

function App() {
  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });


  useEffect(() => {
    if (localStorage.getItem("theme") === "theme-dark") {
      setTheme("theme-dark");
    } else {
      setTheme("theme-light");
    }
  }, []);

  function setTheme(mode) {
    localStorage.setItem("theme", mode);
    document.documentElement.className = mode;
  }

  return (
    <div>
      <context.Provider value={{ setTheme ,isMobile }}>
        <Navbar />
        <Body/>
      </context.Provider>
    </div>
  );
}

export default App;



