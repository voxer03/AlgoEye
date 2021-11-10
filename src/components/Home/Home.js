import { useState } from "react";
import HomeHeader from "../HomeHeader/HomeHeader";
import generateRandomizedArray from "../../helpers/RandomizeArray";
import SortingBar from "../sortingBars/SortingBar";
import bubbleSort from "../../algorithms/BubbleSort";
import selectionSort from "../../algorithms/selectionSort";
import MergeSortWrapper from "../../algorithms/MergeSort";
import insertionSort from "../../algorithms/insertionSort";
import quickSortWrapper from "../../algorithms/quickSort,";
const Home = () => {
    let ARRAY_SIZE = 50;
    const [currentAlgorithm, setCurrentAlgorithm] = useState('Bubble Sort');
    const [isVisualizing, setIsVisualizing] = useState(false);
    const [randomizedArray,setRandomizedArray] = useState(
        generateRandomizedArray({arraySize:ARRAY_SIZE})
    );
    const [colorsArray,setColorsArray] = useState( new Array(randomizedArray.length).fill(0));
    const [maxItem,setMaxItem] = useState(Math.max(...randomizedArray))
    const [visualizationSpeed,setVisualizationSpeed] = useState(30);
    const algorithms = [
        'Bubble Sort',
        'Insertion Sort',
        'Selection Sort',
        'QuickSort',
        'Merge Sort',
      ];

      const onRandomize = () => {
        if (isVisualizing) return;
        const nextRandomizedArray = generateRandomizedArray({
          arraySize: randomizedArray.length,
        });
        setRandomizedArray(nextRandomizedArray);
        setColorsArray(new Array(nextRandomizedArray.length).fill(0));
        setMaxItem(Math.max(...nextRandomizedArray));
      };


      const onInputSizeChanged = (val) => {
        if (isVisualizing) return;
        const nextRandomizedArray = generateRandomizedArray({ arraySize: val });
        setRandomizedArray(nextRandomizedArray);
        setMaxItem(Math.max(...nextRandomizedArray));
        setColorsArray(new Array(nextRandomizedArray.length).fill(0));
      };


      const onSpeedChange = (val) => {
        if (isVisualizing) return;
        setVisualizationSpeed(100 - val + 1);
      };

      const visualizeStart = async () =>{
        if(isVisualizing) return; //if visualization is on dont do anything

        setIsVisualizing(true);

        switch(currentAlgorithm){
          case 'Bubble Sort'   :
                                await bubbleSort({
                                  array:randomizedArray,
                                  setArray:setRandomizedArray,
                                  setColorArray:setColorsArray,
                                  visualizationSpeed:visualizationSpeed
                                });
                                break;
          
          case 'Selection Sort':
                                await selectionSort({
                                  array:randomizedArray,
                                  setArray:setRandomizedArray,
                                  setColorsArray:setColorsArray,
                                  visualizationSpeed:visualizationSpeed
                                })
                                break;
          case 'Merge Sort'    :
                                await MergeSortWrapper({
                                  array: randomizedArray,
                                  leftIndex: 0,
                                  rightIndex: randomizedArray.length - 1,
                                  setArray: setRandomizedArray,
                                  visualizationSpeed: visualizationSpeed,
                                  setColorsArray: setColorsArray,
                                });
                                break;
          case 'QuickSort' : 
                                await quickSortWrapper({
                                  array:randomizedArray,
                                  leftIndex:0,
                                  rightIndex: randomizedArray.length-1,
                                  setArray:setRandomizedArray,
                                  visualizationSpeed:visualizationSpeed,
                                  setColorsArray:setColorsArray
                                })

                                break;
          case 'Insertion Sort': 
                                await insertionSort({
                                  array:randomizedArray,
                                  setArray:setRandomizedArray,
                                  setColorsArray:setColorsArray,
                                  visualizationSpeed:visualizationSpeed
                                })
                                
                                break;
          
          
          default: break;
        }
        setColorsArray(new Array(randomizedArray.length).fill(0));
        setIsVisualizing(false);

      }

    return ( 
        <div style = {{
          display:'flex',
          flexDirection:'column',
          height:'100vh'
        }}>
            <HomeHeader algorithms={algorithms}
                onAlgorithmChange={setCurrentAlgorithm}
                currentAlgorithm={currentAlgorithm}
                onSpeedChange = {onSpeedChange}
                onInputSizeChanged = {onInputSizeChanged}
                onRandomize={onRandomize}
                onStart={visualizeStart}
                isVisualizing = {isVisualizing}
            ></HomeHeader>
            
            <div style ={{
              display:'flex',
              flexDirection:'row',
              height:'100%',
              width:'95vw',
              padding:'0px 0px 0px 0px',
              margin: 'auto'
            }}
            >
              {randomizedArray.map((item,index)=>{
                const height = (item/maxItem) * 100;
                const width = (100/randomizedArray.length);

                return (
                  <div style = {{
                    display:'flex',
                    alignItems:'end',
                    height:'95%',
                    width:`${width}%`,
                    borderBottom:'3px solid black'
                  }}>
                    <SortingBar
                      colorCode = {colorsArray[index]}
                      style = {{
                        height: `calc(${height}% - 20px)`,
                        width: '100%',
                        margin: 'auto 10% 0 10%',
                        borderRadius:'5px 5px 0px 0px'
                      }}
                    ></SortingBar>
                  </div>
                );
              })}
            </div>
        </div>
     );
}
 
export default Home;