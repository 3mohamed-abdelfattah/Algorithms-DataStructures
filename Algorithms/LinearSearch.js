function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return 'not found';
}

console.log(linearSearch([2, 5, 7, 0, 9, 1], 0));
console.log(linearSearch([2, 5, 7, 0, 9, 10], 10));
console.log(linearSearch([2, 5, 7, 0, 9, 10], 99));

// Big-O --> O(n) 