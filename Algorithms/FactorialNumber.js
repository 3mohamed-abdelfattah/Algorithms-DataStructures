function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result = result * i
    }
    return result
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(5));
console.log(factorial(10));

// Big-O --> O(n)