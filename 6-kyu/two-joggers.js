"use strict";


function gcd(a, b) {
    return !b ? a : gcd(b, a % b);
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

/**
 * 
 * @param {number} x Length of Bob's laps
 * @param {number} y Length of Charles's laps
 * @returns {number[]} - Array of vals containing the number of laps that Bob and Charles have to run
 */
function nbrOfLaps(x, y) {
    const leastCommonMultiple = lcm(x, y);
    const bobLaps = leastCommonMultiple / x;
    const charlesLaps = leastCommonMultiple / y;

    return [bobLaps, charlesLaps];
}

console.log(nbrOfLaps(5, 3));
