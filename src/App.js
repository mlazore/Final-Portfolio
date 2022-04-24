import { Component } from 'react';
import logo from './logo.svg';
import Navbar from "./components/Navbar/Navbar"
import AboutMe from "./components/AboutMe/About"
// import Skills from "./components/Skills/Skills"
import Projects from "./components/Projects/Projects"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AboutMe/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
