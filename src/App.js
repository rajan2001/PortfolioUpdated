import "./App.css";
import { createContext, useEffect } from "react";
import Navbar from "./Layout/Header/Navbar";

export const context = createContext();

function App() {
  useEffect(() => {
    if (localStorage.getItem("theme") === "theme-dark") {
      setTheme("theme-dark");
    } else {
      setTheme("theme-light");
    }
  }, []);

  function setTheme(themeName) {
    localStorage.setItem("theme", themeName);
    document.documentElement.className = themeName;
  }

  return (
    <div>
      <context.Provider value={{ setTheme }}>
        <Navbar />
      </context.Provider>
    </div>
  );
}

export default App;
