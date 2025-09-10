/**
 * solution 1
 * time: O(n * m)
 * space: O(1)
 *
 * @param {number} n
 * @returns {number}
 */
function countZeros(n) {
    let totalZeros = 0;

    for (let i = 1; i <= n; i++) {
        totalZeros += getIntZeroCount(i);
    }

    return totalZeros;
}

/**
 * @param {number} n
 * @returns {number} zero count in int
 */
function getIntZeroCount(n) {
    let zeroCounter = 0;

    if (n === 0) {
        zeroCounter++;
    }

    n = Math.abs(n);

    while (n > 0) {
        if (n % 10 === 0) {
            zeroCounter++;
        }

        n = Math.floor(n / 10);
    }

    return zeroCounter;
}

console.log(countZeros(10)); // 1
console.log(countZeros(100)); // 11
console.log(countZeros(200)); // 31
