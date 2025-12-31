/**
 * @param {number} n
 * @param {number} count
 * @returns {number}
 */
function collatz(n, count = 1) {
    if (n === 1) {
        return count;
    }

    n = n % 2 === 0 ? n / 2 : n * 3 + 1;

    return collatz(n, count + 1);
}

console.log(collatz(2)); // 2
console.log(collatz(4)); // 3
console.log(collatz(6)); // 9
