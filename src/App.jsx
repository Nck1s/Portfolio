import React from 'react';
import './styles/App.css';
import Header from './components/header/Header';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import Portfolio from './components/portfolio/Portfolio';
import Resume from './components/resume/Resume';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <main className='main'>

      <Header />
      <Home />
      <Skills />
      <Portfolio />
      <Resume />
      <Contact />

    </main>
  )
}

export default App

