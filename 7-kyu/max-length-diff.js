"use strict";

/**
 * Max length diffence between the lengths of two arrays of strings (find max from both arrs and min from both arrs, then subtract).
 * @param {array} a1 
 * @param {array} a2
 * @returns {number}
 */
// Option 1
// function mxdiflg(a1, a2) {
//     const arr1StrLengths = a1.map((str) => str.length);
//     const arr2StrLengths = a2.map((str) => str.length);
//     const fullValsArr = [arr1StrLengths, arr2StrLengths].flat();
    
//     const maxVal = Math.max(...fullValsArr);
//     const minVal = Math.min(...fullValsArr);

//     return maxVal - minVal;
// }

// Option 2
function mxdiflg(a1, a2) {
    if (a1.length === 0 || a2.length === 0) return -1;

    const arr1StrLengths = a1.map((str) => str.length);
    const arr2StrLengths = a2.map((str) => str.length);
    const fullValsArr = [...arr1StrLengths, ...arr2StrLengths];
    
    const maxVal = Math.max(...fullValsArr);
    const minVal = Math.min(...fullValsArr);

    return maxVal - minVal;
}

// Test
const a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
const a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
console.log(mxdiflg(a1, a2)) // 13