"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param  {...any} args 
 * @returns {number}
 */
function add(...args) {
    let sum = 0;

    for (let i = 0; i < args.length; i++) {
        const product = args[i] * (i + 1);
        sum += product;
    }

    return sum;
}

console.log(add(3, 4, 5)); // 26
console.log(add(1, 4, -5, 5)); // 14
