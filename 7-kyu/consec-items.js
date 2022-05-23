"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} arr 
 * @param {number} a 
 * @param {number} b 
 */
function consecutive(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        const currNum = arr[i];
        const nextNum = arr[i + 1];
        
        if (currNum === a && nextNum === b) {
            return true;
        } else if (currNum === b && nextNum === a) {
            return true;
        }
    }

    return false;
}

console.log( consecutive([1, 3, 5, 7], 3, 7) ); // false
console.log( consecutive([1, 3, 5, 7], 3, 1) ); // true
