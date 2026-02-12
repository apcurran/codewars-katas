/**
 * solution 1
 * n = num
 * time: O(n)
 * space: O(n)
 *
 * @param {number} val
 * @returns {number|"There is no possible number that fulfills those requirements"}
 */
function nextNumb(val) {
    const MAX = 9876543210; // must have all 10 unique digits (can't have more)

    for (let num = val + 1; num < MAX; num++) {
        if (hasUniqueDigits(num) && isOdd(num) && isMultipleOfThree(num)) {
            return num;
        }
    }

    return "There is no possible number that fulfills those requirements";
}

console.log(nextNumb(12)); // 15
console.log(nextNumb(13)); // 15
console.log(nextNumb(99)); // 105
console.log(nextNumb(999999)); // 1023459
console.log(nextNumb(9999999999)); // "There is no possible number that fulfills those requirements"

/**
 * @param {number} num
 * @returns {boolean}
 */
function hasUniqueDigits(num) {
    const strNum = String(num);
    const uniqueSet = new Set(String(num));

    return uniqueSet.size === strNum.length;
}

/**
 * @param {number} num
 * @returns {boolean}
 */
function isOdd(num) {
    return num % 2 !== 0;
}

/**
 * @param {number} num
 * @returns {boolean}
 */
function isMultipleOfThree(num) {
    return num % 3 === 0;
}
