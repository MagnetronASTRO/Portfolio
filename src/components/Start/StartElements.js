import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import myBg from "../../images/trumpetBG.jpg";

export const StartContainer = styled.div`
  height: 900px;
  position: relative;
  width: 100%;
  box-shadow: inset 0 -30px 20px -20px rgb(255 255 255);
  background: #fff url(${myBg}) center center/cover no-repeat;
`;

export const HeroContainer = styled.div`
  background: transparent;
  display: flex;
  justify-content: start;
  align-items: center;
  height: 100%;
  margin: 0 auto;
  width: 100%;
  max-width: 1500px;
`;

export const HomeBtn = styled.button`
  width: 190px;
  height: 44px;
  background-color: #ffc107;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: 0.4s;

  @media screen and (max-width: 900px) {
    transition: 0.8s all ease;
    width: 100%;
  }

  &:hover {
    transition: 0.4s;
    background-color: #ffb300;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
      0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  }
`;
export const HeroContent = styled.div`
  overflow: hidden;
  padding: 24px;
  margin: 24px;
  align-self: center;
  text-shadow: -1.5px -1.5px 1px #ffc107;
  color: black;
  background: rgb(255, 255, 255, 0.9);
  border-radius: 20px;
  box-shadow: 0 0 20px 1px rgb(255, 255, 255);

  @media screen and (max-width: 900px) {
    transition: 0.8s all ease;
    width: 100%;
    padding: 24px;
  }
`;

export const TopT = styled.p`
  font-weight: 800;
  font-size: 34px;
  font-style: italic;
`;

export const BottomT = styled.p`
  font-weight: 600;
  font-size: 24px;
`;

export const HomeBtnWrapper = styled(LinkS)``;
