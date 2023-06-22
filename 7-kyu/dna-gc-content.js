"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n) -- dna str copy
 * 
 * @param {string} dna 
 * @returns {number}
 */
function gcContent(dna) {
    if (dna === "") return 0;

    const convertedUpperDna = dna.toUpperCase();
    let gcInstancesCount = 0;

    for (let char of convertedUpperDna) {
        if (char === "G" || char === "C") {
            gcInstancesCount++;
        }
    }

    return (gcInstancesCount / dna.length) * 100;
}

console.log(gcContent("G")); // 100
console.log( gcContent("C") ); // 100
console.log( gcContent("A") ); // 0
console.log( gcContent("T") ); // 0
console.log( gcContent("AAA") ); // 0.0
console.log( gcContent("AAACCCGGGTTT") ); // 50
console.log( gcContent("") ); // 0.0
console.log( gcContent("aaacccgggttt") ); // 50
