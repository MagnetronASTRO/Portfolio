import React from 'react';
import {
  ContactContainer,
  ContactWrapper,
  ContactItem,
  ItemBtn,
} from './ContactElements';
import { FaCodeBranch, FaLinkedin, FaDownload } from 'react-icons/fa';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';
import { MdEmail } from 'react-icons/md';
import CvPdf from '../../files/CV_Dominik_Grudnik.pdf';

const Theme = createTheme({
  palette: {
    primary: {
      main: grey[800],
    },
  },
});

const Contact = () => {
  // function copiedOn() {
  //   navigator.clipboard
  //     .writeText('dom.grudnik@gmail.com')
  //     .then(console.log(this));
  // }
  return (
    <ContactContainer id="contact">
      <ContactWrapper>
        <ThemeProvider theme={Theme}>
          <ContactItem>
            <ItemBtn
              variant="contained"
              color="primary"
              style={{
                fontSize: '23px',
              }}
              href="https://github.com/MagnetronASTRO"
            >
              Github
              <FaCodeBranch style={{ fontSize: ' 35px', marginLeft: '5px' }} />
            </ItemBtn>
          </ContactItem>
          <ContactItem>
            <ItemBtn
              variant="contained"
              color="primary"
              display="flex"
              style={{ fontSize: '23px' }}
              href="https://www.linkedin.com/in/dominik-grudnik-426759212/"
            >
              Linkedin
              <FaLinkedin style={{ fontSize: ' 35px', marginLeft: '5px' }} />
            </ItemBtn>
          </ContactItem>
          <ContactItem>
            <ItemBtn
              variant="contained"
              color="primary"
              style={{ fontSize: '23px' }}
              href={CvPdf}
              target="blank"
              download
            >
              CV
              <FaDownload style={{ fontSize: ' 35px', marginLeft: '5px' }} />
            </ItemBtn>
          </ContactItem>
          <ContactItem>
            <ItemBtn
              variant="contained"
              color="primary"
              style={{ fontSize: '23px' }}
              id="emailbtn"
              onClick={() =>
                navigator.clipboard
                  .writeText('dom.grudnik@gmail.com')
                  .then(
                    (document.getElementById('emailbtn').style.backgroundColor =
                      '#29e332')
                  )
              }
            >
              email
              <MdEmail style={{ fontSize: ' 35px', marginLeft: '5px' }} />
            </ItemBtn>
          </ContactItem>
        </ThemeProvider>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default Contact;
