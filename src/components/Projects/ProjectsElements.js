import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const ProjectsContainer = styled.div`
  width: 100%;
  height: auto;
  box-shadow: 0 0 20px 20px rgb(255, 255, 255);
  position: relative;
  z-index: 2;
  padding: 50px 0 50px 0;
`;

export const ProjectsDisplay = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0 auto;
  width: 100%;
  max-width: 1500px;
`;

export const ProBtn = styled(Button)`
  width: 110px;
  height: 44px;
  opacity: 0;

  @media screen and (max-width: 900px) {
    transition: 0.8s all ease;
    opacity: 1;
    transform: translate(0px, 20px);
  }
`;

export const ProjectItem = styled.div`
  width: 300px;
  height: 400px;
  text-align: center;

  &:hover ${ProBtn} {
    opacity: 1;
    transition: 0.3s ease-in-out;
    transform: translate(0px, 20px);
  }
`;

export const ProjectPresentation = styled.img`
  width: 100%;
`;

export const ProjectDescripion = styled.p`
  padding: 3% 0 3% 0;
  font-weight: 500;
`;

export const ProjectName = styled.h3`
  padding: 3% 0 3% 0;
  font-size: 150%;
`;
