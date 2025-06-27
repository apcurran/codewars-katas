"use strict";

/**
 * solution 1 -- recursion
 * time: O(n * m)
 * space: O(m) -- due to recursive call stack
 * 
 * @param {number[]} arr 
 * @returns {number}
 */
function sumFactorial(arr) {
    let sum = 0;

    for (let num of arr) {
        const factorial = calcFactorial(num);
        sum += factorial;
    }

    return sum;
}

/**
 * @param {number} num 
 * @param {Map} cache
 * @returns {number}
 */
function calcFactorial(num) {
    if (num <= 1) return 1;

    return num * calcFactorial(num - 1);
}

console.log( sumFactorial([4, 6]) ); // 744
console.log( sumFactorial([5, 4, 1]) ); // 145
