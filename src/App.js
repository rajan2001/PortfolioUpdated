import "./App.css";
import { createContext, useEffect } from "react";
import Navbar from "./Layout/Header/Navbar";
import { useMediaQuery } from "react-responsive";
import Body from "./Layout/Main/Body";
import Footer from "./Layout/Footer/Footer";
import About from "./Layout/Header/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
      <context.Provider value={{ setTheme, isMobile  }}>
      <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/About" element={<About />} />
          </Routes>
          <Footer />
        </Router>
      </context.Provider>
    </div>
  );
}

export default App;


