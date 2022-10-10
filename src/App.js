import React, {Component} from 'react'
import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';








const App = () =>{
  return (
    <div className="App">
      <Home/>
      <AboutMe />
      <Skills />
      <Projects />  
      <Contact/>       
    </div>
  );
}

export default App;
