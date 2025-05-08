"use strict";

/**
 * solution 1
 * n = numbers length
 * m = num binary length
 * time: O(n * m)
 * space: O(m)
 * 
 * @param {number[]} numbers 
 * @returns {'odds win'|'evens win'|'tie'}
 */
function bitsBattle(numbers) {
    let odd1BitsTotal = 0;
    let even0BitsTotal = 0;

    for (let num of numbers) {
        if (num === 0) continue;
        
        const binaryNum = num.toString(2);
        let zeroBitsCount = 0;
        let oneBitsCount = 0;

        for (let bit of binaryNum) {
            if (bit === "0") {
                zeroBitsCount++;
            } else {
                oneBitsCount++;
            }
        }

        if (num % 2 === 0) {
            even0BitsTotal += zeroBitsCount;
        } else {
            odd1BitsTotal += oneBitsCount;
        }
    }

    if (odd1BitsTotal > even0BitsTotal) {
        return "odds win";
    } else if (even0BitsTotal > odd1BitsTotal) {
        return "evens win";
    } else {
        return "tie";
    }
}

console.log(bitsBattle([5, 3, 14])); // "odds win"
