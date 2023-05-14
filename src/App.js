// import './App.css';
// import About from './Component/About/About';

// function App() {
//   return (
//     <div className="App">
//      <About/>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import NavBar from './Component/Navbar';
import AboutUs from './Component/AboutUs';
import Services from './Component/Services';
import Contact from './Component/Contact';
import Footer from './Component/Footer';

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <AboutUs />
      <Services />
      <Contact />
      <Footer/>
    </>
  );
}

export default App;
