function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

console.log(linearSearch([2, 5, 7, 0, 9, 1], 0));
console.log(linearSearch([2, 5, 7, 0, 9, 10], 10));

// Big-O --> O(n) 