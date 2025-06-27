"use strict";

// /**
//  * solution 1
//  * time: O(n)
//  * space: O(n)
//  *
//  * @param {string} infected
//  * @param {string} discovered
//  * @returns {string}
//  */
// function uncensor(infected, discovered) {
//     let discoveredStrIndex = 0;
//     let resStr = "";

//     // iterate infected str
//     for (let char of infected) {
//         if (char !== "*") {
//             resStr += char;
//             continue;
//         }

//         // for each * char, replace * with discovered str's ordered char
//         const replacedChar = char.replace("*", discovered[discoveredStrIndex]);
//         resStr += replacedChar;
//         // incr idx by 1
//         discoveredStrIndex++;
//     }

//     return resStr;
// }

/**
 * solution 2 -- slightly optimized
 * time: O(n)
 * space: O(n)
 *
 * @param {string} infected
 * @param {string} discovered
 * @returns {string}
 */
function uncensor(infected, discovered) {
    let discoveredStrIndex = 0;

    return infected.replace(/\*/g, () => discovered[discoveredStrIndex++]);
}

console.log(uncensor("*h*s *s v*ry *tr*ng*", "Tiiesae")); // "This is very strange"
console.log(uncensor("A**Z*N*", "MAIG")); // "AMAZING"
