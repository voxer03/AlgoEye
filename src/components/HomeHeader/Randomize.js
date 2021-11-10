import {RedoOutlined} from '@ant-design/icons';
const Randomize = ({onClick}) => {
    return ( 
        <div style = { {marginTop :8}}>
            <button
                style = {{
                    width: 130,
                    height:'40px',
                    background: 'rgb(252, 62, 62)',
                    borderColor: 'rgb(252, 62, 62)',
                    fontWeight: 'bold',
                    borderRadius:'10px',
                    cursor:'pointer'
                  }}
                  icon = {<RedoOutlined />}
                  onClick = {onClick}
            >
             Randomize   
            </button>
        </div>
     );
}
 
export default Randomize;