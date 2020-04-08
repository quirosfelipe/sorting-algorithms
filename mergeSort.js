function merge(array1, array2) {
    let result = [];
    while (array1.length > 0 && array2.length > 0) {
        if (array1[0] < array2[0]) {
            result.push(array1.shift());
        } else {
            result.push(array2.shift()); // array.push(array1[0]);
        }                                // array1.shift();
    }
    // while (array1.length > 0) {
    //     array.push(array1[0]);
    //     array1.shift();
    // }
    // while (array2.length > 0) {
    //     array.push(array2[0]);
    //     array2.shift();
    // }
    // return array;
    return result.concat(array1).concat(array2);
    // return [...result, ...array1, ...array2]
}
function mergeSort(array) {   //                 [5,3,1,7]
    if (array.length <= 1) return array;
    let index = Math.floor(array.length / 2)      // index = 2  
    let leftArray = array.slice(0, index);        //  [5,3] 
    let rightArray = array.slice(index);          //  [1,7]
    let sortLeft = mergeSort(leftArray);         //mergeSort([5,3])  -->5, 3  [3, 5]
    let sortRight = mergeSort(rightArray);       //mergeSort([1,7])  -->1, 7 [1, 7]
    return merge(sortLeft, sortRight);

}

console.log(mergeSort([2]));
console.log(mergeSort([2, -19, 4, 3, 7, 3]));