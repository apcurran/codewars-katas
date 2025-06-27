"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {string} strNumber
 * @returns {number|string}
 */
function lowestProduct(strNumber) {
    if (strNumber.length < 4) return "Number is too small";

    let smallestProduct = Infinity;

    for (let i = 0; i < strNumber.length - 3; i++) {
        const number1 = Number(strNumber[i]);
        const number2 = Number(strNumber[i + 1]);
        const number3 = Number(strNumber[i + 2]);
        const number4 = Number(strNumber[i + 3]);
        const numbersProduct = number1 * number2 * number3 * number4;

        if (numbersProduct < smallestProduct) {
            smallestProduct = numbersProduct;
        }
    }

    return smallestProduct;
}

console.log(lowestProduct("123456789")); // 24
console.log(lowestProduct("35")); // "Number is too small"
