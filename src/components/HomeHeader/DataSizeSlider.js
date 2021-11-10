import {Slider} from 'antd';
const DataSizeSlider = ({onInputSizeChanged,isVisualizing}) => {
    return (  
        <div
            style={{
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center'
            }}
        >
            <div style={{color:'black', fontWeight:'bold'}}>Array Size</div>
            <Slider
                disabled={isVisualizing}
                defaultValue={50}
                min={30}
                max={250}
                step={2}
                style={{width: 200}}
                handleStyle={{borderColor: '#0D1929'}}
                trackStyle={{background: '#0D1929'}}
                onChange={onInputSizeChanged}
            >
            </Slider>
        </div>

    );
}
 
export default DataSizeSlider;