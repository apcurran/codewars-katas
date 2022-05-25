"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} arr 
 * @returns {number}
 */
function cubeOdd(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        const currNum = arr[i];

        if (typeof currNum !== "number") return undefined;

        if (currNum % 2 === 0) continue;

        const cubedNum = currNum ** 3;
        sum += cubedNum;
    }

    return sum;
}

console.log( cubeOdd([1, 2, 3, 4]) ); // 28
console.log( cubeOdd([-3, -2, 2, 3]) ); // 0
console.log( cubeOdd(["a", 12, 9, "z", 42]) ); // undefined
