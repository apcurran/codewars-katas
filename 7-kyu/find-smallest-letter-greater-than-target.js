"use strict";

// /**
//  * solution 1
//  * time: O(n)
//  * space: O(1)
//  *
//  * @param {string[]} letters
//  * @param {string} target
//  * @return {string}
//  */
// function nextGreatestLetter(letters, target) {
//     // get charCode of target
//     const targetCharCode = target.charCodeAt(0);
//     // iterate letters list
//     for (let letter of letters) {
//         const currentLetterCharCode = letter.charCodeAt(0);
//         // if so, return current letter
//         if (currentLetterCharCode > targetCharCode) {
//             return letter;
//         }
//     }
//     // after checking all letters and none work,
//     // return the first letter of list
//     return letters[0];
// }

// /**
//  * solution 2 -- more concise
//  * time: O(n)
//  * space: O(1)
//  *
//  * @param {string[]} letters
//  * @param {string} target
//  * @return {string}
//  */
// function nextGreatestLetter(letters, target) {
//     const nextLargest = letters.find((letter) => letter > target);
//     // after checking all letters and none work,
//     // return the first letter of list
//     return nextLargest || letters[0];
// }

/**
 * solution 3 -- binary search
 * time: O(log n)
 * space: O(1)
 *
 * @param {string[]} letters
 * @param {string} target
 * @return {string}
 */
function nextGreatestLetter(letters, target) {
    let left = 0;
    let right = letters.length - 1;

    while (left <= right) {
        const middle = left + Math.floor((right - left) / 2);

        if (letters[middle] <= target) {
            left = middle + 1;
        } else if (letters[middle] > target) {
            right = middle - 1;
        }
    }

    if (left === letters.length) return letters[0];

    return letters[left];
}

console.log(nextGreatestLetter(["c", "f", "j"], "a")); // "c"
console.log(nextGreatestLetter(["c", "f", "j"], "c")); // "f"
console.log(nextGreatestLetter(["x", "x", "y", "y"], "z")); // "x"
