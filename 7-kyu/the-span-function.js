"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {number[]} arr
 * @param {function} predicate
 * @returns {number[][]}
 */
function span(arr, predicate) {
    let sequenceUntilFailure = [];
    let sequenceAfter = [];

    for (let i = 0; i < arr.length; i++) {
        if (predicate(arr[i])) {
            sequenceUntilFailure.push(arr[i]);
        } else {
            sequenceAfter = arr.slice(i);

            break;
        }
    }

    return [sequenceUntilFailure, sequenceAfter];
}

// function isEven(x) {
//     return Math.abs(x) % 2 === 0;
// }

// var arr = [2, 4, 6, 1, 8, 10];
// console.log(span(arr, isEven));
// [
//     [2, 4, 6],
//     [1, 8, 10],
// ],
