/**
 * solution 1
 * time: O(log b)
 * space: O(1)
 *
 * @param {[number, number]} fraction
 * @returns {[number, number]} reduced fraction
 */
function reduce([a, b]) {
    const gcd = getGCD(a, b);
    const reducedA = a / gcd;
    const reducedB = b / gcd;

    return [reducedA, reducedB];
}

/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function getGCD(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }

    return Math.abs(a);
}

console.log(reduce([45, 120])); // [3, 8]
