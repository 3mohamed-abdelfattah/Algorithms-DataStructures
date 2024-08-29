function isPrime(n) {
    if (n <= 2) {
        return `${n} Not Prime`;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return `${n} Not Prime`;
        }
    }
    return `${n} Is Prime`;
}

console.log(isPrime(0));
console.log(isPrime(4));
console.log(isPrime(5));
console.log(isPrime(100));

// Big-O --> O(n)


//----------------------------------------------------------------


function isPrimeOptimal(n) {
    if (n <= 2) {
        return `${n} Not Prime`;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return `${n} Not Prime`;
        }
    }
    return `${n} Is Prime`;
}

console.log(isPrimeOptimal(0));
console.log(isPrimeOptimal(4));
console.log(isPrimeOptimal(5));
console.log(isPrimeOptimal(100));

// Big-O --> O(sqrt(n))