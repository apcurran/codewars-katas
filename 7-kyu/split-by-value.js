// /**
//  * solution 1 -- separate arrays
//  * time: O(n)
//  * space: O(n)
//  *
//  * @param {number} k
//  * @param {number[]} elements
//  * @returns {number[]}
//  */
// function splitByValue(k, elements) {
//     let valsLessThanK = [];
//     let valsGreaterThanOrEqualToK = [];

//     for (let val of elements) {
//         if (val < k) {
//             valsLessThanK.push(val);
//         } else {
//             valsGreaterThanOrEqualToK.push(val);
//         }
//     }

//     return [...valsLessThanK, ...valsGreaterThanOrEqualToK];
// }

/**
 * solution 1 -- array.sort()
 * time: O(n * log n) sort() method
 * space: O(n)
 *
 * @param {number} k
 * @param {number[]} elements
 * @returns {number[]}
 */
function splitByValue(k, elements) {
    return elements.sort((a, b) => {
        const aGreater = a >= k ? 1 : 0;
        const bGreater = b >= k ? 1 : 0;

        return aGreater - bGreater;
    });
}

console.log(splitByValue(6, [6, 4, 10, 10, 6])); // [4, 6, 10, 10, 6]
console.log(splitByValue(5, [1, 3, 5, 7, 6, 4, 2])); // [1, 3, 4, 2, 5, 7, 6]
console.log(splitByValue(0, [5, 2, 7, 3, 2])); // [5, 2, 7, 3, 2]
