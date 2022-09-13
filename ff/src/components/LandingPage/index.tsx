import React from "react";
import Background from "../Landing/MatrixRain";
import {Parallax, ParallaxLayer} from "@react-spring/parallax";
import {LargeWindow, Spinner, Window, Wrapper} from "./LandingPage.styles";
import TextPrinter from "../TextPrinter/TextPrinter";
import {useNavigate} from "react-router-dom";

const LandingPage = () => {
    const navigate = useNavigate();
    document.addEventListener('keydown', function(event) {
        if (event.key == 'f') {
            navigate("/login")
        }
    }, true);
    return (
        <Parallax pages={2}>
            <ParallaxLayer>
                <Background/>
            </ParallaxLayer>
            <ParallaxLayer
             sticky={{start: 0.1, end:1.8}}
             speed={0.25}
            >
                <Wrapper start={0}>
                    <LargeWindow>
                        <TextPrinter/>
                    </LargeWindow>
                    <Window>
                        <Spinner/>
                    </Window>
                </Wrapper>

                <Wrapper start={20}>
                    <LargeWindow>
                        <TextPrinter/>
                    </LargeWindow>
                    <Window>
                        <Spinner/>
                    </Window>
                </Wrapper>

                <Wrapper start={40}>
                    <LargeWindow>
                        <TextPrinter/>
                    </LargeWindow>
                    <Window>
                        <Spinner/>
                    </Window>
                </Wrapper>
            </ParallaxLayer>
        </Parallax>
    )
}

export default LandingPage