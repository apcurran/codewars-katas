"use strict";

/**
 * solution 1 -- recursion
 * time: O(n^2)
 * space: O(n)
 * 
 * @param {number[]} arr 
 * @returns {number}
 */
function total(arr) {
    if (arr.length === 1) return arr[0];

    // otherwise, add pairs up and create new array
    let newArr = [];

    for (let i = 0; i < arr.length - 1; i++) {
        const currentNum = arr[i];
        const nextNum = arr[i + 1];
        const sum = currentNum + nextNum;
        newArr.push(sum);
    }

    return total(newArr);
}

console.log(total([1, 2, 3, 4, 5])); // 48
