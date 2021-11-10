import { Button } from "antd";
import {PlayCircleOutlined} from "@ant-design/icons"

const StartButton = ({onClick}) => {
    return ( 
        <div style = {{marginTop:8}}>
            <Button
            type="primary"
            style={{
              width: 130,
              height:'40px',
              color:'black',
              background: 'rgb(252, 62, 62)',
              borderColor: 'rgb(252, 62, 62)',
              fontWeight: 'bold',
            }}
            icon={<PlayCircleOutlined />}
            onClick={onClick}
            >
                
            Start

            </Button>
        </div>
     );
}
 
export default StartButton;