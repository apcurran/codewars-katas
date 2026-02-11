// /**
//  * solution 1
//  * time: O(log(3) n)
//  * space: O(1)
//  *
//  * @param {number} n
//  * @returns {number}
//  */
// function largestPower(n) {
//     let power = 0;

//     while (3 ** power < n) {
//         power++;
//     }

//     return power - 1;
// }

/**
 * solution 2 -- logarithm
 * time: O(1)
 * space: O(1)
 *
 * @param {number} n
 * @returns {number}
 */
function largestPower(n) {
    // change of base formula
    // need log10 to solve imprecision leading to some false answers with log()
    const logBase3 = Math.ceil(Math.log10(n) / Math.log10(3));

    // must be less than log(base 3)(n)
    return logBase3 - 1;
}

console.log(largestPower(1)); // -1
console.log(largestPower(3)); // 0
console.log(largestPower(5)); // 1
console.log(largestPower(7)); // 1
console.log(largestPower(81)); // 3
console.log(largestPower(82)); // 4
