"use strict";


/**
 * 
 * @param {number} n 
 * @returns {boolean}
 */
function isNarcissistic(n) {
    // if (n.toString().length === 1) {
    //     return n === n ** 3;
    // }

    const digits = n
                    .toString()
                    .split("")
                    .reduce((total, currNum, index, arr) => total + Number(currNum) ** arr.length, 0);
    
    return n === digits;                
}

console.log( isNarcissistic(153) ); // true
console.log( isNarcissistic(435) ); // false
console.log( isNarcissistic(7) ); // false
console.log( isNarcissistic(1) ); // true
