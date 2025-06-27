"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {number} a
 * @param {number} b
 * @returns {boolean}
 */
function vampire_test(a, b) {
    // check for double negatives
    if (a < 0 && b < 0) return false;

    const aStrDigits = String(a).split("");
    const bStrDigits = String(b).split("");
    let aAndBStrDigitsCache = new Map();

    // add digits and counts to cache
    for (let strDigit of aStrDigits) {
        const previousStrDigitCount = aAndBStrDigitsCache.get(strDigit) || 0;
        aAndBStrDigitsCache.set(strDigit, previousStrDigitCount + 1);
    }

    for (let strDigit of bStrDigits) {
        const previousStrDigitCount = aAndBStrDigitsCache.get(strDigit) || 0;
        aAndBStrDigitsCache.set(strDigit, previousStrDigitCount + 1);
    }

    const product = a * b;
    const productStrDigits = String(product).split("");
    let productStrDigitsCache = new Map();

    // add digits and counts to separate cache
    for (let strDigit of productStrDigits) {
        const previousStrDigitCount = productStrDigitsCache.get(strDigit) || 0;
        productStrDigitsCache.set(strDigit, previousStrDigitCount + 1);
    }

    // iterate product digits cache
    // check for the digits matching the first cache
    for (let [strDigit, productCacheDigitCount] of productStrDigitsCache) {
        if (!aAndBStrDigitsCache.has(strDigit)) return false;

        // check counts to match
        const aAndBStrDigitCount = aAndBStrDigitsCache.get(strDigit);

        if (aAndBStrDigitCount !== productCacheDigitCount) return false;
    }

    return true;
}

console.log(vampire_test(21, 6)); // true
console.log(vampire_test(204, 615)); // true
console.log(vampire_test(-246, -510)); // false
console.log(vampire_test(2947051, 8469153)); // false
