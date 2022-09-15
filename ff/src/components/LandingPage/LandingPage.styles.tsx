import styled from "styled-components";
import LC from "../../images/loading.svg"

interface propsWrapper {
    start: number;
}

export const Wrapper = styled.div<propsWrapper>`
  display: flex;
  position: absolute;
  top: ${props => (props.start)}vh;
  left:${props => (props.start)}vh;
  width: 80vw;
  height: 40vh;
`;

export const Window = styled.div`
  display: flex;
  width: 20vw;
  height: 30vh;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  background-color: black;
  border: gray solid 1px;
  border-top: gray solid 5px;
  margin: 7vw;
`;

export const LargeWindow = styled.div`
  display: flex;
  width: 45vw;
  height: 40vh;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  background-color: black;
  border: gray solid 1px;
  border-top: gray solid 5px;
  overflow-y: hidden;
  margin: 1vw;
`;

export const Spinner = styled.div`
  width: 10vw;
  height: 10vw;
  background-image: url(${LC});
  background-repeat: no-repeat;
  background-size: contain;
  @keyframes spin{
    from{ transform: rotate(0deg); }
    to{ transform: rotate(360deg); }
  }
  animation: spin 2s linear infinite;
`;
