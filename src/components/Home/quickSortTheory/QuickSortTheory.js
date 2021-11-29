import image from './images/image1.gif'
const QuickSortTheory = () => {
    return ( 
        <div style = {{ paddingTop:'4vh'}}>
            <meta content="text/html; charset=UTF-8" httpEquiv="content-type" />
            <style
                type="text/css"
                dangerouslySetInnerHTML={{
                __html:
                    'ol{margin:0;padding:0}table td,table th{padding:0}.c0{border-right-style:solid;padding-top:0pt;border-top-width:0pt;border-right-width:0pt;padding-left:0pt;padding-bottom:0pt;line-height:1.15;border-left-width:0pt;border-top-style:solid;margin-right:2pt;margin-left:2pt;border-left-style:solid;border-bottom-width:0pt;border-bottom-style:solid;orphans:2;widows:2;text-align:justify;padding-right:0pt}.c10{-webkit-text-decoration-skip:none;color:#000000;font-weight:700;text-decoration:underline;vertical-align:baseline;text-decoration-skip-ink:none;font-size:20pt;font-family:"Arial";font-style:normal}.c1{background-color:#eeeeee;color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:11.5pt;font-family:"Courier New";font-style:normal}.c4{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:12pt;font-family:"Arial";font-style:normal}.c12{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:"Arial";font-style:normal}.c3{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:17.5pt;font-family:"Arial";font-style:normal}.c7{padding-top:0pt;padding-bottom:0pt;line-height:1.15;orphans:2;widows:2;text-align:center}.c9{padding-top:18pt;padding-bottom:4pt;line-height:1.15;orphans:2;widows:2;text-align:left}.c2{padding-top:0pt;padding-bottom:0pt;line-height:1.15;orphans:2;widows:2;text-align:left}.c6{background-color:#ffffff;max-width:451.4pt;padding:72pt 72pt 72pt 72pt}.c8{font-size:9pt}.c5{height:11pt}.c11{font-size:12pt}.title{padding-top:0pt;color:#000000;font-size:26pt;padding-bottom:3pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}.subtitle{padding-top:0pt;color:#666666;font-size:15pt;padding-bottom:16pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}li{color:#000000;font-size:11pt;font-family:"Arial"}p{margin:0;color:#000000;font-size:11pt;font-family:"Arial"}h1{padding-top:20pt;color:#000000;font-size:20pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h2{padding-top:18pt;color:#000000;font-size:16pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h3{padding-top:16pt;color:#434343;font-size:14pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h4{padding-top:14pt;color:#666666;font-size:12pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h5{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h6{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;font-style:italic;orphans:2;widows:2;text-align:left}',
                }}
            />
            <p className="c7">
                <span className="c10">Quick Sort</span>
            </p>
            <p className="c0">
                <span className="c4">
                Quick sort is a highly efficient sorting algorithm and is based on
                partitioning of array of data into smaller arrays. A large array is
                partitioned into two arrays one of which holds values smaller than the
                specified value, say pivot, based on which the partition is made and
                another array holds values greater than the pivot value.
                </span>
            </p>
            <p className="c0">
                <span className="c11">
                Quicksort partitions an array and then calls itself recursively twice to
                sort the two resulting subarrays. This algorithm is quite efficient for
                large-sized data sets as its average and worst-case complexity are O(n
                </span>
                <span className="c8">2</span>
                <span className="c4">), respectively.</span>
            </p>
            <h2 className="c9" id="h.grm12pfq4ijw">
                <span className="c3">Partition in Quick Sort</span>
            </h2>
            <p className="c0">
                <span className="c4">
                Following animated representation explains how to find the pivot value in
                an array.
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
                    width: "500.00px",
                    height: "200.00px",
                }}
                >
                <img
                    alt="Quick Sort Partition Animation"
                    src={image}
                    style={{
                    width: "500.00px",
                    height: "200.00px",
                    marginLeft: "0.00px",
                    marginTop: "0.00px",
                    transform: "rotate(0.00rad) translateZ(0px)",
                    WebkitTransform: "rotate(0.00rad) translateZ(0px)",
                    }}
                    title
                />
                </span>
            </p>
            <p className="c0">
                <span className="c4">
                The pivot value divides the list into two parts. And recursively, we find
                the pivot for each sub-lists until all lists contains only one element.
                </span>
            </p>
            <h2 className="c9" id="h.z1vkp8nhtqag">
                <span className="c3">Quick Sort Pivot Algorithm</span>
            </h2>
            <p className="c0">
                <span className="c4">
                Based on our understanding of partitioning in quick sort, we will now try
                to write an algorithm for it, which is as follows.
                </span>
            </p>
            <p className="c2">
                <span className="c1">
                Step 1 − Choose the highest index value has pivot
                </span>
            </p>
            <p className="c2">
                <span className="c1">
                Step 2 − Take two variables to point left and right of the list excluding
                pivot
                </span>
            </p>
            <p className="c2">
                <span className="c1">Step 3 − left points to the low index</span>
            </p>
            <p className="c2">
                <span className="c1">Step 4 − right points to the high</span>
            </p>
            <p className="c2">
                <span className="c1">
                Step 5 − while value at left is less than pivot move right
                </span>
            </p>
            <p className="c2">
                <span className="c1">
                Step 6 − while value at right is greater than pivot move left
                </span>
            </p>
            <p className="c2">
                <span className="c1">
                Step 7 − if both step 5 and step 6 does not match swap left and right
                </span>
            </p>
            <p className="c2">
                <span className="c1">
                Step 8 − if left ≥ right, the point where they met is new pivot
                </span>
            </p>
            <p className="c2 c5">
                <span className="c1" />
            </p>
            <h2 className="c9" id="h.g2olpp4qu6hv">
                <span className="c3">Quick Sort Pivot Pseudocode</span>
            </h2>
            <p className="c0">
                <span className="c4">
                The pseudocode for the above algorithm can be derived as −
                </span>
            </p>
            <p className="c2">
                <span className="c1">function partitionFunc(left, right, pivot)</span>
            </p>
            <p className="c2">
                <span className="c1">&nbsp; &nbsp;leftPointer = left</span>
            </p>
            <p className="c2">
                <span className="c1">&nbsp; &nbsp;rightPointer = right - 1</span>
            </p>
            <p className="c2 c5">
                <span className="c1" />
            </p>
            <p className="c2">
                <span className="c1">&nbsp; &nbsp;while True do</span>
            </p>
            <p className="c2">
                <span className="c1">
                &nbsp; &nbsp; &nbsp; while A[++leftPointer] &lt; pivot do
                </span>
            </p>
            <p className="c2">
                <span className="c1">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;//do-nothing &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp;
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
                &nbsp; &nbsp; &nbsp; while rightPointer &gt; 0 &amp;&amp;
                A[--rightPointer] &gt; pivot do
                </span>
            </p>
            <p className="c2">
                <span className="c1">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;//do-nothing &nbsp; &nbsp; &nbsp; &nbsp;{" "}
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
                &nbsp; &nbsp; &nbsp; if leftPointer &gt;= rightPointer
                </span>
            </p>
            <p className="c2">
                <span className="c1">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;break</span>
            </p>
            <p className="c2">
                <span className="c1">
                &nbsp; &nbsp; &nbsp; else &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp;
                </span>
            </p>
            <p className="c2">
                <span className="c1">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;swap leftPointer,rightPointer
                </span>
            </p>
            <p className="c2">
                <span className="c1">&nbsp; &nbsp; &nbsp; end if</span>
            </p>
            <p className="c2">
                <span className="c1">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
            </p>
            <p className="c2">
                <span className="c1">&nbsp; &nbsp;end while </span>
            </p>
            <p className="c2">
                <span className="c1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            </p>
            <p className="c2">
                <span className="c1">&nbsp; &nbsp;swap leftPointer,right</span>
            </p>
            <p className="c2">
                <span className="c1">&nbsp; &nbsp;return leftPointer</span>
            </p>
            <p className="c2">
                <span className="c1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            </p>
            <p className="c2">
                <span className="c1">end function</span>
            </p>
            <h2 className="c9" id="h.l1rgnh7eu8fo">
                <span className="c3">Quick Sort Algorithm</span>
            </h2>
            <p className="c0">
                <span className="c4">
                Using pivot algorithm recursively, we end up with smaller possible
                partitions. Each partition is then processed for quick sort. We define
                recursive algorithm for quicksort as follows −
                </span>
            </p>
            <p className="c2">
                <span className="c1">Step 1 − Make the right-most index value pivot</span>
            </p>
            <p className="c2">
                <span className="c1">Step 2 − partition the array using pivot value</span>
            </p>
            <p className="c2">
                <span className="c1">Step 3 − quicksort left partition recursively</span>
            </p>
            <p className="c2">
                <span className="c1">Step 4 − quicksort right partition recursively</span>
            </p>
            <p className="c2 c5">
                <span className="c1" />
            </p>
            <h2 className="c9" id="h.gy776b5y1jvg">
                <span className="c3">Quick Sort Pseudocode</span>
            </h2>
            <p className="c0">
                <span className="c4">
                To get more into it, let see the pseudocode for quick sort algorithm −
                </span>
            </p>
            <p className="c2">
                <span className="c1">procedure quickSort(left, right)</span>
            </p>
            <p className="c2 c5">
                <span className="c1" />
            </p>
            <p className="c2">
                <span className="c1">&nbsp; &nbsp;if right-left &lt;= 0</span>
            </p>
            <p className="c2">
                <span className="c1">&nbsp; &nbsp; &nbsp; return</span>
            </p>
            <p className="c2">
                <span className="c1">&nbsp; &nbsp;else &nbsp; &nbsp; </span>
            </p>
            <p className="c2">
                <span className="c1">&nbsp; &nbsp; &nbsp; pivot = A[right]</span>
            </p>
            <p className="c2">
                <span className="c1">
                &nbsp; &nbsp; &nbsp; partition = partitionFunc(left, right, pivot)
                </span>
            </p>
            <p className="c2">
                <span className="c1">&nbsp; &nbsp; &nbsp; quickSort(left,partition-1)</span>
            </p>
            <p className="c2">
                <span className="c1">
                &nbsp; &nbsp; &nbsp; quickSort(partition+1,right) &nbsp; &nbsp;
                </span>
            </p>
            <p className="c2">
                <span className="c1">
                &nbsp; &nbsp;end
                if&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
            </p>
            <p className="c2">
                <span className="c1">&nbsp; &nbsp;</span>
            </p>
            <p className="c2">
                <span className="c1">end procedure</span>
            </p>
            <p className="c2 c5">
                <span className="c12" />
            </p>
            </div>

     );
}
 
export default QuickSortTheory;