import React from 'react';
import {
  AboutContainer,
  AboutWrapper,
  AboutPresentation,
  AboutHeading,
  AboutPara,
  AboutContent,
} from './AboutElements';
import AboutImg from '../../images/about.jpg';
import { SectionTitle } from '../Stack/Stackelements';

import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <AboutContainer id="about">
      <SectionTitle>
        <h2>{t('about_section')}</h2>
      </SectionTitle>
      <AboutWrapper>
        <AboutPresentation src={AboutImg}></AboutPresentation>
        <AboutContent>
          <AboutHeading>{t('about')}</AboutHeading>
          <AboutPara>{t('about_para')}</AboutPara>
        </AboutContent>
      </AboutWrapper>
    </AboutContainer>
  );
};

export default About;
