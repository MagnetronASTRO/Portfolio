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

import { useTranslation } from 'react-i18next';

const Start = () => {
  const { t } = useTranslation();

  return (
    <StartContainer id="home">
      <HeroContainer>
        <HeroContent>
          <TopT>{t('start_top')}</TopT>
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
              {t('start_btn')} <WorkIcon />
            </HomeBtn>
          </HomeBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </StartContainer>
  );
};

export default Start;
