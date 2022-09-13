import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Main, Container, HalfContainer, Text, Button } from "./Nivel0.styles";
import { GlitchImage } from "react-glitch-image";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import img1 from "../../images/weirdImages/img1.jpeg";
import img2 from "../../images/weirdImages/img2.jpeg";
import img5 from "../../images/weirdImages/img5.jpeg";
import img6 from "../../images/weirdImages/img6.jpeg";
import img9 from "../../images/weirdImages/img9.jpeg";

const Nivel0 = () => {
  const [count, setCount] = useState(0);
  const [clicked, setClick] = useState(0);
  const navigate = useNavigate();
  const questions = [
    {
      question:
        "RU willing to MJWF ZPVS MJGF BU UIF GVMMFTU?" /*Yes => +1 No => -1*/,
      image: img1,
    },
    {
      question: "Would u like to know how u will JÑK ?" /*Yes => -1 No => +1*/,
      image: img2,
    },
    {
      question: "Do you ILROLCL OT NVK?" /*Yes =>  No => */,
      image: img5,
    },
    {
      question: "Would u like to know the QPRZHEEBI?" /*Yes => -1 No => +1*/,
      image: img6,
    },
    {
      question:
        "If u found a OCTIU JMPUÑ would u save it?" /*Yes => +1  No => -1 */,
      image: img9,
    },
  ];

  const handleYes = (e: React.MouseEvent<HTMLButtonElement>,question: string) => {
    if (question === questions[0].question ||question === questions[4].question) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }

    setClick(clicked + 1);

  };

  const handleNo = (e: React.MouseEvent<HTMLButtonElement>,question: string) => {
    if (question === questions[0].question || question === questions[4].question) {
      setCount(count - 1);
    } else {
      setCount(count + 1);
    }
    setClick(clicked + 1);
  };

  if(clicked === 5){
    if(count > 0){
      navigate("/level1a")
    }
    else{
      navigate("/level1b")
    }
  }

  return (
    <Main>
      <Parallax pages={5}>
        {questions.map((questions: any, index) => (
          <ParallaxLayer key={index} offset={index}>
            <Container>
              <HalfContainer>
                <GlitchImage
                  image={questions.image}
                  width={"30vw"}
                  animationInterval={2500}
                  splitSize={5}
                />
              </HalfContainer>

              <HalfContainer>
                <Text>{">> " + questions.question}</Text>
                <Button onClick={(e) => handleYes(e, questions.question)}>
                  {">> Yes"}
                </Button>
                <Button onClick={(e) => handleNo(e, questions.question)}>
                  {">> No"}
                </Button>
              </HalfContainer>
            </Container>
          </ParallaxLayer>
        ))}
      </Parallax>
    </Main>
  );
};

export default Nivel0;
