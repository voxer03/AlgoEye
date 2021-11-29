import image13 from './images/image13.jpg'
import image12 from './images/image12.jpg';
import image11 from './images/image11.jpg';
import image10 from './images/image10.jpg';
import image9 from './images/image9.jpg';
import image8 from './images/image8.jpg';
import image7 from './images/image7.jpg';
import image6 from './images/image6.jpg';
import image5 from './images/image5.jpg';
import image4 from './images/image4.jpg';
import image3 from './images/image3.jpg';
import image2 from './images/image2.jpg';
import image1 from './images/image1.jpg';
const InsertionSortTheory = () => {
    return ( 
        <div style={{ paddingTop: "4vh" }}>
            <meta content="text/html; charset=UTF-8" httpEquiv="content-type" />
            <style
                type="text/css"
                dangerouslySetInnerHTML={{
                __html:
                    'ol{margin:0;padding:0}table td,table th{padding:0}.c3{border-right-style:solid;padding-top:0pt;border-top-width:0pt;border-right-width:0pt;padding-left:0pt;padding-bottom:0pt;line-height:1.15;border-left-width:0pt;border-top-style:solid;margin-right:2pt;margin-left:2pt;border-left-style:solid;border-bottom-width:0pt;border-bottom-style:solid;orphans:2;widows:2;text-align:justify;padding-right:0pt}.c12{border-right-style:solid;padding-top:0pt;border-top-width:0pt;border-right-width:0pt;padding-left:0pt;padding-bottom:0pt;line-height:1.15;border-left-width:0pt;border-top-style:solid;margin-right:2pt;margin-left:2pt;border-left-style:solid;border-bottom-width:0pt;border-bottom-style:solid;orphans:2;widows:2;text-align:center;padding-right:0pt}.c8{-webkit-text-decoration-skip:none;color:#000000;font-weight:700;text-decoration:underline;vertical-align:baseline;text-decoration-skip-ink:none;font-size:20pt;font-family:"Arial";font-style:normal}.c1{background-color:#eeeeee;color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:11.5pt;font-family:"Courier New";font-style:normal}.c6{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:17.5pt;font-family:"Arial";font-style:normal}.c9{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:"Arial";font-style:normal}.c14{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:15pt;font-family:"Arial";font-style:normal}.c0{padding-top:0pt;padding-bottom:0pt;line-height:1.15;orphans:2;widows:2;text-align:left;height:11pt}.c4{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:12pt;font-family:"Arial";font-style:normal}.c5{padding-top:18pt;padding-bottom:4pt;line-height:1.15;orphans:2;widows:2;text-align:left}.c2{padding-top:0pt;padding-bottom:0pt;line-height:1.15;orphans:2;widows:2;text-align:left}.c10{padding-top:14pt;padding-bottom:4pt;line-height:1.15;orphans:2;widows:2;text-align:left}.c7{background-color:#ffffff;max-width:451.4pt;padding:72pt 72pt 72pt 72pt}.c11{font-size:9pt}.c13{font-size:12pt}.title{padding-top:0pt;color:#000000;font-size:26pt;padding-bottom:3pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}.subtitle{padding-top:0pt;color:#666666;font-size:15pt;padding-bottom:16pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}li{color:#000000;font-size:11pt;font-family:"Arial"}p{margin:0;color:#000000;font-size:11pt;font-family:"Arial"}h1{padding-top:20pt;color:#000000;font-size:20pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h2{padding-top:18pt;color:#000000;font-size:16pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h3{padding-top:16pt;color:#434343;font-size:14pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h4{padding-top:14pt;color:#666666;font-size:12pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h5{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h6{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;font-style:italic;orphans:2;widows:2;text-align:left}',
                }}
            />
            <p className="c12">
                <span className="c8">Insertion Sort</span>
            </p>
            <p className="c3">
                <span className="c4">
                This is an in-place comparison-based sorting algorithm. Here, a sub-list
                is maintained which is always sorted. For example, the lower part of an
                array is maintained to be sorted. An element which is to be 'inserted in
                this sorted sub-list, has to find its appropriate place and then it has to
                be inserted there. Hence the name, insertion sort.
                </span>
            </p>
            <p className="c3">
                <span className="c13">
                The array is searched sequentially and unsorted items are moved and
                inserted into the sorted sub-list (in the same array). This algorithm is
                not suitable for large data sets as its average and worst case complexity
                are of Ο(n
                </span>
                <span className="c11">2</span>
                <span className="c4">), where n is the number of items.</span>
            </p>
            <h2 className="c5" id="h.bv8k6j4uvtwx">
                <span className="c6">How Insertion Sort Works?</span>
            </h2>
            <p className="c3">
                <span className="c4">We take an unsorted array for our example.</span>
            </p>
            <p className="c2">
                <span
                style={{
                    overflow: "hidden",
                    display: "inline-block",
                    margin: "0.00px 0.00px",
                    border: "0.00px solid #000000",
                    transform: "rotate(0.00rad) translateZ(0px)",
                    WebkitTransform: "rotate(0.00rad) translateZ(0px)",
                    width: "391.00px",
                    height: "56.00px",
                }}
                >
                <img
                    alt="Unsorted Array"
                    src={image3}
                    style={{
                    width: "391.00px",
                    height: "56.00px",
                    marginLeft: "0.00px",
                    marginTop: "0.00px",
                    transform: "rotate(0.00rad) translateZ(0px)",
                    WebkitTransform: "rotate(0.00rad) translateZ(0px)",
                    }}
                    title
                />
                </span>
            </p>
            <p className="c3">
                <span className="c4">Insertion sort compares the first two elements.</span>
            </p>
            <p className="c2">
                <span
                style={{
                    overflow: "hidden",
                    display: "inline-block",
                    margin: "0.00px 0.00px",
                    border: "0.00px solid #000000",
                    transform: "rotate(0.00rad) translateZ(0px)",
                    WebkitTransform: "rotate(0.00rad) translateZ(0px)",
                    width: "392.00px",
                    height: "56.00px",
                }}
                >
                <img
                    alt="Insertion Sort"
                    src={image8}
                    style={{
                    width: "392.00px",
                    height: "56.00px",
                    marginLeft: "0.00px",
                    marginTop: "0.00px",
                    transform: "rotate(0.00rad) translateZ(0px)",
                    WebkitTransform: "rotate(0.00rad) translateZ(0px)",
                    }}
                    title
                />
                </span>
            </p>
            <p className="c3">
                <span className="c4">
                It finds that both 14 and 33 are already in ascending order. For now, 14
                is in sorted sub-list.
                </span>
            </p>
            <p className="c2">
                <span
                style={{
                    overflow: "hidden",
                    display: "inline-block",
                    margin: "0.00px 0.00px",
                    border: "0.00px solid #000000",
                    transform: "rotate(0.00rad) translateZ(0px)",
                    WebkitTransform: "rotate(0.00rad) translateZ(0px)",
                    width: "392.00px",
                    height: "56.00px",
                }}
                >
                <img
                    alt="Insertion Sort"
                    src={image7}
                    style={{
                    width: "392.00px",
                    height: "56.00px",
                    marginLeft: "0.00px",
                    marginTop: "0.00px",
                    transform: "rotate(0.00rad) translateZ(0px)",
                    WebkitTransform: "rotate(0.00rad) translateZ(0px)",
                    }}
                    title
                />
                </span>
            </p>
            <p className="c3">
                <span className="c4">
                Insertion sort moves ahead and compares 33 with 27.
                </span>
            </p>
            <p className="c2">
                <span
                style={{
                    overflow: "hidden",
                    display: "inline-block",
                    margin: "0.00px 0.00px",
                    border: "0.00px solid #000000",
                    transform: "rotate(0.00rad) translateZ(0px)",
                    WebkitTransform: "rotate(0.00rad) translateZ(0px)",
                    width: "392.00px",
                    height: "56.00px",
                }}
                >
                <img
                    alt="Insertion Sort"
                    src={image13}
                    style={{
                    width: "392.00px",
                    height: "56.00px",
                    marginLeft: "0.00px",
                    marginTop: "0.00px",
                    transform: "rotate(0.00rad) translateZ(0px)",
                    WebkitTransform: "rotate(0.00rad) translateZ(0px)",
                    }}
                    title
                />
                </span>
            </p>
            <p className="c3">
                <span className="c4">
                And finds that 33 is not in the correct position.
                </span>
            </p>
            <p className="c2">
                <span
                style={{
                    overflow: "hidden",
                    display: "inline-block",
                    margin: "0.00px 0.00px",
                    border: "0.00px solid #000000",
                    transform: "rotate(0.00rad) translateZ(0px)",
                    WebkitTransform: "rotate(0.00rad) translateZ(0px)",
                    width: "392.00px",
                    height: "56.00px",
                }}
                >
                <img
                    alt="Insertion Sort"
                    src={image6}
                    style={{
                    width: "392.00px",
                    height: "56.00px",
                    marginLeft: "0.00px",
                    marginTop: "0.00px",
                    transform: "rotate(0.00rad) translateZ(0px)",
                    WebkitTransform: "rotate(0.00rad) translateZ(0px)",
                    }}
                    title
                />
                </span>
            </p>
            <p className="c3">
                <span className="c4">
                It swaps 33 with 27. It also checks with all the elements of sorted
                sub-list. Here we see that the sorted sub-list has only one element 14,
                and 27 is greater than 14. Hence, the sorted sub-list remains sorted after
                swapping.
                </span>
            </p>
            <p className="c2">
                <span
                style={{
                    overflow: "hidden",
                    display: "inline-block",
                    margin: "0.00px 0.00px",
                    border: "0.00px solid #000000",
                    transform: "rotate(0.00rad) translateZ(0px)",
                    WebkitTransform: "rotate(0.00rad) translateZ(0px)",
                    width: "392.00px",
                    height: "56.00px",
                }}
                >
                <img
                    alt="Insertion Sort"
                    src={image1}
                    style={{
                    width: "392.00px",
                    height: "56.00px",
                    marginLeft: "0.00px",
                    marginTop: "0.00px",
                    transform: "rotate(0.00rad) translateZ(0px)",
                    WebkitTransform: "rotate(0.00rad) translateZ(0px)",
                    }}
                    title
                />
                </span>
            </p>
            <p className="c3">
                <span className="c4">
                By now we have 14 and 27 in the sorted sub-list. Next, it compares 33 with
                10.
                </span>
            </p>
            <p className="c2">
                <span
                style={{
                    overflow: "hidden",
                    display: "inline-block",
                    margin: "0.00px 0.00px",
                    border: "0.00px solid #000000",
                    transform: "rotate(0.00rad) translateZ(0px)",
                    WebkitTransform: "rotate(0.00rad) translateZ(0px)",
                    width: "392.00px",
                    height: "56.00px",
                }}
                >
                <img
                    alt="Insertion Sort"
                    src={image12}
                    style={{
                    width: "392.00px",
                    height: "56.00px",
                    marginLeft: "0.00px",
                    marginTop: "0.00px",
                    transform: "rotate(0.00rad) translateZ(0px)",
                    WebkitTransform: "rotate(0.00rad) translateZ(0px)",
                    }}
                    title
                />
                </span>
            </p>
            <p className="c3">
                <span className="c4">These values are not in a sorted order.</span>
            </p>
            <p className="c2">
                <span
                style={{
                    overflow: "hidden",
                    display: "inline-block",
                    margin: "0.00px 0.00px",
                    border: "0.00px solid #000000",
                    transform: "rotate(0.00rad) translateZ(0px)",
                    WebkitTransform: "rotate(0.00rad) translateZ(0px)",
                    width: "392.00px",
                    height: "56.00px",
                }}
                >
                <img
                    alt="Insertion Sort"
                    src={image9}
                    style={{
                    width: "392.00px",
                    height: "56.00px",
                    marginLeft: "0.00px",
                    marginTop: "0.00px",
                    transform: "rotate(0.00rad) translateZ(0px)",
                    WebkitTransform: "rotate(0.00rad) translateZ(0px)",
                    }}
                    title
                />
                </span>
            </p>
            <p className="c3">
                <span className="c4">So we swap them.</span>
            </p>
            <p className="c2">
                <span
                style={{
                    overflow: "hidden",
                    display: "inline-block",
                    margin: "0.00px 0.00px",
                    border: "0.00px solid #000000",
                    transform: "rotate(0.00rad) translateZ(0px)",
                    WebkitTransform: "rotate(0.00rad) translateZ(0px)",
                    width: "392.00px",
                    height: "56.00px",
                }}
                >
                <img
                    alt="Insertion Sort"
                    src={image10}
                    style={{
                    width: "392.00px",
                    height: "56.00px",
                    marginLeft: "0.00px",
                    marginTop: "0.00px",
                    transform: "rotate(0.00rad) translateZ(0px)",
                    WebkitTransform: "rotate(0.00rad) translateZ(0px)",
                    }}
                    title
                />
                </span>
            </p>
            <p className="c3">
                <span className="c4">However, swapping makes 27 and 10 unsorted.</span>
            </p>
            <p className="c2">
                <span
                style={{
                    overflow: "hidden",
                    display: "inline-block",
                    margin: "0.00px 0.00px",
                    border: "0.00px solid #000000",
                    transform: "rotate(0.00rad) translateZ(0px)",
                    WebkitTransform: "rotate(0.00rad) translateZ(0px)",
                    width: "392.00px",
                    height: "56.00px",
                }}
                >
                <img
                    alt="Insertion Sort"
                    src={image11}
                    style={{
                    width: "392.00px",
                    height: "56.00px",
                    marginLeft: "0.00px",
                    marginTop: "0.00px",
                    transform: "rotate(0.00rad) translateZ(0px)",
                    WebkitTransform: "rotate(0.00rad) translateZ(0px)",
                    }}
                    title
                />
                </span>
            </p>
            <p className="c3">
                <span className="c4">Hence, we swap them too.</span>
            </p>
            <p className="c2">
                <span
                style={{
                    overflow: "hidden",
                    display: "inline-block",
                    margin: "0.00px 0.00px",
                    border: "0.00px solid #000000",
                    transform: "rotate(0.00rad) translateZ(0px)",
                    WebkitTransform: "rotate(0.00rad) translateZ(0px)",
                    width: "392.00px",
                    height: "56.00px",
                }}
                >
                <img
                    alt="Insertion Sort"
                    src={image5}
                    style={{
                    width: "392.00px",
                    height: "56.00px",
                    marginLeft: "0.00px",
                    marginTop: "0.00px",
                    transform: "rotate(0.00rad) translateZ(0px)",
                    WebkitTransform: "rotate(0.00rad) translateZ(0px)",
                    }}
                    title
                />
                </span>
            </p>
            <p className="c3">
                <span className="c4">Again we find 14 and 10 in an unsorted order.</span>
            </p>
            <p className="c2">
                <span
                style={{
                    overflow: "hidden",
                    display: "inline-block",
                    margin: "0.00px 0.00px",
                    border: "0.00px solid #000000",
                    transform: "rotate(0.00rad) translateZ(0px)",
                    WebkitTransform: "rotate(0.00rad) translateZ(0px)",
                    width: "392.00px",
                    height: "56.00px",
                }}
                >
                <img
                    alt="Insertion Sort"
                    src={image4}
                    style={{
                    width: "392.00px",
                    height: "56.00px",
                    marginLeft: "0.00px",
                    marginTop: "0.00px",
                    transform: "rotate(0.00rad) translateZ(0px)",
                    WebkitTransform: "rotate(0.00rad) translateZ(0px)",
                    }}
                    title
                />
                </span>
            </p>
            <p className="c3">
                <span className="c4">
                We swap them again. By the end of third iteration, we have a sorted
                sub-list of 4 items.
                </span>
            </p>
            <p className="c2">
                <span
                style={{
                    overflow: "hidden",
                    display: "inline-block",
                    margin: "0.00px 0.00px",
                    border: "0.00px solid #000000",
                    transform: "rotate(0.00rad) translateZ(0px)",
                    WebkitTransform: "rotate(0.00rad) translateZ(0px)",
                    width: "392.00px",
                    height: "56.00px",
                }}
                >
                <img
                    alt="Insertion Sort"
                    src={image2}
                    style={{
                    width: "392.00px",
                    height: "56.00px",
                    marginLeft: "0.00px",
                    marginTop: "0.00px",
                    transform: "rotate(0.00rad) translateZ(0px)",
                    WebkitTransform: "rotate(0.00rad) translateZ(0px)",
                    }}
                    title
                />
                </span>
            </p>
            <p className="c3">
                <span className="c4">
                This process goes on until all the unsorted values are covered in a sorted
                sub-list. Now we shall see some programming aspects of insertion sort.
                </span>
            </p>
            <h3 className="c10" id="h.9z2vccwzf1c2">
                <span className="c14">Algorithm</span>
            </h3>
            <p className="c3">
                <span className="c4">
                Now we have a bigger picture of how this sorting technique works, so we
                can derive simple steps by which we can achieve insertion sort.
                </span>
            </p>
            <p className="c2">
                <span className="c1">
                Step 1 − If it is the first element, it is already sorted. return 1;
                </span>
            </p>
            <p className="c2">
                <span className="c1">Step 2 − Pick next element</span>
            </p>
            <p className="c2">
                <span className="c1">
                Step 3 − Compare with all elements in the sorted sub-list
                </span>
            </p>
            <p className="c2">
                <span className="c1">
                Step 4 − Shift all the elements in the sorted sub-list that is greater
                than the{" "}
                </span>
            </p>
            <p className="c2">
                <span className="c1">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;value to be sorted
                </span>
            </p>
            <p className="c2">
                <span className="c1">Step 5 − Insert the value</span>
            </p>
            <p className="c2">
                <span className="c1">Step 6 − Repeat until list is sorted</span>
            </p>
            <p className="c0">
                <span className="c1" />
            </p>
            <h2 className="c5" id="h.fzjjtej5wx3x">
                <span className="c6">Pseudocode</span>
            </h2>
            <p className="c2">
                <span className="c1">procedure insertionSort( A : array of items )</span>
            </p>
            <p className="c2">
                <span className="c1">&nbsp; &nbsp;int holePosition</span>
            </p>
            <p className="c2">
                <span className="c1">&nbsp; &nbsp;int valueToInsert</span>
            </p>
            <p className="c2">
                <span className="c1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            </p>
            <p className="c2">
                <span className="c1">
                &nbsp; &nbsp;for i = 1 to length(A) inclusive do:
                </span>
            </p>
            <p className="c2">
                <span className="c1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            </p>
            <p className="c2">
                <span className="c1">
                &nbsp; &nbsp; &nbsp; /* select value to be inserted */
                </span>
            </p>
            <p className="c2">
                <span className="c1">&nbsp; &nbsp; &nbsp; valueToInsert = A[i]</span>
            </p>
            <p className="c2">
                <span className="c1">&nbsp; &nbsp; &nbsp; holePosition = i</span>
            </p>
            <p className="c2">
                <span className="c1">&nbsp; &nbsp; &nbsp; </span>
            </p>
            <p className="c2">
                <span className="c1">
                &nbsp; &nbsp; &nbsp; /*locate hole position for the element to be inserted
                */
                </span>
            </p>
            <p className="c2">
                <span className="c1">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
            </p>
            <p className="c2">
                <span className="c1">
                &nbsp; &nbsp; &nbsp; while holePosition &gt; 0 and A[holePosition-1] &gt;
                valueToInsert do:
                </span>
            </p>
            <p className="c2">
                <span className="c1">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;A[holePosition] = A[holePosition-1]
                </span>
            </p>
            <p className="c2">
                <span className="c1">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;holePosition = holePosition -1
                </span>
            </p>
            <p className="c2">
                <span className="c1">&nbsp; &nbsp; &nbsp; end while</span>
            </p>
            <p className="c2">
                <span className="c1">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
            </p>
            <p className="c2">
                <span className="c1">
                &nbsp; &nbsp; &nbsp; /* insert the number at hole position */
                </span>
            </p>
            <p className="c2">
                <span className="c1">
                &nbsp; &nbsp; &nbsp; A[holePosition] = valueToInsert
                </span>
            </p>
            <p className="c2">
                <span className="c1">&nbsp; &nbsp; &nbsp; </span>
            </p>
            <p className="c2">
                <span className="c1">&nbsp; &nbsp;end for</span>
            </p>
            <p className="c2">
                <span className="c1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            </p>
            <p className="c2">
                <span className="c1">end procedure</span>
            </p>
            <p className="c0">
                <span className="c9" />
            </p>
        </div>

     );
}
 
export default InsertionSortTheory;