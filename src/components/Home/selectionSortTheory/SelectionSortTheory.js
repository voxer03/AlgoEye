import image7 from './images/image7.jpg';
import image6 from './images/image6.jpg';
import image5 from './images/image5.jpg';
import image4 from './images/image4.jpg';
import image3 from './images/image3.jpg';
import image2 from './images/image2.jpg';
import image1 from './images/image1.jpg';

const SelectionSortTheory = () => {
    return ( 
        <div style={{ paddingTop: "4vh" }}>
            <meta content="text/html; charset=UTF-8" httpEquiv="content-type" />
            <style
                type="text/css"
                dangerouslySetInnerHTML={{
                __html:
                    'ol{margin:0;padding:0}table td,table th{padding:0}.c1{border-right-style:solid;padding-top:0pt;border-top-width:0pt;border-right-width:0pt;padding-left:0pt;padding-bottom:0pt;line-height:1.15;border-left-width:0pt;border-top-style:solid;margin-right:2pt;margin-left:2pt;border-left-style:solid;border-bottom-width:0pt;border-bottom-style:solid;orphans:2;widows:2;text-align:justify;padding-right:0pt}.c14{border-right-style:solid;padding-top:0pt;border-top-width:0pt;border-right-width:0pt;padding-left:0pt;padding-bottom:0pt;line-height:1.15;border-left-width:0pt;border-top-style:solid;margin-right:2pt;margin-left:2pt;border-left-style:solid;border-bottom-width:0pt;border-bottom-style:solid;orphans:2;widows:2;text-align:center;padding-right:0pt}.c4{-webkit-text-decoration-skip:none;color:#000000;font-weight:700;text-decoration:underline;vertical-align:baseline;text-decoration-skip-ink:none;font-size:20pt;font-family:"Arial";font-style:normal}.c2{background-color:#eeeeee;color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:11.5pt;font-family:"Courier New";font-style:normal}.c13{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:17.5pt;font-family:"Arial";font-style:normal}.c8{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:15pt;font-family:"Arial";font-style:normal}.c12{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:"Arial";font-style:normal}.c0{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:12pt;font-family:"Arial";font-style:normal}.c9{padding-top:18pt;padding-bottom:4pt;line-height:1.15;orphans:2;widows:2;text-align:left}.c3{padding-top:0pt;padding-bottom:0pt;line-height:1.15;orphans:2;widows:2;text-align:left}.c5{padding-top:14pt;padding-bottom:4pt;line-height:1.15;orphans:2;widows:2;text-align:left}.c11{background-color:#ffffff;max-width:451.4pt;padding:72pt 72pt 72pt 72pt}.c7{height:11pt}.c10{font-size:12pt}.c6{font-size:9pt}.title{padding-top:0pt;color:#000000;font-size:26pt;padding-bottom:3pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}.subtitle{padding-top:0pt;color:#666666;font-size:15pt;padding-bottom:16pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}li{color:#000000;font-size:11pt;font-family:"Arial"}p{margin:0;color:#000000;font-size:11pt;font-family:"Arial"}h1{padding-top:20pt;color:#000000;font-size:20pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h2{padding-top:18pt;color:#000000;font-size:16pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h3{padding-top:16pt;color:#434343;font-size:14pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h4{padding-top:14pt;color:#666666;font-size:12pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h5{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h6{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;font-style:italic;orphans:2;widows:2;text-align:left}',
                }}
            />
            <p className="c14">
                <span className="c4">Selection Sort</span>
            </p>
            <p className="c1">
                <span className="c0">
                Selection sort is a simple sorting algorithm. This sorting algorithm is an
                in-place comparison-based algorithm in which the list is divided into two
                parts, the sorted part at the left end and the unsorted part at the right
                end. Initially, the sorted part is empty and the unsorted part is the
                entire list.
                </span>
            </p>
            <p className="c1">
                <span className="c0">
                The smallest element is selected from the unsorted array and swapped with
                the leftmost element, and that element becomes a part of the sorted array.
                This process continues moving unsorted array boundary by one element to
                the right.
                </span>
            </p>
            <p className="c1">
                <span className="c10">
                This algorithm is not suitable for large data sets as its average and
                worst case complexities are of Ο(n
                </span>
                <span className="c6">2</span>
                <span className="c0">), where n is the number of items.</span>
            </p>
            <h2 className="c9" id="h.7qyd25fuees1">
                <span className="c13">How Selection Sort Works?</span>
            </h2>
            <p className="c1">
                <span className="c0">
                Consider the following depicted array as an example.
                </span>
            </p>
            <p className="c3">
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
                    src={image6}
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
            <p className="c1">
                <span className="c0">
                For the first position in the sorted list, the whole list is scanned
                sequentially. The first position where 14 is stored presently, we search
                the whole list and find that 10 is the lowest value.
                </span>
            </p>
            <p className="c3">
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
                    alt="Selection Sort"
                    src={image5}
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
            <p className="c1">
                <span className="c0">
                So we replace 14 with 10. After one iteration 10, which happens to be the
                minimum value in the list, appears in the first position of the sorted
                list.
                </span>
            </p>
            <p className="c3">
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
                    alt="Selection Sort"
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
            <p className="c1">
                <span className="c0">
                For the second position, where 33 is residing, we start scanning the rest
                of the list in a linear manner.
                </span>
            </p>
            <p className="c3">
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
                    alt="Selection Sort"
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
            <p className="c1">
                <span className="c0">
                We find that 14 is the second lowest value in the list and it should
                appear at the second place. We swap these values.
                </span>
            </p>
            <p className="c3">
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
                    alt="Selection Sort"
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
            <p className="c1">
                <span className="c0">
                After two iterations, two least values are positioned at the beginning in
                a sorted manner.
                </span>
            </p>
            <p className="c3">
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
                    alt="Selection Sort"
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
            <p className="c1">
                <span className="c0">
                The same process is applied to the rest of the items in the array.
                </span>
            </p>
            <p className="c1">
                <span className="c0">
                Following is a pictorial depiction of the entire sorting process −
                </span>
            </p>
            <p className="c3">
                <span
                style={{
                    overflow: "hidden",
                    display: "inline-block",
                    margin: "0.00px 0.00px",
                    border: "0.00px solid #000000",
                    transform: "rotate(0.00rad) translateZ(0px)",
                    WebkitTransform: "rotate(0.00rad) translateZ(0px)",
                    width: "392.00px",
                    height: "649.00px",
                }}
                >
                <img
                    alt="Selection Sort"
                    src={image2}
                    style={{
                    width: "392.00px",
                    height: "649.00px",
                    marginLeft: "0.00px",
                    marginTop: "0.00px",
                    transform: "rotate(0.00rad) translateZ(0px)",
                    WebkitTransform: "rotate(0.00rad) translateZ(0px)",
                    }}
                    title
                />
                </span>
            </p>
            <p className="c1">
                <span className="c0">
                Now, let us learn some programming aspects of selection sort.
                </span>
            </p>
            <h3 className="c5" id="h.odcnwab9wknj">
                <span className="c8">Algorithm</span>
            </h3>
            <p className="c3">
                <span className="c2">Step 1 − Set MIN to location 0</span>
            </p>
            <p className="c3">
                <span className="c2">Step 2 − Search the minimum element in the list</span>
            </p>
            <p className="c3">
                <span className="c2">Step 3 − Swap with value at location MIN</span>
            </p>
            <p className="c3">
                <span className="c2">Step 4 − Increment MIN to point to next element</span>
            </p>
            <p className="c3">
                <span className="c2">Step 5 − Repeat until list is sorted</span>
            </p>
            <p className="c3 c7">
                <span className="c2" />
            </p>
            <h3 className="c5" id="h.70wbgnv1lc6q">
                <span className="c8">Pseudocode</span>
            </h3>
            <p className="c3">
                <span className="c2">procedure selection sort </span>
            </p>
            <p className="c3">
                <span className="c2">&nbsp; &nbsp;list &nbsp;: array of items</span>
            </p>
            <p className="c3">
                <span className="c2">&nbsp; &nbsp;n &nbsp; &nbsp; : size of list</span>
            </p>
            <p className="c3 c7">
                <span className="c2" />
            </p>
            <p className="c3">
                <span className="c2">&nbsp; &nbsp;for i = 1 to n - 1</span>
            </p>
            <p className="c3">
                <span className="c2">&nbsp; &nbsp;/* set current element as minimum*/</span>
            </p>
            <p className="c3">
                <span className="c2">&nbsp; &nbsp; &nbsp; min = i &nbsp; &nbsp;</span>
            </p>
            <p className="c3">
                <span className="c2">&nbsp; </span>
            </p>
            <p className="c3">
                <span className="c2">
                &nbsp; &nbsp; &nbsp; /* check the element to be minimum */
                </span>
            </p>
            <p className="c3 c7">
                <span className="c2" />
            </p>
            <p className="c3">
                <span className="c2">&nbsp; &nbsp; &nbsp; for j = i+1 to n </span>
            </p>
            <p className="c3">
                <span className="c2">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;if list[j] &lt; list[min] then
                </span>
            </p>
            <p className="c3">
                <span className="c2">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; min = j;
                </span>
            </p>
            <p className="c3">
                <span className="c2">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;end if</span>
            </p>
            <p className="c3">
                <span className="c2">&nbsp; &nbsp; &nbsp; end for</span>
            </p>
            <p className="c3 c7">
                <span className="c2" />
            </p>
            <p className="c3">
                <span className="c2">
                &nbsp; &nbsp; &nbsp; /* swap the minimum element with the current
                element*/
                </span>
            </p>
            <p className="c3">
                <span className="c2">&nbsp; &nbsp; &nbsp; if indexMin != i &nbsp;then</span>
            </p>
            <p className="c3">
                <span className="c2">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;swap list[min] and list[i]
                </span>
            </p>
            <p className="c3">
                <span className="c2">&nbsp; &nbsp; &nbsp; end if</span>
            </p>
            <p className="c3">
                <span className="c2">&nbsp; &nbsp;end for</span>
            </p>
            <p className="c3">
                <span className="c2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            </p>
            <p className="c3">
                <span className="c2">end procedure</span>
            </p>
            <p className="c3 c7">
                <span className="c12" />
            </p>
        </div>

     );
}
 
export default SelectionSortTheory;