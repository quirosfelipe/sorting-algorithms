function insertionSort(list) {
    for (let i = 1; i <= list.length; i++) { // list = [5, 9, 6, 8] --> [5, 6, 9, 8]
        let temp = list[i];
        while (i > 0 && list[i - 1] > temp) {
            list[i] = list[i - 1];
            list[i - 1] = temp;
            i = i - 1;
        }
    }
    return list;
}

let array = [2, -3, 4, 3, 7, 3];
console.log(insertionSort(array));