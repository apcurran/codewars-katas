"use strict";

/**
 * solution 1
 * time: O(1) -- technically bounded to O(3) since results is limited to length 3 max
 * space: O(1)
 * 
 * @param {number[]} array
 * @returns {number[]}
 */
function reverseMiddle(array) {
    const isEven = array.length % 2 === 0;
    const middleIndex = Math.floor(array.length / 2);
    let results = [];
    
    if (isEven) {
        // if list is even -> get middle 2
        const middleTwoNums = array.slice(middleIndex - 1, middleIndex + 1);
        results = middleTwoNums;
    } else {
        // if list is odd -> get middle 3
        const middleThreeNums = array.slice(middleIndex - 1, middleIndex + 2);
        results = middleThreeNums;
    }

    return results.reverse();
}

console.log(reverseMiddle([1, 2, 3, 4])); // [3, 2]
console.log(reverseMiddle([1, 2, 3, 4, 5])); // [4, 3, 2]
