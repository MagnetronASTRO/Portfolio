import React from 'react';
import PropTypes from 'prop-types';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu,
  SideBarContact,
  SBCItems,
  CVp,
} from './SidebarElements';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import CvPdf from '../../files/CV_Dominik_Grudnik.pdf';
import { MdEmail } from 'react-icons/md';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon style={{}} />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to="home"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Home
          </SidebarLink>
          <SidebarLink
            to="stack"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Stack
          </SidebarLink>
          <SidebarLink
            to="projects"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Projects
          </SidebarLink>
          <SidebarLink
            to="about"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            About
          </SidebarLink>
          <SidebarLink
            to="contact"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Contact
          </SidebarLink>
          <SideBarContact>
            <SBCItems href="https://github.com/MagnetronASTRO">
              <FaGithub />
            </SBCItems>
            <SBCItems href="https://www.linkedin.com/in/dominik-grudnik-426759212/">
              <FaLinkedin />
            </SBCItems>
            <SBCItems href={CvPdf} target="blank" download>
              <CVp>CV</CVp>
            </SBCItems>
            <SBCItems
              id="emailbtnside"
              onClick={() =>
                navigator.clipboard
                  .writeText('dom.grudnik@gmail.com')
                  .then(
                    (document.getElementById('emailbtnside').style.color =
                      '#29e332')
                  )
                  .then(alert('Email copied to clipboard.'))
              }
            >
              <MdEmail />
            </SBCItems>
          </SideBarContact>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

Sidebar.propTypes = {
  toggle: PropTypes.func,
  isOpen: PropTypes.bool,
};
export default Sidebar;
