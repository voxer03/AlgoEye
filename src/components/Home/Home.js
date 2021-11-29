import { useState, useEffect } from "react";
import HomeHeader from "../HomeHeader/HomeHeader";
import generateRandomizedArray from "../../helpers/RandomizeArray";
import SortingBar from "../sortingBars/SortingBar";
import bubbleSort from "../../algorithms/BubbleSort";
import selectionSort from "../../algorithms/selectionSort";
import MergeSortWrapper from "../../algorithms/MergeSort";
import insertionSort from "../../algorithms/insertionSort";
import quickSortWrapper from "../../algorithms/quickSort,";
import BubbleTheory from "./bubbleTheory/BubbleTheory";
import QuickSortTheory from "./quickSortTheory/QuickSortTheory";
import MergeSortTheory from "./mergeSortTheory/MergeSortTheory";
import SelectionSortTheory from "./selectionSortTheory/SelectionSortTheory";
import InsertionSortTheory from "./insertionSortTheory/InsertionSortTheory";

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


      //making site responsive according to width of the viewport width
      const [width, setWindowWidth] = useState(0);
      
      const responsive = {
        isOnMobile: width < 1000
      }
      const responsiveDesignDiv = () => {
        const divCss = {
          display:'flex',
          flexDirection:'row',
          height:'100%',
          width: '100%',
          overflow:'hidden'
        }

        const divMobileCss = {
          display:'flex',
          flexDirection:'column',
          height:'200vh',
          width: '100%',
          overflow:'hidden'
        }
         
        return responsive.isOnMobile? divMobileCss: divCss;
      }

      const responsiveDesignTheory = () =>{
        const theoryCss = {
          width:'35%',
          height:'90vh',
          overflow:'hidden',
          overflowY:'scroll',
          padding: '0px 2vw 0px 5vw'
        }
        const theoryMobileCss = {
          width:'97%',
          height:'150vh',
          overflow:'hidden',
          overflowY:'scroll',
          overflowX:'scroll',
          padding: '0px 2vw 0px 3vw'
        }

        return responsive.isOnMobile? theoryMobileCss : theoryCss;
      }

      const responsiveDesignBars = () => {
        const barCss = {
          display:'flex',
          flexDirection:'row',
          height:'100%',
          width:'50%',
          padding:'0px 0px 0px 5vw',
              
        }
        const barMobileCss = {
          display:'flex',
          flexDirection:'row',
          height:'100%',
          width:'90%',
          padding:'0px 0px 0px 5vw',
              
        }

        return responsive.isOnMobile? barMobileCss: barCss;
      }


      const updateDimensions = () => {
        const width = window.innerWidth;
        setWindowWidth(width);
        console.log(width);
      }
      useEffect(() => { 

        updateDimensions();

        window.addEventListener("resize", updateDimensions);
        return () => 
          window.removeEventListener("resize",updateDimensions);
      }, []);
        


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
                                  visualizationSpeed:visualizationSpeed,
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
                                });
                                
                                break;
          case 'Insertion Sort': 
                                await insertionSort({
                                  array:randomizedArray,
                                  setArray:setRandomizedArray,
                                  setColorsArray:setColorsArray,
                                  visualizationSpeed:visualizationSpeed
                                });
                                
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
            <div className = "baranddata" style ={responsiveDesignDiv()}>
              <div className = "theorydata" style = {responsiveDesignTheory()}>
              {/*conditions to check which algorithm is active and showing corresponding theory component */}
              {currentAlgorithm === 'Bubble Sort' && <BubbleTheory></BubbleTheory>}
              {currentAlgorithm === 'Selection Sort' && <SelectionSortTheory></SelectionSortTheory> }
              {currentAlgorithm === 'Insertion Sort' && <InsertionSortTheory></InsertionSortTheory>}
              {currentAlgorithm === 'QuickSort' && <QuickSortTheory></QuickSortTheory>}
              {currentAlgorithm === 'Merge Sort' && <MergeSortTheory></MergeSortTheory>} 
              {/* <SelectionSortTheory></SelectionSortTheory> */}
              </div>
            <div className = 'bars' style ={responsiveDesignBars()}
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
        </div>
     );
}
 
export default Home;