const NUMBER_OF_BARS = 50;

function init() {
    const PARENT_DIV = document.getElementById('parent');
    let barsArr = resetArray(PARENT_DIV);
    const bubbleSortBtn = document.getElementById('bubble-sort');
    bubbleSortBtn.addEventListener('click', function() {
        bubbleSort(barsArr);
    });

    const selectionSortBtn = document.getElementById('selection-sort');
    selectionSortBtn.addEventListener('click', function() {
        selectionSort(barsArr);
    });

    // merge sort -> to be implemented later
    // const mergeSortBtn = document.getElementById('merge-sort');
    // mergeSortBtn.addEventListener('click', function() {
    //     mergeSort(barsArr);
    // });
}

window.onload = () => {
    init();
}