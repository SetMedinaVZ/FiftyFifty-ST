import styled from 'styled-components';
import ReactSlider from 'react-slider'

const StyledSlider = styled(ReactSlider)`
  width: 50%;
  height: 25px;
  margin-top: 15vh;
`;

const StyledThumb = styled.div`
  height: 25px;
  line-height: 25px;
  width: 25px;
  text-align: center;
  background-color: #000;
  color: #000;
  border-radius: 50%;
  cursor: grab;
`;

const Thumb = (props, state) => <StyledThumb {...props}>{state.valueNow}</StyledThumb>;

const StyledTrack = styled.div`
  top: 0;
  bottom: 0;
  background: ${props => (props.index === 1 ? '#fff' : '#f00')};
  border-radius: 999px;
`;

const Track = (props, state) => <StyledTrack {...props} index={state.index}/>;



const Slider = ({ change }) => {
    return (
        <StyledSlider
            onChange={(value) => change(value)}
            defaultValue={[0]} renderTrack={Track} renderThumb={Thumb}/>
    )
}
export default Slider