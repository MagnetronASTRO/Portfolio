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

const About = () => {
  return (
    <AboutContainer id="about">
      <SectionTitle>
        <h2>About</h2>
      </SectionTitle>
      <AboutWrapper>
        <AboutPresentation src={AboutImg}></AboutPresentation>
        <AboutContent>
          <AboutHeading>About Me</AboutHeading>
          <AboutPara>
            My name is Dominik Grudnik, I&apos;m 20 years old and I live near
            Krakow. This year I graduated from the IT technical school and I am
            enrolled in extramural studies at PK. I am an active person who
            likes various sports activities and follows the latest IT news.
          </AboutPara>
        </AboutContent>
      </AboutWrapper>
    </AboutContainer>
  );
};

export default About;
