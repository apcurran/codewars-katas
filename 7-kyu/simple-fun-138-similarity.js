/**
 * solution 1 -- set operations
 * time: O(a * b)
 * space: O(a + b)
 *
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number}
 */
function similarity(a, b) {
    // elems present in both arrays
    let intersection = 0;

    for (let elem of a) {
        if (b.includes(elem)) {
            intersection++;
        }
    }
    // elems present in AT LEAST 1 array
    const union = new Set([...a, ...b]).size;

    return intersection / union;
}

console.log(similarity([1, 2, 4, 6, 7], [2, 3, 4, 7])); // 3 / 6 = 0.5
