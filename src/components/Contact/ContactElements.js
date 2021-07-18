import Button from '@material-ui/core/Button';
import styled from 'styled-components';

export const ContactContainer = styled.div`
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  height: auto;
`;

export const ContactWrapper = styled.div`
  height: 700px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  padding: 0 40px 0 40px;
  box-shadow: 0 0 30px 30px rgb(255, 255, 255);

  @media screen and (max-width: 900px) {
    transition: 0.4s all ease;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    column-gap: 40px;
    height: 600px;
    padding: 20px 40px 20px 40px;
  }
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const ItemBtn = styled(Button)`
  height: 80px;
  width: 21vw;
  max-width: 300px;

  @media screen and (max-width: 900px) {
    width: 100%;
    max-width: none;
  }
`;
