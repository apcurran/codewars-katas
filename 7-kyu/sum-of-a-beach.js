"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {string} beach
 * @returns {number}
 */
function sumOfABeach(beach) {
    const matches = beach.match(/(sand|water|fish|sun)/gi);

    return matches ? matches.length : 0;
}

console.log(sumOfABeach("GolDeNSanDyWateRyBeaChSuNN")); // 3
console.log(sumOfABeach("gOfIshsunesunFiSh")); // 4
console.log(sumOfABeach("cItYTowNcARShoW")); // 0
