"use strict";

// /**
//  * solution 1 -- hashset
//  * time: O(n)
//  * space: O(n)
//  * 
//  * @param  {...any} args 
//  * @returns {boolean}
//  */
// function solution(...args) {
//     let seenValues = new Set();

//     for (let value of args) {
//         if (seenValues.has(value)) {
//             return true;
//         }

//         seenValues.add(value);
//     }

//     return false;
// }

/**
 * solution 2 -- hashset alternate
 * time: O(n)
 * space: O(n)
 * 
 * @param  {...any} args 
 * @returns {boolean}
 */
function solution() {
    return new Set(arguments).size !== arguments.length;
}

console.log(solution(1, 2, 3)); // false
console.log(solution(1, 2, 3, 6, 5, 6)); // true
console.log(solution("a", "b", "c", "a")); // true
console.log(solution(1, 2, 3, "a", "b")); // false
