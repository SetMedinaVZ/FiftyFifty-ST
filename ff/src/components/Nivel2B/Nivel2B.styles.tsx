import styled from "styled-components";

interface propsWrapper {
    slider: number;
}
export const Wrapper = styled.div<propsWrapper> `
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  background-color: rgb(${props => (255-props.slider*2.55)},${props => (255-props.slider*2.55)},${props => (255-props.slider*2.55)});
;
`;

export const Girl = styled.img `
  position: fixed;
  width: 100px;
  top: 50%;
  left: 50%;
  margin-top: -80px; /* Negative half of height. */
  margin-left: -50px; /* Negative half of width. */
`;

export const Monster1 = styled.img<propsWrapper> `
  position: fixed;
  width: 100px;
  top: 0%;
  left: 50%;
  margin-top: ${props => (props.slider)}px; /* Negative half of height. */
  margin-left: -50px; /* Negative half of width. */
`;

export const Monster2 = styled.img<propsWrapper> `
  position: fixed;
  width: 100px;
  top: 50%;
  left: 0%;
  margin-top: -80px; /* Negative half of height. */
  margin-left: ${props => (props.slider*5.5)}px; /* Negative half of width. */
`;

export const Monster3 = styled.img<propsWrapper> `
  position: fixed;
  width: 100px;
  top: 50%;
  left: 100%;
  margin-top: -70px; /* Negative half of height. */
  margin-left: -${props => (props.slider*5.5+100)}px; /* Negative half of width. */
`;

export const Monster4 = styled.img<propsWrapper> `
  position: fixed;
  width: 100px;
  top: 100%;
  left: 50%;
  margin-top: -${props => (props.slider*2.5+120)}px; /* Negative half of height. */
  margin-left: -50px; /* Negative half of width. */
`;

export const MissingGirl = styled.div `
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  position: fixed;
  width: 100px;
  height: 100px;
  top: 50%;
  left: 50%;
  margin-top: -100px; /* Negative half of height. */
  margin-left: -50px; /* Negative half of width. */
  background-color: darkgray;
  font-family: "Courier";
`;

export const Guilt = styled.div `
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;
  font-family: "Courier";
  color: red;
  font-size: 2rem;
  margin-top: 10vh;
  text-align: center;
`;
