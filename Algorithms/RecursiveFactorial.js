function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(0));
console.log(factorial(2));
console.log(factorial(4));
console.log(factorial(5));

// Big-O --> O(n) 