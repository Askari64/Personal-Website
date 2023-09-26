import React from "react";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header2 from "./components/Header2";

const App = () => {
  return (
    <>
      <Navbar />
      <Header2 />
      <AboutMe/>
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default App;
