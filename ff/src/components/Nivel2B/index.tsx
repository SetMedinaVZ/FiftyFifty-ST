import React, {useState} from "react";
import Slider from "./Slider";
import GirlImg from "../../images/girl.gif"
import Monster1Img from "../../images/darkman.png"
import Monster2Img from "../../images/cursed1.jpeg"
import Monster3Img from "../../images/cursed3.jpeg"
import Monster4Img from "../../images/cursed 4.jpeg"
import {useNavigate} from "react-router-dom";


import {Girl, Guilt, MissingGirl, Monster1, Monster2, Monster3, Monster4, Wrapper} from "./Nivel2B.styles";

const Nivel2B = () => {
    const navigate = useNavigate()
    const [sliderVal, setSliderVal] = useState(0);
    const sliderChange = (val: any) => {
        setSliderVal(val);
    }
    const handleLast = () => {
        navigate("/level3b");
    }
    return (
        <Wrapper slider={sliderVal}>
            {sliderVal === 100 ?
                <>
                    <MissingGirl onClick={handleLast}>Missing Girl.jpg</MissingGirl>
                    <Guilt>your curiosity make the girl disappear <br/> THIS IS YOUR FAULT</Guilt>
                </>
                :
                <>
                    <Girl src={GirlImg}/>
                    <Monster1 slider={sliderVal} src={Monster1Img}/>
                    <Monster2 slider={sliderVal} src={Monster2Img}/>
                    <Monster3 slider={sliderVal} src={Monster3Img}/>
                    <Monster4 slider={sliderVal} src={Monster4Img}/>
                    <Slider change={sliderChange}/>
                </>
            }
        </Wrapper>
    )
}

export default Nivel2B