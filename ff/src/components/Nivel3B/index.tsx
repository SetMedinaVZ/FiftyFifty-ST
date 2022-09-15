import React, {useState} from "react";
import SensitiveImg from "../../images/sensitive.png"
import {
    ButtonsBox,
    Disclaimer,
    Disclaimer3, Disclaimer4,
    Title,
    Title3, Title4,
    Video,
    Wrapper1,
    Wrapper2,
    Wrapper3,
    Wrapper4
} from "./Nivel3B.styles";

const Nivel3B = () => {
    const [ending, setEnding] = useState(0)
    const handleButtons = (ending: number) => {
        if (ending === 1)
            setEnding(1)
        else if (ending === 2)
            setEnding(2)
        else if (ending === 3)
            setEnding(3)
        else if (ending === 4)
            setEnding(4)
    }
    return (
        <>
            {ending === 0 &&
                <Wrapper1>
                    <Title>Choose your ending</Title>
                    <ButtonsBox>
                        <button onClick={e => handleButtons(1)}>Ending 1</button>
                        <button onClick={e => handleButtons(2)}>Ending 2</button>
                        <button onClick={e => handleButtons(3)}>Ending 3</button>
                        <button onClick={e => handleButtons(4)}>Ending 4</button>
                    </ButtonsBox>
                </Wrapper1>
            }
            {ending === 1 &&
                <Wrapper2>
                    <img src={SensitiveImg}/>
                    <Title>Sensitive Content</Title>
                    <br/>
                    <Disclaimer>
                        The last level is so dark that for legal reasons I can't show it
                    </Disclaimer>
                </Wrapper2>
            }
            {ending === 2 &&
                <Wrapper3>
                    <Title3>HUMANS</Title3>
                    <br/>
                    <Disclaimer3>
                        Not even the devil himself can't be compared with the monsters we can be
                        <br/>
                        DONT BE A MONSTER
                    </Disclaimer3>
                </Wrapper3>
            }
            {ending === 3 &&
                <Video src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0&autoplay=1&mute=1"/>
            }
            {ending === 4 &&
                <Wrapper4>
                    <Title4>WIP</Title4>
                    <br/>
                    <Disclaimer4>
                        No tuvimos tiempo de acabar la pagina pero espero les haya gustado
                    </Disclaimer4>
                </Wrapper4>
            }
        </>
    )
}


export default Nivel3B