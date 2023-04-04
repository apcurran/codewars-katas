"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} arr 
 * @param {number} valueToInsert 
 * @returns {number}
 */
function keepOrder(arr, valueToInsert) {
    for (let i = 0; i < arr.length; i++) {
        const currentValue = arr[i];

        if (currentValue >= valueToInsert) {
            return i;
        }
    }

    // insert at the end of the array
    return arr.length;
}

console.log( keepOrder([1, 2, 3, 4, 7], 5) ); //  4
console.log( keepOrder([1, 2, 3, 4, 7], 0) ); //  0
console.log( keepOrder([1, 1, 2, 2, 2], 2) ); //  2
console.log( keepOrder([1, 2, 3, 4], 5) ); // 4
console.log( keepOrder([1, 2, 3, 4], -1) ); // 0
console.log( keepOrder([1, 2, 3, 4], 2) ); // 1
console.log( keepOrder([1, 2, 3, 4], 0) ); // 0
console.log( keepOrder([1, 2, 3, 4], 1) ); // 0
console.log( keepOrder([1, 2, 3, 4], 2) ); // 1
console.log( keepOrder([1, 2, 3, 4], 3) ); // 2
