"use strict";

/**
 * 
 * @param {number} n 
 * @returns {number}
 */
function nthEven(n) {
    return 2 * (n - 1);
}

console.log( nthEven(1) ); // 0
console.log( nthEven(2) ); // 2
console.log( nthEven(3) ); // 4
console.log( nthEven(100) ); // 4
console.log( nthEven(1298734) ); // 2597466