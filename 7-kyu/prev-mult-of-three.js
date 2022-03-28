"use strict";

// /**
//  * solution 1 -- recursive
//  * n = num digits length
//  * time: O(n^2)
//  * space: O(n) -- recursive call stack
//  * 
//  * @param {number} n 
//  * @returns {number|null}
//  */
// function prevMultOfThree(n) {
//     // check if mult of 3
//     if (n % 3 === 0) return n;

//     const strNum = String(n);

//     // check if only 1 digit (and not already a mult of 3)
//     if (strNum.length === 1) return null;

//     const revisedNum = Number(strNum.slice(0, -1));

//     return prevMultOfThree(revisedNum);
// }

/**
 * solution 2 -- iterative
 * n = num digits length
 * time: O(n)
 * space: O(1) -- recursive call stack
 * 
 * @param {number} n 
 * @returns {number|null}
 */
function prevMultOfThree(n) {
    // check if mult of 3
    if (n % 3 === 0) return n;

    while (n % 3 !== 0) {
        n = Math.floor(n / 10);

        if (n < 1) return null;
    }

    return n;
}

console.log( prevMultOfThree(25) ); // null
console.log( prevMultOfThree(1244) ); // 12
console.log( prevMultOfThree(36) ); // 36
console.log( prevMultOfThree(952406) ); // 9
