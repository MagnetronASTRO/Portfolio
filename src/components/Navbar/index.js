import { useState } from 'react';
import { CgMenuLeft } from 'react-icons/cg';
import PropTypes from 'prop-types';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from './NavbarElements';
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({ toggle }) => {
  const [navbar, setNavbar] = useState(false);

  const changeShadow = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeShadow);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <Nav
        className={navbar ? 'scrolled' : 'nscrolled'}
        style={{ WebkitTapHighlightColor: 'transparent' }}
      >
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            DG
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <CgMenuLeft style={{ fontSize: '33px' }} />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="home" onClick={toggleHome}>
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="stack"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Stack
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Projects
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-250}
              >
                Contact
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

Navbar.propTypes = {
  toggle: PropTypes.func,
};
export default Navbar;
