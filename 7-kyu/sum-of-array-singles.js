"use strict";

const { performance } = require("perf_hooks");

function repeats(arr){
    let valsMap = new Map();
    let singlesSum = 0;

    for (let val of arr) {
        if (valsMap.has(val)) {
            valsMap.set(val, "duplicate");
        } else {
            valsMap.set(val, "single");
        }
    }

    valsMap.forEach((val, key) => {
        if (val === "single") {
            singlesSum += key;
        }
    });

    return singlesSum;
}

// Option 2

// function repeats(arr){
//     let valsSoFar = {};
//     let singlesSum = 0;
    
//     for (let val of arr) {
//         valsSoFar[val] = (valsSoFar[val] + 1) || 1;
//     }
    
//     for (let [key, value] of Object.entries(valsSoFar)) {
//         if (value === 1) {
//             singlesSum += Number(key);
//         }
//     }
    
//     return singlesSum;
// }

const start = performance.now();
repeats([4,5,7,5,4,8]);
repeats([9, 10, 19, 13, 19, 13]);
repeats([16, 0, 11, 4, 8, 16, 0, 11]);
repeats([5, 17, 18, 11, 13, 18, 11, 13]);
repeats([5, 10, 19, 13, 10, 13]);
const end = performance.now();

console.log(end - start);