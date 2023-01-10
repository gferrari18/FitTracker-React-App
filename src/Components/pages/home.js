import React from "react";
import "../../App.css";
import Cards from "../cards";
import HeroSection from "../HeroSection";
import Info from "../info";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Info />
    </>
  );
}

export default Home;
