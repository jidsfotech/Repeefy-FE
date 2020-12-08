import React from "react";
import "./Home.css";
import HowWeWork from "./HowWeWork/HowWeWork";
import Footer from "../../Components/Footer/Footer";
import Hero from "./Hero/Hero";

const HomeNew = () => {
  return (
    <div className="HomePage">
      <Hero />
      <HowWeWork />
      <Footer />
    </div>
  );
};

export default HomeNew;
