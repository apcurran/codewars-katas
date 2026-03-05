/**
 * solution 1 -- Pythagorean Theorem
 * c = a + b
 * time: O(c) -- toFixed() call on c
 * space: O(c) -- toFixed() call
 *
 * @param {any} a
 * @param {any} b
 * @returns {number|Error}
 */
function calculateHypotenuse(a, b) {
    if (
        typeof a !== "number" ||
        typeof b !== "number" ||
        Number.isNaN(a) ||
        Number.isNaN(b) ||
        a <= 0 ||
        b <= 0
    ) {
        throw new Error("Input is not valid.");
    }

    // rounded to 3 decimal places
    return Number(Math.sqrt(a ** 2 + b ** 2).toFixed(3));
}

console.log(calculateHypotenuse(1, 1)); // returns 1.414
console.log(calculateHypotenuse(3, 4)); // returns 5
console.log(calculateHypotenuse(-2, 1)); // throws error
console.log(calculateHypotenuse("one", "two")); // throws error
