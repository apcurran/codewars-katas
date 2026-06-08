/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @returns {number}
 */
Array.prototype.size = function () {
    let sizeCount = 0;

    for (let _elem of this) {
        sizeCount++;
    }

    return sizeCount;
};

console.log([].size()); // 0
console.log([1].size()); // 1
console.log([1, 2].size()); // 2
