const NUMBER_OF_BARS = 50;

function init() {
    const PARENT_DIV = document.getElementById('parent');
    let barsArr = resetArray(PARENT_DIV);
    const sortBtn = document.getElementById('sort');
    sortBtn.addEventListener('click', function() {
        bubbleSort(barsArr);
    });
}

window.onload = () => {
    init();
}