const SortingBar = ({style, colorCode}) => {
    let color = 'rgb(252, 62, 62)';

    switch(colorCode){
        case 1:
            color = '#02E095';
            break;
          case 2:
            color = 'blue';
            break;
          case 3:
            color = 'yellow';
            break;
          default:
            break;
    }
    
    return (  
        <div style = {{...style, backgroundColor:color}}></div>
    );
}
 
export default SortingBar;