import React from 'react';
import {
  StackContainer,
  StackItem,
  FlexContainer,
  ItemDesc,
} from './Stackelements';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from 'react-icons/fa';
import { FcSmartphoneTablet } from 'react-icons/fc';
import { SiStyledComponents, SiMaterialUi } from 'react-icons/si';

const Stack = () => {
  return (
    <StackContainer id="stack">
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
      </FlexContainer>
    </StackContainer>
  );
};

export default Stack;
