"use strict";

/**
 * solution 1 -- iterative
 * time: O(n)
 * space: O(n)
 * 
 * @param {number} n 
 * @param {any} firstValue 
 * @param {any} secondValue 
 * @returns {array}
 */
function alternate(n, firstValue, secondValue) {
    let resArr = [];

    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) {
            resArr.push(firstValue);
        } else {
            resArr.push(secondValue);
        }
    }

    return resArr;
}

console.log( alternate(5, true, false) ); // [true, false, true, false, true]
console.log( alternate(20, "blue", "red") ); // ['blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red']
