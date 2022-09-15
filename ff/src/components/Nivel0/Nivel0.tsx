import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Main, Container, HalfContainer, Text, Button} from "./Nivel0.styles";
import {GlitchImage} from "react-glitch-image";
import img1 from "../../images/weirdImages/img1.jpeg";
import img2 from "../../images/weirdImages/img2.jpeg";
import img5 from "../../images/weirdImages/img5.jpeg";
import img6 from "../../images/weirdImages/img6.jpeg";
import img9 from "../../images/weirdImages/img9.jpeg";
import Typewriter from "typewriter-effect";


const Nivel0 = () => {
    const [count, setCount] = useState(0);
    const [clicked, setClick] = useState(0);
    const [index, setIndex] = useState(0);
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


    if (clicked === 5) {
        if (count > 0) {
            navigate("/level1a")
        } else {
            navigate("/level1b")
        }
    }

    document.addEventListener('keydown', function (event) {
        if (event.key == 'y') {
            if (index === 0 || index === 4) {
                setCount(count + 1);
            } else {
                setCount(count - 1);
            }
            if(index!== 4) {
                setIndex(index + 1)
            }
            setClick(clicked+1)
        }
        if (event.key == 'n') {
            if (index === 0 || index === 4) {
                setCount(count - 1);
            } else {
                setCount(count + 1);
            }
            if(index!== 4) {
                setIndex(index + 1)
            }
            setClick(clicked+1)
        }
    }, true);
    return (
        <Main>
            <Container>
                <HalfContainer>
                    <GlitchImage
                        image={questions[index].image}
                        width={"30vw"}
                        animationInterval={2500}
                        splitSize={5}
                    />
                </HalfContainer>

                <HalfContainer>
                    <Text>
                        {index === 0 &&
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter.typeString(">> " + questions[0].question)
                                        .start();
                                }}
                            />
                        }
                        {index === 1 &&
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter.typeString(">> " + questions[1].question)
                                        .callFunction(() => {
                                            console.log('String typed out!');
                                        })
                                        .start();
                                }}
                            />
                        }
                        {index === 2 &&
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter.typeString(">> " + questions[2].question)
                                        .callFunction(() => {
                                            console.log('String typed out!');
                                        })
                                        .start();
                                }}
                            />
                        }
                        {index === 3 &&
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter.typeString(">> " + questions[3].question)
                                        .callFunction(() => {
                                            console.log('String typed out!');
                                        })
                                        .start();
                                }}
                            />
                        }
                        {index === 4 &&
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter.typeString(">> " + questions[4].question)
                                        .callFunction(() => {
                                            console.log('String typed out!');
                                        })
                                        .start();
                                }}
                            />
                        }
                    </Text>
                    <Button>
                        {">> Yes"}
                        <br/>
                        {">> No"}
                    </Button>
                </HalfContainer>
            </Container>
        </Main>
    );
};

export default Nivel0;
