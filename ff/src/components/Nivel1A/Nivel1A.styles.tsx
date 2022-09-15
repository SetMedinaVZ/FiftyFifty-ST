import styled from "styled-components";

export const Wrapper = styled.div `
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
`;


export const Video = styled.iframe`
  width: 100vw;
  height: 80vh;
  margin: 0;
  padding: 0;
`;

export const LargeWindow = styled.div`
  display: flex;
  width: 100vw;
  height: 19vh;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  background-color: black;
  border: gray solid 1px;
  border-top: gray solid 9px;
  overflow-y: hidden;
  margin: 0;
  color: #00FF0A;
  font-family: "Courier";
  padding: 10px 20px;
  input{
    width: 50vw;
    color: #00FF0A;
    font-family: "Courier";
    background-color: transparent;
    &:focus{
      outline: none !important;
      border:none;
      box-shadow: none;
    }
  }
`;

