"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {number} n 
 * @returns {function[]}
 */
function createFunctions(n) {
    var callbacks = [];

    for (var i = 0; i < n; i++) {
        const index = i;
        const currentFunc = function() {
            return index;
        };
        callbacks.push(currentFunc);
    }

    return callbacks;
}

var callbacks = createFunctions(5); // create an array, containing 5 functions
console.log( callbacks[0]() ); // 0
console.log( callbacks[3]() ); // 3
