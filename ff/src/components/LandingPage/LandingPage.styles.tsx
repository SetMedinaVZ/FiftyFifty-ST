import styled from "styled-components";
import LC from "../../images/loading.svg"


export const Window = styled.div`
  display: flex;
  width: 20vw;
  height: 30vh;
  flex-wrap: wrap;
  background-color: black;
  border: gray solid 1px;
  border-top: gray solid 5px;
  color: greenyellow;
  font-family: 'Courier';
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
