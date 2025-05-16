"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {string} numbers 
 * @returns {string}  
 */
function computerToPhone(numbers){
    const COMPUTER_NUMS = "7894561230";
    const CELL_NUMS = "1234567890";
    let results = "";

    for (let num of numbers) {
        const numIndex = COMPUTER_NUMS.indexOf(num);
        const translatedNum = CELL_NUMS[numIndex];
        results += translatedNum;
    }

    return results;
}

console.log(computerToPhone("0789456123")); // "0123456789"
