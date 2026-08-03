/**
 * solution 1 -- closure
 * time: O(1)
 * space: O(1)
 *
 * @param {number} a
 * @param {number} [b] - optional b
 * @returns {number|function}
 */
function sum(a, b) {
    if (arguments.length === 2) {
        return a + b;
    }

    // no b arg provided
    // use JS closure
    return function addToA(b) {
        return a + b;
    };
}

console.log(sum(2, 3)); // 5
console.log(sum(2)(3)); // 5
console.log(sum(0, 0)); // 0
console.log(sum(0, -1)); // -1
