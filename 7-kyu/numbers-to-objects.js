"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} nums 
 * @returns {object[]}
 */
function numObj(nums) {
    let results = [];

    for (let num of nums) {
        const numCharCodeValue = String.fromCharCode(num);
        const numObj = {
            [num]: numCharCodeValue,
        };
        results.push(numObj);
    }

    return results;
}

console.log(numObj([118, 117, 120])); // [{'118':'v'}, {'117':'u'}, {'120':'x'}]
