"use strict";

/**
 * solution 1 -- two pointers technique
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} golds 
 * @returns {[number, number]}
 */
function distributionOf(golds) {
    let beggarAGold = 0;
    let beggarBGold = 0;

    let isBeggarATurn = true;
    let leftPointer = 0;
    let rightPointer = golds.length - 1;

    while (leftPointer <= rightPointer) {
        // add larger gold pile from either left or right side
        if (golds[leftPointer] >= golds[rightPointer]) {
            // add left pile
            if (isBeggarATurn) {
                beggarAGold += golds[leftPointer];
            } else {
                beggarBGold += golds[leftPointer];
            }

            // adjust pointer
            leftPointer++;
        } else {
            // add right pile
            if (isBeggarATurn) {
                beggarAGold += golds[rightPointer];
            } else {
                beggarBGold += golds[rightPointer];
            }

            // adjust pointer
            rightPointer--;
        }

        // flip flag
        isBeggarATurn = !isBeggarATurn;
    }

    return [beggarAGold, beggarBGold];
}

console.log(distributionOf([4, 7, 2, 9, 5, 2])); // [11, 18]
console.log(distributionOf([10, 1000, 2, 1])); // [12, 1001]
