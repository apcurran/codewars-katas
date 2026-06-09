/**
 * solution 1
 * n = arr length
 * k = leftovers from arr after dropping condition stops
 * time: O(n)
 * space: O(k)
 *
 * @param {number[]} arr
 * @param {Function} predicate
 * @returns {number[]}
 */
function dropWhile(arr, predicate) {
    if (!Array.isArray(arr)) {
        return [];
    }

    if (typeof predicate !== "function") {
        throw new TypeError("predicate arg must be a function");
    }

    const kIndex = arr.findIndex((elem) => !predicate(elem));

    return kIndex === -1 ? [] : arr.slice(kIndex);
}

const isEven = (num) => num % 2 === 0;
const seq = [2, 4, 6, 8, 1, 2, 5, 4, 3, 2];
console.log(dropWhile(seq, isEven)); // -> [1,2,5,4,3,2]
