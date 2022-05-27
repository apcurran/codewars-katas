"use strict";

/**
 * solution 1 -- iterative
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} numbers 
 * @returns {number[]}
 */
function averages(numbers) {
    if (numbers === null || numbers.length <= 1) return [];

    let avgsArr = [];

    for (let i = 0; i < numbers.length - 1; i++) {
        const currNum = numbers[i];
        const nextNum = numbers[i + 1];
        const currAvg = (currNum + nextNum) / 2;
        avgsArr.push(currAvg);
    }

    return avgsArr;
}

console.log( averages([1, 3, 5, 1, -10]) ); // [2, 4, 3, -4.5]
