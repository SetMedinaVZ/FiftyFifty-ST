import React from "react";
import { Container } from "./TextPrinter.styles";
import Typewriter from "typewriter-effect";
import { hacking_script } from "./hackScript";

const TextPrinter = () => {
  return (
    <Container>
      <Typewriter
        options={{
          strings: [hacking_script],
          autoStart: true,
          loop: true,
          delay:2,
        }}
      />
    </Container>
  );
};

export default TextPrinter;
