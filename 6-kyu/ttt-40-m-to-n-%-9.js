"use strict";

/**
 * solution 1 -- BigInt conversion
 * time: O(n)
 * space: O(n)
 * 
 * @param {number} m 
 * @param {number} n 
 * @returns {number}
 */
function nMod9(m, n) {
    let sequence = "";

    for (let i = m; i <= n; i++) {
        sequence += i;
    }

    const bigIntResult = BigInt(sequence) % BigInt(9);

    return Number(bigIntResult);
}

console.log(nMod9(1,2)); // 3
console.log(nMod9(1,3)); // 6
console.log(nMod9(2,3)); // 5
console.log(nMod9(1, 8)); // 0
console.log(nMod9(1,20)); // 3
console.log(nMod9(10,100)); // 1
console.log(nMod9(1,2016)); // 0
