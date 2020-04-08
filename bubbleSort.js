function swap(array, idx1, idx2) {
    let temp = array[idx1];     // save a copy of the first value
    array[idx1] = array[idx2];  // overwrite the first value with the second value
    array[idx2] = temp;         // overwrite the second value with the first value
}

function bubbleSort(array) {
    let swapped = true;
    while (swapped) {
        swapped = false;
        for (let i = 1; i < array.length; i++) {
            if (array[i - 1] > array[i]) {
                swap(array, i, i - 1);
                swapped = true;
            }
        }
    }
    return array;
}
let array = [2, -1, 4, 3, 9, 3];
console.log(bubbleSort(array));