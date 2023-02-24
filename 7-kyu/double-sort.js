"use strict";

/**
 * solution 1
 * time: O(n * log n)
 * space: O(n)
 * 
 * @param {array} arr 
 * @returns {array}
 */
function dbSort(arr) {
    const numbers = arr.filter((elem) => typeof elem === "number");
    const strings = arr.filter((elem) => typeof elem === "string");
    const sortedNumbers = [...numbers].sort((a, b) => a - b);
    const sortedStrings = [...strings].sort();
    
    return [...sortedNumbers, ...sortedStrings];
}

console.log( dbSort(["Banana", "Orange", "Apple", "Mango", 0, 2, 2]) ); // [0,2,2,"Apple","Banana","Mango","Orange"]
