import styled from "styled-components";
import Space from "../../images/synth.gif";

export const Wrapper = styled.div `
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  background-image: url(${Space});
  background-size: cover;
  background-repeat: no-repeat;
  button{
    width: 10vw;
    height: 5vh;
    margin: 5vw;
  }
`;