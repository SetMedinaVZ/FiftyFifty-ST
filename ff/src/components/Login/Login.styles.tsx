import styled from "styled-components";
import LC from "../../images/L.svg"

export const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-between;
  background-image: url(${LC});
  background-size: cover;
  background-repeat: no-repeat;

`;

export const Header = styled.div`
  display: flex;
  width: 100vw;
  height: 5vh;
  color: azure;
  font-size: 1.5rem;
  padding-left: 1vw;
  font-family: 'Kaushan';

`;

export const KeyInput = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #111111;
  border: gray 1px solid;
  color: azure;
  font-size: 1.5rem;
  width: 50vw;
  height: 4vh;
`;

export const InputBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  justify-content: center;
  color: azure;
  font-size: 1.2rem;
  font-family: 'Courier';
`;

export const FooterBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-end;
  align-items: flex-end;
  width: 100vw;
  justify-content: center;
`;

export const KeyText = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-end;
  align-items: flex-end;
  width: 100vw;
  justify-content: center;
`;

export const Footer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-end;
  align-items: flex-end;
  width: 47vw;
  height: 24vh;
  justify-content: center;
  font-size: 0.5rem;
  color: azure;
  font-family: 'Courier';
`;

