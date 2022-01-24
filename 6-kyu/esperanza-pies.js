"use strict";

/**
 * 
 * @param {number} t - Number of cakes to bake
 * @returns {number} - Amout of cakes that each person will get 
 */
// function esperanzaPies(t) {
//     return Math.floor(t / .8);
// }


// SHORTENED VERSION
const esperanzaPies = (t) => t/.8|0;

console.log(esperanzaPies(1)); // 1
console.log(esperanzaPies(5)); // 6