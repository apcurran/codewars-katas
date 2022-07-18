"use strict";

// Print the collatz sequence starting with positive integer n.
/**
 * solution 1 -- recursion
 * time: O(n * log n)
 * space: O(n * log n)
 * 
 * @param {number} n 
 * @param {string} resStr 
 * @returns {string}
 */
function collatz(n, resStr = `${n}`) {
    if (n === 1) return resStr;

    // recursive func
    // check if even
    if (n % 2 === 0) {
        // divide n by 2 and call recursive case
        const newVal = n / 2;
        const newStr = `${resStr}->${newVal}`;
        return collatz(newVal, newStr);
    } else {
        // must be odd
        // mult n by 3, then add 1 and call recursive case
        const newVal = n * 3 + 1;
        const newStr = `${resStr}->${newVal}`;
        return collatz(newVal, newStr);
    }
}

console.log( collatz(3) ); // "3->10->5->16->8->4->2->1"
console.log( collatz(4) ); // "4->2->1"
