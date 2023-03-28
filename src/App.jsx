//import components:
import Header from './layouts/Header';
import About from './components/About';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Nav from './layouts/Nav';
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";


function App() {
      useEffect(() => {
        Aos.init({
          duration: 1800,
          offset: 100,
          disable: "mobile",
        });
      }, []);

      return (
        <div>
          <Nav />
          <Header />
          <About />
          <Skills />
          <Certificates />
          <Projects />
          <Contact />
        </div>
      );
}

export default App;