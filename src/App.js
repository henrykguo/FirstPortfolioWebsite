import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import TopBar from "./components/Topbar";
import Works from "./components/Works";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/Menu";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}></TopBar>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Menu>
      <div className="sections">
        <Intro></Intro>
        <Portfolio></Portfolio>
        <Works></Works>
      </div>
    </div>
  );
}

export default App;
