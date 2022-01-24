"use strict";

function iqTest(numsArr) {
    const nums = numsArr
                    .split(" ")
                    .map((numStr) => Number(numStr));

    let evens = [];
    let odds = [];

    nums.forEach((num, index) => {
        if (num % 2 === 0) {
            evens.push(index + 1);
        } else {
            odds.push(index + 1);
        }
    });

    return evens.length === 1 ? evens[0] : odds[0];
}

console.log(iqTest("2 4 7 8 10")); // 3
console.log(iqTest("1 2 2")); // 1