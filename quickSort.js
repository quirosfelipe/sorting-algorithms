function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }
    let pivot = array.shift();
    let left = array.filter(element => element <= pivot);
    let right = array.filter(element => element > pivot);
    let leftSorted = quickSort(left);
    let rightSorted = quickSort(right);
    return [...leftSorted, pivot, ...rightSorted];
}

console.log(quickSort([2]));
console.log(quickSort([2, -8, 4, 3, 7, 3]));