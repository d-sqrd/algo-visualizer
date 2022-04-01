// const DELAY = 300;
// let time = 0;

function mergeBarsArr(barsArr, left, mid, right, PARENT_DIV) {
    
    console.log("Merge: " + barsArr);
    // length of left and right sub-arrays
    let lengthLeftSubArray = mid - left + 1;
    let lengthRightSubArray = right - mid;

    // temporary arrays
    let leftSubArray = [];
    let rightSubArray = [];

    // copy original data to temporary arrays
    for(let i = 0; i < lengthLeftSubArray; i++)
        leftSubArray[i] = barsArr[left + i];
    for(let i = 0; i < lengthRightSubArray; i++)
        rightSubArray[i] = barsArr[mid + 1 + i];

    let indexOfLeftSubArray = 0;
    let indexOfRightSubArray = 0;
    let indexOfMergedSubArray = left;

    while(indexOfLeftSubArray < lengthLeftSubArray && indexOfRightSubArray < lengthRightSubArray) {

        // indicate which bars are being compared 
        // colorUpdate(PARENT_DIV.childNodes[left + indexOfLeftSubArray], 
        //             PARENT_DIV.childNodes[mid + 1 + indexOfRightSubArray], 
        //             "red");
        if(leftSubArray[indexOfLeftSubArray] <= rightSubArray[indexOfRightSubArray]) {
            // heightUpdate(PARENT_DIV.childNodes[left + indexOfLeftSubArray], 
            //              PARENT_DIV.childNodes[mid + 1 + indexOfRightSubArray]);
            barsArr[indexOfMergedSubArray] = leftSubArray[indexOfLeftSubArray];
            // colorUpdate(PARENT_DIV.childNodes[indexOfMergedSubArray], 
            //             PARENT_DIV.childNodes[indexOfMergedSubArray], 
            //             "yellow");
            indexOfLeftSubArray++;
        } 
        else {
            // heightUpdate(PARENT_DIV.childNodes[left + indexOfLeftSubArray], 
            //              PARENT_DIV.childNodes[mid + 1 + indexOfRightSubArray]);
            barsArr[indexOfMergedSubArray] = rightSubArray[indexOfRightSubArray];
            // colorUpdate(PARENT_DIV.childNodes[indexOfMergedSubArray], 
            //             PARENT_DIV.childNodes[indexOfMergedSubArray], 
            //             "yellow");
            indexOfRightSubArray++;
        }
        indexOfMergedSubArray++;
    }

    // copy remaining elements of left subarray(if any)
    while(indexOfLeftSubArray < lengthLeftSubArray) {
        barsArr[indexOfMergedSubArray] = leftSubArray[indexOfLeftSubArray];
        indexOfMergedSubArray++;
        indexOfLeftSubArray++;
    }

    // copy remaining elements of right subarray(if any)
    while(indexOfRightSubArray < lengthRightSubArray) {
        barsArr[indexOfMergedSubArray] = rightSubArray[indexOfRightSubArray];
        indexOfMergedSubArray++;
        indexOfRightSubArray++;
    }

    return(barsArr);
}



function mergeSort1(barsArr, barsArrBegin, barsArrEnd, PARENT_DIV) {
    // console.log(PARENT_DIV.childNodes);
    console.log("MergeSort1: " + barsArr);
    if(barsArrBegin >= barsArrEnd)
        return(barsArr);
    
    let barsArrMid = barsArrBegin + (barsArrEnd - barsArrBegin) / 2;
    mergeSort1(barsArr, barsArrBegin, barsArrMid, PARENT_DIV);
    mergeSort1(barsArr, barsArrMid + 1, barsArrEnd, PARENT_DIV);
    barsArr = mergeBarsArr(barsArr, barsArrBegin, barsArrMid, barsArrEnd, PARENT_DIV);
    return(barsArr);
}


function mergeSort(barsArr) {
    console.log(1);
    const PARENT_DIV = document.getElementById('parent');
    // console.log(PARENT_DIV.childNodes);
    console.log(barsArr);
    barsArr = mergeSort1(barsArr, 0, barsArr.length - 1, PARENT_DIV);
    console.log(barsArr);
}