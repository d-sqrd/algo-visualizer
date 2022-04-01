let time = 0;
const DELAY = 300;


function bubbleSort(barsArr) {
    const PARENT_DIV = document.getElementById('parent');
    for(let i = 0; i < NUMBER_OF_BARS - 1; i++) {
        for(let j = 0; j < NUMBER_OF_BARS - i - 1; j++) {
            colorUpdate(PARENT_DIV.childNodes[j], PARENT_DIV.childNodes[j + 1], "red");
            if(barsArr[j] > barsArr[j + 1]) {
                let temp = barsArr[j];
                barsArr[j] = barsArr[j + 1];
                barsArr[j + 1] = temp;
                heightUpdate(PARENT_DIV.childNodes[j], PARENT_DIV.childNodes[j + 1]);
            }
            colorUpdate(PARENT_DIV.childNodes[j], PARENT_DIV.childNodes[j + 1], "green");
        }
        colorUpdate(PARENT_DIV.childNodes[NUMBER_OF_BARS - i - 1], PARENT_DIV.childNodes[NUMBER_OF_BARS - i - 1], "yellow");
    }
    colorUpdate(PARENT_DIV.childNodes[0], PARENT_DIV.childNodes[0], "yellow");
}