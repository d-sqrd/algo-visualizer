function swap(arr, i, minIdx) {
    let temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
    // swap heights of arr[i] and arr[minIdx]
    // change color of arr[i] to yellow(final position)
}

function selectionSort(arr) {
    const n = arr.length;
    for(let i = 0; i < n - 1; i++) {
        let minIdx = i;
        // change color of arr[minIdx] to red
        for(let j = i + 1; j < n; j++) {
            // change color of arr[j] to red
            if(arr[j] <= arr[minIdx]) {
                // change color of arr[minIdx] to green(original color)
                minIdx = j;
                // change color of arr[minIdx] to red
            }
            // change color of arr[j] to green(original color) only if j != minIdx
        }
        swap(arr, i, minIdx);
    }
}


function init() {
    let n = 10; // n = length of array
    let arr = [];
    for(let i = 0; i < n; i++)
        arr[i] = Math.floor(Math.random() * 100 + 50);
    console.log(arr);
    selectionSort(arr);
    console.log(arr);
}

window.onload = () => {
    init();
}