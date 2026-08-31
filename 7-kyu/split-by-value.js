/**
 * solution 1 -- separate arrays
 * time: O(n)
 * space: O(n)
 *
 * @param {number} k
 * @param {number[]} elements
 * @returns {number[]}
 */
function splitByValue(k, elements) {
    let valsLessThanK = [];
    let valsGreaterThanOrEqualToK = [];

    for (let val of elements) {
        if (val < k) {
            valsLessThanK.push(val);
        } else {
            valsGreaterThanOrEqualToK.push(val);
        }
    }

    return [...valsLessThanK, ...valsGreaterThanOrEqualToK];
}

console.log(splitByValue(6, [6, 4, 10, 10, 6])); // [4, 6, 10, 10, 6]
console.log(splitByValue(5, [1, 3, 5, 7, 6, 4, 2])); // [1, 3, 4, 2, 5, 7, 6]
console.log(splitByValue(0, [5, 2, 7, 3, 2])); // [5, 2, 7, 3, 2]
