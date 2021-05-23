import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import "./index.css";
const Hero = ({ handleLogout }) => {
  return (
    <section className="hero">
      <nav>
        <a hr
        <button onClick={handleLogout}>Logout</button>
      </nav>
          <div className="App">
      <Navbar />
      <Main />
      <Footer />
    </div>
    </section>
  );
};

export default Hero;
