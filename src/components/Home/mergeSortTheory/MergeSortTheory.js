import image7 from './images/image7.jpg';
import image6 from './images/image6.jpg';
import image5 from './images/image5.jpg';
import image4 from './images/image4.jpg';
import image3 from './images/image3.jpg';
import image2 from './images/image2.jpg';
import image1 from './images/image1.jpg';
const MergeSortTheory = () => {
    return ( 
        <div style={{ paddingTop: "4vh" }}>
            <meta content="text/html; charset=UTF-8" httpEquiv="content-type" />
            <style
                type="text/css"
                dangerouslySetInnerHTML={{
                __html:
                    'ol{margin:0;padding:0}table td,table th{padding:0}.c2{border-right-style:solid;padding-top:0pt;border-top-width:0pt;border-right-width:0pt;padding-left:0pt;padding-bottom:0pt;line-height:1.15;border-left-width:0pt;border-top-style:solid;margin-right:2pt;margin-left:2pt;border-left-style:solid;border-bottom-width:0pt;border-bottom-style:solid;orphans:2;widows:2;text-align:justify;padding-right:0pt}.c9{border-right-style:solid;padding-top:0pt;border-top-width:0pt;border-right-width:0pt;padding-left:0pt;padding-bottom:0pt;line-height:1.15;border-left-width:0pt;border-top-style:solid;margin-right:2pt;margin-left:2pt;border-left-style:solid;border-bottom-width:0pt;border-bottom-style:solid;orphans:2;widows:2;text-align:center;padding-right:0pt}.c8{-webkit-text-decoration-skip:none;color:#000000;font-weight:700;text-decoration:underline;vertical-align:baseline;text-decoration-skip-ink:none;font-size:20pt;font-family:"Arial";font-style:normal}.c0{background-color:#eeeeee;color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:11.5pt;font-family:"Courier New";font-style:normal}.c1{padding-top:0pt;padding-bottom:0pt;line-height:1.15;orphans:2;widows:2;text-align:left;height:11pt}.c6{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:"Arial";font-style:normal}.c4{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:12pt;font-family:"Arial";font-style:normal}.c5{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:15pt;font-family:"Arial";font-style:normal}.c12{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:17.5pt;font-family:"Arial";font-style:normal}.c11{padding-top:14pt;padding-bottom:4pt;line-height:1.15;orphans:2;widows:2;text-align:left}.c3{padding-top:0pt;padding-bottom:0pt;line-height:1.15;orphans:2;widows:2;text-align:left}.c7{padding-top:18pt;padding-bottom:4pt;line-height:1.15;orphans:2;widows:2;text-align:left}.c10{background-color:#ffffff;max-width:451.4pt;padding:72pt 72pt 72pt 72pt}.title{padding-top:0pt;color:#000000;font-size:26pt;padding-bottom:3pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}.subtitle{padding-top:0pt;color:#666666;font-size:15pt;padding-bottom:16pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}li{color:#000000;font-size:11pt;font-family:"Arial"}p{margin:0;color:#000000;font-size:11pt;font-family:"Arial"}h1{padding-top:20pt;color:#000000;font-size:20pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h2{padding-top:18pt;color:#000000;font-size:16pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h3{padding-top:16pt;color:#434343;font-size:14pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h4{padding-top:14pt;color:#666666;font-size:12pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h5{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h6{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;font-style:italic;orphans:2;widows:2;text-align:left}',
                }}
            />
            <p className="c9">
                <span className="c8">Merge Sort</span>
            </p>
            <p className="c2">
                <span className="c4">
                Merge sort is a sorting technique based on divide and conquer technique.
                With worst-case time complexity being Ο(n log n), it is one of the most
                respected algorithms.
                </span>
            </p>
            <p className="c2">
                <span className="c4">
                Merge sort first divides the array into equal halves and then combines
                them in a sorted manner.
                </span>
            </p>
            <h2 className="c7" id="h.3htdmsiknii6">
                <span className="c12">How Merge Sort Works?</span>
            </h2>
            <p className="c2">
                <span className="c4">
                To understand merge sort, we take an unsorted array as the following −
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
                    src={image2}
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
            <p className="c2">
                <span className="c4">
                We know that merge sort first divides the whole array iteratively into
                equal halves unless the atomic values are achieved. We see here that an
                array of 8 items is divided into two arrays of size 4.
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
                    width: "415.00px",
                    height: "55.00px",
                }}
                >
                <img
                    alt="Merge Sort Division"
                    src={image4}
                    style={{
                    width: "415.00px",
                    height: "55.00px",
                    marginLeft: "0.00px",
                    marginTop: "0.00px",
                    transform: "rotate(0.00rad) translateZ(0px)",
                    WebkitTransform: "rotate(0.00rad) translateZ(0px)",
                    }}
                    title
                />
                </span>
            </p>
            <p className="c2">
                <span className="c4">
                This does not change the sequence of appearance of items in the original.
                Now we divide these two arrays into halves.
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
                    width: "463.00px",
                    height: "56.00px",
                }}
                >
                <img
                    alt="Merge Sort Division"
                    src={image6}
                    style={{
                    width: "463.00px",
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
            <p className="c2">
                <span className="c4">
                We further divide these arrays and we achieve atomic value which can no
                more be divided.
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
                    width: "566.00px",
                    height: "55.00px",
                }}
                >
                <img
                    alt="Merge Sort Division"
                    src={image1}
                    style={{
                    width: "566.00px",
                    height: "55.00px",
                    marginLeft: "0.00px",
                    marginTop: "0.00px",
                    transform: "rotate(0.00rad) translateZ(0px)",
                    WebkitTransform: "rotate(0.00rad) translateZ(0px)",
                    }}
                    title
                />
                </span>
            </p>
            <p className="c2">
                <span className="c4">
                Now, we combine them in exactly the same manner as they were broken down.
                Please note the color codes given to these lists.
                </span>
            </p>
            <p className="c2">
                <span className="c4">
                We first compare the element for each list and then combine them into
                another list in a sorted manner. We see that 14 and 33 are in sorted
                positions. We compare 27 and 10 and in the target list of 2 values we put
                10 first, followed by 27. We change the order of 19 and 35 whereas 42 and
                44 are placed sequentially.
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
                    width: "461.00px",
                    height: "56.00px",
                }}
                >
                <img
                    alt="Merge Sort Combine"
                    src={image3}
                    style={{
                    width: "461.00px",
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
            <p className="c2">
                <span className="c4">
                In the next iteration of the combining phase, we compare lists of two data
                values, and merge them into a list of found data values placing all in a
                sorted order.
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
                    width: "417.00px",
                    height: "56.00px",
                }}
                >
                <img
                    alt="Merge Sort Combine"
                    src={image7}
                    style={{
                    width: "417.00px",
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
            <p className="c2">
                <span className="c4">
                After the final merging, the list should look like this −
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
                    alt="Merge Sort"
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
            <p className="c2">
                <span className="c4">
                Now we should learn some programming aspects of merge sorting.
                </span>
            </p>
            <h3 className="c11" id="h.pc5cskqva0vw">
                <span className="c5">Algorithm</span>
            </h3>
            <p className="c2">
                <span className="c4">
                Merge sort keeps on dividing the list into equal halves until it can no
                more be divided. By definition, if it is only one element in the list, it
                is sorted. Then, merge sort combines the smaller sorted lists keeping the
                new list sorted too.
                </span>
            </p>
            <p className="c3">
                <span className="c0">
                Step 1 − if it is only one element in the list it is already sorted,
                return.
                </span>
            </p>
            <p className="c3">
                <span className="c0">
                Step 2 − divide the list recursively into two halves until it can no more
                be divided.
                </span>
            </p>
            <p className="c3">
                <span className="c0">
                Step 3 − merge the smaller lists into new list in sorted order.
                </span>
            </p>
            <p className="c1">
                <span className="c0" />
            </p>
            <h3 className="c11" id="h.tvwe3vtnmp1g">
                <span className="c5">Pseudocode</span>
            </h3>
            <p className="c2">
                <span className="c4">
                We shall now see the pseudocodes for merge sort functions. As our
                algorithms point out two main functions − divide &amp; merge.
                </span>
            </p>
            <p className="c2">
                <span className="c4">
                Merge sort works with recursion and we shall see our implementation in the
                same way.
                </span>
            </p>
            <p className="c3">
                <span className="c0">procedure mergesort( var a as array )</span>
            </p>
            <p className="c3">
                <span className="c0">&nbsp; &nbsp;if ( n == 1 ) return a</span>
            </p>
            <p className="c1">
                <span className="c0" />
            </p>
            <p className="c3">
                <span className="c0">&nbsp; &nbsp;var l1 as array = a[0] ... a[n/2]</span>
            </p>
            <p className="c3">
                <span className="c0">&nbsp; &nbsp;var l2 as array = a[n/2+1] ... a[n]</span>
            </p>
            <p className="c1">
                <span className="c0" />
            </p>
            <p className="c3">
                <span className="c0">&nbsp; &nbsp;l1 = mergesort( l1 )</span>
            </p>
            <p className="c3">
                <span className="c0">&nbsp; &nbsp;l2 = mergesort( l2 )</span>
            </p>
            <p className="c1">
                <span className="c0" />
            </p>
            <p className="c3">
                <span className="c0">&nbsp; &nbsp;return merge( l1, l2 )</span>
            </p>
            <p className="c3">
                <span className="c0">end procedure</span>
            </p>
            <p className="c1">
                <span className="c0" />
            </p>
            <p className="c3">
                <span className="c0">
                procedure merge( var a as array, var b as array )
                </span>
            </p>
            <p className="c1">
                <span className="c0" />
            </p>
            <p className="c3">
                <span className="c0">&nbsp; &nbsp;var c as array</span>
            </p>
            <p className="c3">
                <span className="c0">&nbsp; &nbsp;while ( a and b have elements )</span>
            </p>
            <p className="c3">
                <span className="c0">&nbsp; &nbsp; &nbsp; if ( a[0] &gt; b[0] )</span>
            </p>
            <p className="c3">
                <span className="c0">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;add b[0] to the end of c
                </span>
            </p>
            <p className="c3">
                <span className="c0">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;remove b[0] from b
                </span>
            </p>
            <p className="c3">
                <span className="c0">&nbsp; &nbsp; &nbsp; else</span>
            </p>
            <p className="c3">
                <span className="c0">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;add a[0] to the end of c
                </span>
            </p>
            <p className="c3">
                <span className="c0">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;remove a[0] from a
                </span>
            </p>
            <p className="c3">
                <span className="c0">&nbsp; &nbsp; &nbsp; end if</span>
            </p>
            <p className="c3">
                <span className="c0">&nbsp; &nbsp;end while</span>
            </p>
            <p className="c3">
                <span className="c0">&nbsp; &nbsp;</span>
            </p>
            <p className="c3">
                <span className="c0">&nbsp; &nbsp;while ( a has elements )</span>
            </p>
            <p className="c3">
                <span className="c0">&nbsp; &nbsp; &nbsp; add a[0] to the end of c</span>
            </p>
            <p className="c3">
                <span className="c0">&nbsp; &nbsp; &nbsp; remove a[0] from a</span>
            </p>
            <p className="c3">
                <span className="c0">&nbsp; &nbsp;end while</span>
            </p>
            <p className="c3">
                <span className="c0">&nbsp; &nbsp;</span>
            </p>
            <p className="c3">
                <span className="c0">&nbsp; &nbsp;while ( b has elements )</span>
            </p>
            <p className="c3">
                <span className="c0">&nbsp; &nbsp; &nbsp; add b[0] to the end of c</span>
            </p>
            <p className="c3">
                <span className="c0">&nbsp; &nbsp; &nbsp; remove b[0] from b</span>
            </p>
            <p className="c3">
                <span className="c0">&nbsp; &nbsp;end while</span>
            </p>
            <p className="c3">
                <span className="c0">&nbsp; &nbsp;</span>
            </p>
            <p className="c3">
                <span className="c0">&nbsp; &nbsp;return c</span>
            </p>
            <p className="c3">
                <span className="c0">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            </p>
            <p className="c3">
                <span className="c0">end procedure</span>
            </p>
            <p className="c1">
                <span className="c6" />
            </p>
        </div>

     );
}
 
export default MergeSortTheory;