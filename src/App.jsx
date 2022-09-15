import React from "react";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import About from "./Components/About/About";
import Experience from "./Components/experience/Experience";
import Services from "./Components/services/Services";
import Portifolio from "./Components/portifolio/Portifolio";
import Testimonials from "./Components/testimonials./Testimonials";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/footer/Footer";

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
