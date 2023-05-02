"use strict";

/**
 * solution 1
 * time: O(n * m)
 * space: O(x)
 * 
 * @returns {Object}
 */
function combine(...args) {
    let result = {};
    
    for (let obj of args) {
        for (let prop in obj) {
            if (prop in result) {
                result[prop] += obj[prop];
            } else {
                result[prop] = obj[prop];
            }
        }
    }

    return result;
}

console.log( combine({ a: 10, b: 20, c: 30 }, { a: 3, c: 6, d: 3 }) );
// { a: 13, b: 20, c: 36, d: 3 }
