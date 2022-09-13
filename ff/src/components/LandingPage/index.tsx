import React from "react";
import Background from "../Landing/MatrixRain";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Spinner, Window } from "./LandingPage.styles";
import TextPrinter from "../TextPrinter/TextPrinter";

const LandingPage = () => {
  return (
    <Parallax pages={2}>
      <ParallaxLayer>
        <Background />
      </ParallaxLayer>
      <ParallaxLayer>
        <Window>
          <TextPrinter />
        </Window>
        <Window>
          <Spinner />
        </Window>
      </ParallaxLayer>
    </Parallax>
  );
};

export default LandingPage;
