"use strict";

/**
 * solution 1
 * time: O(n^2) -- due to unshift displacing chars within a loop
 * space: O(n)
 * 
 * @param {string} first 
 * @param {string} second 
 * @returns {number}
 */
function shiftedDiff(first, second) {
    if (first === second) return 0;

    let firstStrArr = [...first];
    let rotationCount = 0;

    for (let i = 0; i < firstStrArr.length; i++) {
        const [removedChar] = firstStrArr.splice(firstStrArr.length - 1, 1);
        firstStrArr.unshift(removedChar);
        const revisedFirstStr = firstStrArr.join("");
        
        rotationCount++;
        
        if (revisedFirstStr === second) return rotationCount;
    }

    return -1;
}

console.log( shiftedDiff("eecoff", "coffee") ); // 4
console.log( shiftedDiff("Moose", "moose") ); // -1
