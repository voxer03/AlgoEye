import {Slider} from 'antd';

const VisualizationSpeedSlider = ({
    onSpeedChange,
    isVisualizing
}) => {
    return (  
        <div
            style = {{
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center'
            }}
        >

            <div Style = {{color:'black', fontWeight:'bold' }}>Speed</div>
            
            <Slider
                disabled = {isVisualizing}
                defaultValue={30}
                style={{width: 200}}
                handleStyle={{borderColor: '#0D1929'}}
                trackStyle={{background: '#0D1929'}}
                onChange={onSpeedChange}
            >
            </Slider>
        </div>
    );
}
 
export default VisualizationSpeedSlider;