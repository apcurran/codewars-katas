/**
 * solution 1 -- hashset
 * time: O(n)
 * space: O(n)
 *
 * @param {Set<number>} s1
 * @param {Set<number>} s2
 * @returns {Set<number>}
 */
function diff(s1, s2) {
    let result = new Set(s1);
    // remove any elements from s1 that are also in s2
    for (let elem of s2) {
        result.delete(elem);
    }

    return result;
}

console.log(diff(new Set([1, 2, 3, 4]), new Set([1, 3]))); // {2, 4}
