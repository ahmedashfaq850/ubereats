import React from "react";
import Ctaegories from "./components/Ctaegories";
import FoodSections from "./components/FoodSections";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import RowSection from "./components/RowSection";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Ctaegories />
      <RowSection />
      <FoodSections />
    </div>
  );
};

export default App;
