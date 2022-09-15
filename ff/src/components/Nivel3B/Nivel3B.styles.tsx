import styled from "styled-components";
import VaultBoy from "../../images/techfail.png"
import Humans from "../../images/fmj.jpg"

export const Wrapper1 = styled.div `
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  background-color: #000000;
  color: #AAAAAA;
  font-family: "Courier";
  font-size: 2.5rem;
`;

export const Title = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  color: #AAAAAA;
  font-family: "Courier";
  font-size: 2.5rem;
`;

export const ButtonsBox = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60vw;
  flex-wrap: wrap;
  button{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20vw;
    height: 10vh;
    margin: 1vw;
  }
`



export const Wrapper2 = styled.div `
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  background-color: #00000090;
  color: #AAAAAA;
  font-family: "Courier";
  font-size: 2.5rem;
  img{
    width: 30vw;
  }
`;

export const Wrapper3 = styled.div `
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  color: #EEEEEE;
  font-family: "Courier";
  font-size: 2.5rem;
  background-image: url(${Humans});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Title3 = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  color: #FFFFFF;
  font-family: "Courier";
  font-size: 2.5rem;
`;

export const Disclaimer3 = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1rem;
  color: #FFFFFF;
  font-family: "Courier";
`;

export const Wrapper4 = styled.div `
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  color: #EEEEEE;
  font-family: "Courier";
  font-size: 2.5rem;
  background-image: url(${VaultBoy});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Title4 = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20vw;
  color: #000000;
  background-color: white;
  font-family: "Courier";
  font-size: 2.5rem;
`;

export const Disclaimer4 = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1rem;
  color: #000000;
  background-color: white;
  font-family: "Courier";
  padding-right: 1vw;
`;

export const Disclaimer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1rem;
  color: #AAAAAA;
  font-family: "Courier";
`;

export const Video = styled.iframe`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
`;

