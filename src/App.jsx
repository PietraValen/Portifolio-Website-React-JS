import React from 'react';
import Header from './src/Components/Header/Header.jsx';
import Nav from './src/Components/Nav/Nav.jsx';
import About from './src/Components/About/About.jsx';
import Experience from './src/Components/experience/Experience.jsx';
import Services from './src/Components/services/Services.jsx';
import Portifolio from './src/Components/portifolio/Portifolio.jsx';
import Testimonials from './src/Components/testimonials./Testimonials.jsx';
import Contact from './src/Components/contact/Contact.jsx';
import Footer from './src/Components/footer/Footer.jsx';
import './src/index.css';

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portifolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};
export default App;
