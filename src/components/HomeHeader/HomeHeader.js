import { Row } from "antd";
import Randomize from "./Randomize";
import StartButton from "./startButton";
import AlgorithmDropDown from "./AlgorithmDropDown";
import DataSizeSlider from "./DataSizeSlider";
import VisualizationSpeedSlider from "./VisulaizationSpeedSlider";
import assets from '../../assets';
const HomeHeader = ({
  algorithms,
  onAlgorithmChange,
  currentAlgorithm,
  onSpeedChange,
  onInputSizeChanged,
  onRandomize,
  onStart,
  isVisualizing
}) => {

    const openUrl = (url) => {
        window.open(url, '_blank')?.focus();
      };
    
    return (  
        <Row
        style={{
        background: 'white',
        color: 'black',
        padding: '10px 0px 10px 0px',
        boxShadow:'10px 10px 10px black',   
        width: '100%',
        }}
        align="middle"
        justify="space-around"
        >
            <img
            alt=""
            src={assets.images.AlgoLogo}
            width={125}
            height={30}
            style={{ cursor: 'pointer' }}
            onClick={() =>
            openUrl('https://github.com/voxer03')
            }
            ></img>

            <AlgorithmDropDown
                currentAlgorithm = {currentAlgorithm}
                algorithms = {algorithms}
                onAlgorithmChange = {(algo) => onAlgorithmChange(algo)}
            >
            </AlgorithmDropDown>
            <DataSizeSlider 
              onInputSizeChanged = {onInputSizeChanged}
              isVisualizing = {isVisualizing}
            > </DataSizeSlider>

            <VisualizationSpeedSlider
              onSpeedChange = {onSpeedChange}
              isVisualizing = {isVisualizing}
            ></VisualizationSpeedSlider>
            
            <Randomize onClick={onRandomize}></Randomize>
            <StartButton onClick={onStart}></StartButton>
        </Row>
    );
}
 
export default HomeHeader;