import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  height: 120px;
  background-color: #444444;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 3;
  text-align: center;
`;

export const FooterContent = styled.p`
  font-size: 18px;
  color: white;

  @media screen and (max-width: 350px) {
    font-size: 6vw;
  }
`;
