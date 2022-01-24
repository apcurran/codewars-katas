"use strict";

function evenLast(nums) {
    if (nums.length === 0) return 0;

    let evenIndexedNumsTotal = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            evenIndexedNumsTotal += nums[i];
        }
    }
    
    return evenIndexedNumsTotal * nums[nums.length - 1];
}

console.log(evenLast([2, 3, 4, 5])); // 30