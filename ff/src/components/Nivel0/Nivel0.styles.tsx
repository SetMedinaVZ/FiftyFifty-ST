import styled from "styled-components";
import Jesus from "../../images/jesusBG.svg";


export const Main = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-image: url(${Jesus});
  background-size: cover;
  background-repeat: no-repeat;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  flex-wrap: wrap;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90vw;
  height: 90vh;
  margin: 5vh 0;
`;

export const HalfContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: inherit;
  max-height: 70vh;
  font-family: "Courier";
`;

export const Text = styled.p`
  color: white;
  font-size: 3rem;
`;

export const Button = styled.button`
  color: white;
  font-size: 3rem;
  background-color: transparent;

  &:hover {
    cursor: pointer;
    color: red;
  }
`;
