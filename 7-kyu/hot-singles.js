"use strict";

/**
 * solution 1 -- hashset
 * n = arr1 length
 * m = arr2 length
 * time: O(n + m)
 * space: O(n + m)
 *
 * @param {any[]} arr1
 * @param {any[]} arr2
 * @returns
 */
function hotSingles(arr1, arr2) {
    const arr1Set = new Set(arr1);
    const arr2Set = new Set(arr2);
    let singles = [];

    for (let value of arr1Set) {
        if (!arr2Set.has(value)) singles.push(value);
    }

    for (let value of arr2Set) {
        if (!arr1Set.has(value)) singles.push(value);
    }

    return singles;
}

console.log(hotSingles([1, 2, 3, 3], [3, 2, 1, 4, 5]));
// [4, 5]

console.log(
    hotSingles(
        ["tartar", "blanket", "cinnamon"],
        ["cinnamon", "blanket", "domino"],
    ),
);
// ["tartar", "domino"]
