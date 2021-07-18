import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar';
import Sidebar from '../components/SideBar';
import Start from '../components/Start';
import Stack from '../components/Stack';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import About from '../components/About';
import Contact from '../components/Contact';

const Home = () => {
  const [isOpen, toggleIsOpen] = useState(false);

  const toggle = () => {
    toggleIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Start />
      <Stack />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

Home.propTypes = {
  isOpen: PropTypes.bool,
};
export default Home;
