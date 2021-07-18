import React from 'react';
import {
  StartContainer,
  HeroContent,
  TopT,
  BottomT,
  HeroContainer,
  HomeBtn,
  HomeBtnWrapper,
} from './StartElements';
import WorkIcon from '@material-ui/icons/Work';

const Start = () => {
  return (
    <StartContainer id="home">
      <HeroContainer>
        <HeroContent>
          <TopT>Hello, I&apos;m Dominik</TopT>
          <BottomT>Frontend developer</BottomT>
          <br></br>
          <HomeBtnWrapper
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            <HomeBtn>
              My projects <WorkIcon />
            </HomeBtn>
          </HomeBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </StartContainer>
  );
};

export default Start;
