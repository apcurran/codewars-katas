"use strict";

/**
 * solution 1
 * n = expr length
 * m = numStr length
 * time: O(n * m)
 * space: O(n + m)
 * 
 * @param {string} expr 
 * @returns {number}
 */
function digitMultiplication(expr) {
    const numStrs = expr.split(/(?=[+-])/);
    const firstNumDigitsProduct = getDigitsProduct(numStrs[0]);
    let result = firstNumDigitsProduct;
    
    // multiply adjacent digits of each num
    for (let i = 1; i < numStrs.length; i++) {
        const num = numStrs[i];
        const operator = num[0];
        const numberStr = num.slice(1);
        const digitsProduct = getDigitsProduct(numberStr);

        // add or sub products
        if (operator === "+") {
            result += digitsProduct;
        } else {
            result -= digitsProduct;
        }
    }

    return result;
}

/**
 * @param {string} numStr 
 * @returns {number}
 */
function getDigitsProduct(numStr) {
    let digitsProduct = 1;

    for (let digitStr of numStr) {
        digitsProduct *= Number(digitStr);
    }

    return digitsProduct;
}

console.log(digitMultiplication("53+5")); // 20
console.log(digitMultiplication("266-66")); // 36
