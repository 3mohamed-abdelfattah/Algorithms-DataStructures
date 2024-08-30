function isPowerOfTwo(n) {
    if (n < 1) {
        return false;
    }
    while (n > 1) {
        if (n % 2 != 0) {
            return false;
        }
        n /= 2
    }
    return true;
}

console.log(isPowerOfTwo(0));
console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(3));

// Big-O --> O(Log n)


//----------------------------------------------------------------


function isPowerOfTwoBitWise(n) {
    if (n < 1) {
        return false;
    }
    return (n & (n - 1)) === 0;
}

console.log(isPowerOfTwoBitWise(0));
console.log(isPowerOfTwoBitWise(1));
console.log(isPowerOfTwoBitWise(2));
console.log(isPowerOfTwoBitWise(3));

// Big-O --> O(1)