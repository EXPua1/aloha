import React from "react";
import ReactDOM from "react-dom/client";
import "modern-normalize";
import "./index.css";
import { Container, Section } from "./components";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Benefits from "./components/Benefits/Benefits";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Benefits />
      <Footer />
     
    </>
  );
};

export default App;
