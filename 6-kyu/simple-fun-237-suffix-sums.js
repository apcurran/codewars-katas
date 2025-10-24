/**
 * solution 1
 * time: O(n)
 * space: O(1) -- not including results array
 *
 * @param {number[]} a
 * @returns {number[]}
 */
function suffixSums(a) {
    const sum = a.reduce((prev, curr) => prev + curr, 0);
    let prefixValue = sum;
    let results = [prefixValue];

    for (let i = 0; i < a.length - 1; i++) {
        prefixValue -= a[i];
        results.push(prefixValue);
    }

    return results;
}

console.log(suffixSums([1, 2, 3])); // [6, 5, 3]
console.log(suffixSums([1, 2, 3, -6])); // [0, -1, -3, -6]
