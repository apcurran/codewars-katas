"use strict";

/**
 * solution 1 -- mutating func (Fisher–Yates shuffle)
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} arr 
 * @returns {number[]}
 */
function shuffle(arr) {
    let currentIndex = arr.length;
    let randomIndex = arr.length;

    while (currentIndex !== 0) {
        // pick a leftover element
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // swap elem with current elem
        [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
    }

    return arr;
}

console.log(shuffle([1, 2, 3, 4])); // ex. [3,1,4,2]
