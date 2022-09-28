"use strict";

/**
 * solution 1
 * time: O(n^2) -- array.unshift() is O(n) op within an O(n) loop
 * space: O(n)
 * 
 * @param {number[]} values 
 * @returns {number[]}
 */
function pendulum(values) {
    // sort ASC
    let valuesCopy = [...values].sort((a, b) => a - b);
    let resArr = [];

    for (let i = 0; i < valuesCopy.length; i++) {
        const currNum = valuesCopy[i];

        if (i % 2 === 0) {
            // is even index
            resArr.unshift(currNum);
        } else {
            // odd index
            resArr.push(currNum);
        }
    }

    return resArr;
}

console.log( pendulum([4,10,9]) ); // [10,4,9]
console.log( pendulum([8,7,10,3]) ); // [8,3,7,10]
console.log( pendulum([6,6,8,5,10]) ); // [10,6,5,6,8]
