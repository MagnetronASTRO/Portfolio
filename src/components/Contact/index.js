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
import { MdEmail } from 'react-icons/md';
import CVpl from '../../files/Dominik_Grudnik_CV_pl.pdf';
import CVen from '../../files/Dominik_Grudnik_CV_en.pdf';
import { SectionTitle } from '../Stack/Stackelements';

import { useTranslation } from 'react-i18next';
import cookies from 'js-cookie';

const Theme = createTheme({
  palette: {
    primary: {
      main: '#ffc107',
      dark: '#ffb300',
    },
  },
});

const Contact = () => {
  const currentLanguageCode = cookies.get('i18next') || 'pl';
  const { t } = useTranslation();

  return (
    <ContactContainer id="contact">
      <SectionTitle>
        <h2>{t('contact')}</h2>
      </SectionTitle>
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
              href={currentLanguageCode === 'pl' ? CVpl : CVen}
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
                  .then(
                    (document.getElementById('emailbtn').textContent = `COPIED`)
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
