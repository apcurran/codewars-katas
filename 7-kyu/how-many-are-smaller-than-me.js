"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(n)
 * 
 * @param {number[]} nums 
 * @returns {number[]}
 */
function smaller(nums) {
    let smallerThanArr = [];

    for (let i = 0; i < nums.length; i++) {
        const currNum = nums[i];
        const smallerNumsAmtThanCurr = nums
            .slice(i + 1)
            .filter((num) => num < currNum)
            .length;
        
        smallerThanArr.push(smallerNumsAmtThanCurr);
    }

    return smallerThanArr;
}

console.log( smaller([5, 4, 3, 2, 1]) ); // [4, 3, 2, 1, 0]
console.log( smaller([1, 2, 0]) ); // [1, 1, 0]
