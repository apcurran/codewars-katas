"use strict";

// /**
//  * solution 1 -- correct but TLE
//  * time: O(n^2) -- using array.shift() inside of a loop
//  * space: O(n)
//  * 
//  * @param {number[]} sArr
//  * @returns {number[]}
//  */
// function arrange(sArr) {
//     let sArrCopy = [...sArr];
//     let resTArr = [];

//     while (sArrCopy.length > 0) {
//         // remove elems
//         const firstElem = sArrCopy.shift();
//         const lastElem = sArrCopy.pop();
//         // add to tArr
//         if (firstElem !== undefined) resTArr.push(firstElem);

//         if (lastElem !== undefined) resTArr.push(lastElem);
//         // reverse sArrCopy
//         sArrCopy.reverse();
//     }

//     return resTArr;
// }

/**
 * solution 2
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} sArr
 * @returns {number[]}
 */
function arrange(sArr) {
    let resTArr = [];
    let leftPointer = 0;
    let rightPointer = sArr.length - 1;

    while (leftPointer < rightPointer) {
        const firstElem = sArr[leftPointer];
        const lastElem = sArr[rightPointer];

        if (leftPointer % 2 !== 0) {
            resTArr.push(lastElem, firstElem);
        } else {
            resTArr.push(firstElem, lastElem);
        }

        leftPointer++;
        rightPointer--;
    }
    
    if (sArr.length % 2 !== 0) {
        resTArr.push(sArr[leftPointer]);
    }

    return resTArr;
}

console.log( arrange([1,2,3,4,5,6]) ); // [1,6,5,2,3,4]
