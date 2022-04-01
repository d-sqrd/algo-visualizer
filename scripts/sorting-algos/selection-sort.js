function swap(barsArr, i, minIdx, PARENT_DIV) {
    let temp = barsArr[i];
    barsArr[i] = barsArr[minIdx];
    barsArr[minIdx] = temp;
    colorUpdate(PARENT_DIV.childNodes[i], 
                PARENT_DIV.childNodes[i], 
                "yellow");
    colorUpdate(PARENT_DIV.childNodes[minIdx], 
                PARENT_DIV.childNodes[minIdx], 
                "green");
    heightUpdate(PARENT_DIV.childNodes[i], 
                 PARENT_DIV.childNodes[minIdx]);
}


function selectionSort(barsArr) {
    const PARENT_DIV = document.getElementById('parent');
    for(let i = 0; i < barsArr.length - 1; i++) {
        let minIdx = i;
        colorUpdate(PARENT_DIV.childNodes[i],
                    PARENT_DIV.childNodes[i], 
                    "red");
        for(let j = i + 1; j < barsArr.length; j++) {
            colorUpdate(PARENT_DIV.childNodes[j], 
                        PARENT_DIV.childNodes[j], 
                        "red");
            if(barsArr[j] <= barsArr[minIdx]) {
                colorUpdate(PARENT_DIV.childNodes[minIdx], 
                            PARENT_DIV.childNodes[minIdx], 
                            "green");
                minIdx = j;
            }
            if(j != minIdx) {
                colorUpdate(PARENT_DIV.childNodes[j], 
                            PARENT_DIV.childNodes[j], 
                            "green");
            }
        }
        swap(barsArr, i, minIdx, PARENT_DIV);
    }
}