import "./App.css";
import { createContext, useEffect,useState } from "react";
import Navbar from "./Layout/Header/Navbar";
import { useMediaQuery } from "react-responsive";
import Body from "./Layout/Main/Body";
import Footer from "./Layout/Footer/Footer";
import About from "./Layout/Navbar-Links/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Project from "./Layout/Navbar-Links/Project";
import Graphics from "./Layout/Navbar-Links/Graphics";
import Photo from "./Layout/Navbar-Links/Photo";

export const context = createContext();

function App() {
  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });
  const [dark, setDark] = useState(false);
  const [menu, setMenu] = useState(false);

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
      <context.Provider value={{ setTheme, isMobile,dark,setDark ,menu,setMenu }}>
      <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/About" element={<About />} />
            <Route path="/Project" element={<Project />} />
            <Route path="/Graphics" element={<Graphics />} />
            <Route path="/Photos" element={<Photo />} />
          </Routes>
          <Footer />
        </Router>
      </context.Provider>
    </div>
  );
}

export default App;


