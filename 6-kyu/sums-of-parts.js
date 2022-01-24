"use strict";

// NOTE: Working algorithm, but needs to be performance optimized.
// Method 1 slower...
// function partsSums(arr) {
//     let arrOfSums = [];

//     for (let i = 0; i <= arr.length; i++) {
//         const slicedArr = arr.slice(i);
//         let partialArrSum = 0;

//         for (let num of slicedArr) {
//             partialArrSum += num;
//         }

//         arrOfSums.push(partialArrSum);
//     }

//     return arrOfSums;
// }

// Method 2 fast version
function partsSums(arr) {
    let firstSum = 0; // mutated later

    for (let num of arr) {
        firstSum += num;
    }

    let arrOfSums = [];
    arrOfSums.push(firstSum);

    for (let num of arr) {
        arrOfSums.push(firstSum -= num);
    }

    return arrOfSums;
}

console.log(partsSums([0, 1, 3, 6, 10])); // [20, 20, 19, 16, 10, 0]
// console.log(partsSums([1, 2, 3, 4, 5, 6]));
// console.log(partsSums([744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]));