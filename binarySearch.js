function binarySearchIndex(list, target, low = 0, high = list.length - 1) {
    if (list.length === 0) {
        return -1;
    }
    if (low === high) {
        if (list[low] === target) {
            return low;
        } else {
            return -1;
        }
    }
    let slicePoint = Math.floor((low + high) / 2);
    if (target < list[slicePoint]) {
        return binarySearchIndex(list, target, low, slicePoint);
    } else if (target > list[slicePoint]) {
        return binarySearchIndex(list, target, slicePoint + 1, high);
    } else if (target === list[slicePoint]) {
        return slicePoint;
    }
}

console.log(binarySearchIndex([5, 10, 12, 15, 20, 30, 70], 30));