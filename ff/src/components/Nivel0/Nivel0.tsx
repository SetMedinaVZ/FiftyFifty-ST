import React from "react";
import { Main, Container, HalfContainer, Text, Button } from "./Nivel0.styles";
import { GlitchImage } from "react-glitch-image";
import TransparentBG from "../../images/TransparentBG.svg";
import img1 from "../../images/weirdImages/img1.jpeg";
import img2 from "../../images/weirdImages/img2.jpeg";
import img3 from "../../images/weirdImages/img3.png";
import img4 from "../../images/weirdImages/img4.png";
import img5 from "../../images/weirdImages/img5.jpeg";
import img6 from "../../images/weirdImages/img6.jpeg";
import img7 from "../../images/weirdImages/img7.jpeg";
import img8 from "../../images/weirdImages/img8.jpeg";
import img9 from "../../images/weirdImages/img9.jpeg";
import img10 from "../../images/weirdImages/img10.jpeg";
import img11 from "../../images/weirdImages/img11.png";

const Nivel0 = () => {
  const imgArray = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
  ];

  const questions = [
    "RU willing to MJWF ZPVS MJGF BU UIF GVMMFTU?",
    "Would u like to know how u will JÑK ?",
    "Do you ILROLCL OT NVK?",
    "Would u like to know the QPRZHEEBI?",
    "If u found a OCTIU JMPUÑ would u save it?",
  ];

  const genRandomNumber = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <Main>
      <Container>
        <HalfContainer>
          <GlitchImage
            image={imgArray[genRandomNumber(0, 10)]}
            width={"40vw"}
            animationInterval={2500}
            splitSize={5}
          />
        </HalfContainer>

        <HalfContainer>
          <Text>{">> " + questions[genRandomNumber(0, 4)]}</Text>
          <Button> {">> Yes"} </Button>
          <Button> {">> No"} </Button>
        </HalfContainer>
      </Container>
    </Main>
  );
};

export default Nivel0;
