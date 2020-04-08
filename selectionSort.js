function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

function selectionSort(list) {      // [6,7,5]
    let min;
    for (let i = 0; i < list.length - 1; i++) { // [i =6] min = 6 , [i = 7] min = 7 
        min = i;
        for (let j = i + 1; j < list.length; j++) {  // [j=7] - [j=5] , [j=6]
            if (list[j] < list[min]) {    // 7< 6 false  5<6  true , 6 < 7 true
                min = j;     // min = 5      min = 6
            }
        }
        if (min !== i) {    // 5 !== 6      ,     6 !==7
            swap(list, min, i);  //  swap --> 5 for 6   list [5,7,6] ,   swap--> 6 for 7  list [5,6,7]
        }
    }
    return list; // [5,6,7]
}
let array = [2, -1, 4, 3, 7, 3];

console.log(selectionSort(array));  