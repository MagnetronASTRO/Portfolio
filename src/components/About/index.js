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

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutWrapper>
        <AboutPresentation src={AboutImg}></AboutPresentation>
        <AboutContent>
          <AboutHeading>About Me</AboutHeading>
          <AboutPara>
            My name is Dominik Grudnik, I&apos;m 20 years old and I live in
            vilage near Krakow called Korzkiew. I gradueted this year from IT
            technical high school and I&apos;m enrolled to PK university for
            extramural studies. I&apos;m active person who likes variety of
            sport activities and I follows latest IT innovations.
          </AboutPara>
        </AboutContent>
      </AboutWrapper>
    </AboutContainer>
  );
};

export default About;
