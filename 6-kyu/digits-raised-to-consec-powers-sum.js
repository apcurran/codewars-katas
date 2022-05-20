"use strict";

/**
 * solution 1 -- nested loops
 * n = len of nums from a to b
 * m = len of digits for each num in n
 * time: O(n * m)
 * space: O(n + m)
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns {number[]}
 */
function sumDigPow(a, b) {
    let resArr = [];

    // iterate from a to b (inclusive)
    for (let num = a; num <= b; num++) {
        // check each num by converting to str, split, then iterate each digit raising to consec power and summing
        const splitDigitsStr = String(num).split("");
        let newRaisedNum = 0;
        
        for (let j = 0; j < splitDigitsStr.length; j++) {
            const digitNum = Number(splitDigitsStr[j]);
            const raisedPower = digitNum ** (j + 1);
            newRaisedNum += raisedPower;
        }

        // if sum is equal to original num, add to resArr
        if (newRaisedNum === num) resArr.push(num);
    }

    return resArr;
}

console.log( sumDigPow(1, 10) ); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log( sumDigPow(1, 100) ); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
