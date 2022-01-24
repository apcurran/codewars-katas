function isSquare(arr) {
    if (arr.length === 0) return undefined;

    for (let num of arr) {
        if (Math.sqrt(num) % 1 !== 0) {
            return false;
        }
    }

    return true;
}

console.log(isSquare([1, 4, 9, 16, 25, 36])); // true
console.log(isSquare([1, 2, 3, 4, 5, 6])); // false
console.log(isSquare([])); // undefined
console.log(isSquare([1, 2, 4, 15])); // false