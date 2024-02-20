"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} temp 
 * @returns {number|null}
 */
function lowestTemp(temp) {
    if (temp === "") return null;

    const temperatures = temp.split(" ");
    let minTemp = Number(temperatures[0]);

    for (let i = 1; i < temperatures.length; i++) {
        const currentTemp = Number(temperatures[i]);
        minTemp = Math.min(minTemp, currentTemp);
    }

    return minTemp;
}

console.log(lowestTemp("")); // null
console.log(lowestTemp("-1 50 -4 20 22 -7 0 10 -8")); // -8
console.log(lowestTemp("18 27 -42 16 17 -43 36 45 -25 -24 19 -14")); // -43
