import React from "react";
import Navbar from "./Components/Navbar";
import "./App.css";
import Home from "./Components/pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Download from "./Components/pages/Download";
import Register from "./Components/pages/Register";
import About from "./Components/pages/About";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Register" element={<Register />} />
          <Route exact path="/Download" element={<Download />} />
          <Route exact path="/About" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
