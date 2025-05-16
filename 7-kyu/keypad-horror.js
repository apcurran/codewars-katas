"use strict";

// /**
//  * solution 1
//  * time: O(n)
//  * space: O(1)
//  * 
//  * @param {string} numbers 
//  * @returns {string}  
//  */
// function computerToPhone(numbers){
//     const COMPUTER_NUMS = "7894561230";
//     const CELL_NUMS =     "1234567890";
//     let results = "";

//     for (let num of numbers) {
//         const numIndex = COMPUTER_NUMS.indexOf(num);
//         const translatedNum = CELL_NUMS[numIndex];
//         results += translatedNum;
//     }

//     return results;
// }

/**
 * solution 2 -- hashmap
 * time: O(n)
 * space: O(1)
 * 
 * @param {string} numbers 
 * @returns {string}  
 */
function computerToPhone(numbers){
    const COMPUTER_TO_CELL_MAPPING = new Map([
        [7, 1],
        [8, 2],
        [9, 3],
        [4, 4],
        [5, 5],
        [6, 6],
        [1, 7],
        [2, 8],
        [3, 9],
        [0, 0],
    ]);
    let results = "";

    for (let num of numbers) {
        const translatedNum = COMPUTER_TO_CELL_MAPPING.get(Number(num));
        results += translatedNum;
    }

    return results;
}

console.log(computerToPhone("0789456123")); // "0123456789"
