import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import NavBar from './Components/NavBar/Navbar';
import AboutMe from './Components/About/AboutMe';
import ProjectGallery from './Components/Projects/ProjectGallery';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Experience from './Components/Experience/Experience';

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <AboutMe />
      <Experience />
      <ProjectGallery />
      <Contact />
      <Footer/>
    </>
  );
}

export default App;
