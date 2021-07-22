import React from 'react';
import {
  StackContainer,
  StackItem,
  FlexContainer,
  ItemDesc,
  SectionTitle,
} from './Stackelements';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaSass,
} from 'react-icons/fa';
import { FcSmartphoneTablet } from 'react-icons/fc';
import { SiStyledComponents, SiMaterialUi } from 'react-icons/si';

import { useTranslation } from 'react-i18next';

const Stack = () => {
  const { t } = useTranslation();

  return (
    <StackContainer id="stack">
      <SectionTitle>
        <h2>{t('stack_section')}</h2>
      </SectionTitle>
      <FlexContainer>
        <StackItem>
          <FaHtml5 style={{ color: '#FC490B' }} />
          <ItemDesc>HTML</ItemDesc>
        </StackItem>
        <StackItem>
          <FaCss3Alt style={{ color: '#2196F3' }} />
          <ItemDesc>CSS</ItemDesc>
        </StackItem>
        <StackItem>
          <FaJs style={{ color: '#F7DF1E' }} />
          <ItemDesc>JavaScript</ItemDesc>
        </StackItem>
        <StackItem>
          <FaReact style={{ color: '#61DAFB' }} />
          <ItemDesc>ReactJS</ItemDesc>
        </StackItem>
        <StackItem>
          <FaGitAlt style={{ color: '#F05033' }} />
          <ItemDesc>GIT</ItemDesc>
        </StackItem>
        <StackItem>
          <FcSmartphoneTablet />
          <ItemDesc>RWD</ItemDesc>
        </StackItem>
        <StackItem>
          <SiMaterialUi style={{ color: '#00B0FF' }} />
          <ItemDesc>MaterialUI</ItemDesc>
        </StackItem>
        <StackItem>
          <SiStyledComponents style={{ color: '#D671AF' }} />
          <ItemDesc>StylComp</ItemDesc>
        </StackItem>
        <StackItem>
          <FaSass style={{ color: '#D671AF' }} />
          <ItemDesc>SASS</ItemDesc>
        </StackItem>
      </FlexContainer>
    </StackContainer>
  );
};

export default Stack;
