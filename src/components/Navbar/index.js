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

import cookies from 'js-cookie';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

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

  const currentLanguageCode = cookies.get('i18next') || 'pl';
  const { t } = useTranslation();

  const handleToggleLanguage = () => {
    if (currentLanguageCode === 'pl') {
      i18next.changeLanguage('en');
    } else {
      i18next.changeLanguage('pl');
    }
  };

  return (
    <>
      <Nav
        className={navbar ? 'scrolled' : ''}
        style={{ WebkitTapHighlightColor: 'transparent' }}
      >
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            DG
          </NavLogo>
          <div className="btnwrapper">
            <div
              className="button r center"
              id="button-1"
              onClick={handleToggleLanguage}
            >
              <input type="checkbox" className="checkbox" />
              <div className="knobs"></div>
              <div className="layer"></div>
            </div>
          </div>
          <MobileIcon onClick={toggle}>
            <CgMenuLeft style={{ fontSize: '33px' }} />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="home" onClick={toggleHome}>
                {t('nav_home')}
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
                {t('nav_stack')}
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
                {t('nav_projects')}
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
                {t('nav_about')}
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
                {t('nav_contact')}
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
