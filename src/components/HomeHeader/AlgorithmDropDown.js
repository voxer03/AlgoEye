import {Menu, Dropdown,Button} from 'antd';
import {DownOutlined} from '@ant-design/icons';
const AlgorithmDropDown = ({
  currentAlgorithm,
  algorithms,
  onAlgorithmChange}) => {
    
    const width = 170;
    const menu = (
        <Menu>
          {algorithms.map(function (algorithm, idx) {
            return (
              <Menu.Item key={idx} onClick={() => onAlgorithmChange(algorithm)}>
                {algorithm}
              </Menu.Item>
            );
          })}
        </Menu>
      );
    return ( 
        <Dropdown overlay={menu}  trigger= {['click']} placement='bottomRight' arrow>
        <div
          style={{
            height: 20,
            width: width-40,
            padding: 10,
            fontWeight: 'bold',
            fontColor: 'white',
            background: 'rgb(252, 62, 62)',
            borderColor: 'rgb(252, 62, 62)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            cursor: 'pointer',
            borderRadius:'10px'
          }}
          
        >
          {currentAlgorithm} <DownOutlined />
        </div>
      </Dropdown>
    );
}
 
export default AlgorithmDropDown;

