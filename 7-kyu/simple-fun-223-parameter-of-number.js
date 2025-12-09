/**
 * solution 1
 * n = n digits length
 * a = digits sum
 * b = digits product
 * time: O(n + log(min(a, b)))
 * space: O(n + log(min(a, b)))
 *
 * @param {number} n
 * @returns {number} LCM of digits sum and digits product
 */
function parameter(n) {
    const strNDigits = String(n).split("");
    const digitsSum = strNDigits.reduce(function getSum(strPrev, strCurr) {
        return Number(strPrev) + Number(strCurr);
    }, 0);
    const digitsProduct = strNDigits.reduce(function getProduct(strPrev, strCurr) {
        return Number(strPrev) * Number(strCurr);
    }, 1);
    const lcm = calcLcm(digitsSum, digitsProduct);

    return lcm;
}

console.log(parameter(22)); // 4
console.log(parameter(1234)); // 120

/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function calcLcm(a, b) {
    if (a === 0 || b === 0) {
        return 0;
    }

    return Math.abs(a * b) / calcGcd(a, b);
}

/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function calcGcd(a, b) {
    return b === 0 ? a : calcGcd(b, a % b);
}
